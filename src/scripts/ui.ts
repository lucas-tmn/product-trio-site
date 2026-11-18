// Minimal vanilla JS: sticky shadow, mobile menu, language switch, filters, contact form.
const $$ = <T extends HTMLElement>(s: string) => Array.from(document.querySelectorAll<T>(s));
const $ = <T extends HTMLElement>(s: string) => document.querySelector<T>(s);

// sticky nav elevation
const nav = $('#nav');
const onScroll = () => nav?.classList.toggle('is-stuck', scrollY > 8);
addEventListener('scroll', onScroll, { passive: true });
onScroll();

// mobile menu
const mb = $<HTMLButtonElement>('.ds-menu-btn');
const mm = $('#m-menu');
const setMenu = (open: boolean) => {
  if (!mb || !mm) return;
  mm.classList.toggle('is-open', open);
  mb.setAttribute('aria-expanded', String(open));
  mb.textContent = (open ? mb.dataset.labelClose : mb.dataset.labelOpen) ?? '';
};
mb?.addEventListener('click', () => setMenu(!mm?.classList.contains('is-open')));
mm?.addEventListener('click', (e) => { if ((e.target as HTMLElement).closest('a')) setMenu(false); });
addEventListener('keydown', (e) => { if (e.key === 'Escape' && mm?.classList.contains('is-open')) { setMenu(false); mb?.focus(); } });

// language switch: navigates to the same page under the other locale
$$('[data-lang-href]').forEach((b) =>
  b.addEventListener('click', () => { location.href = (b.dataset.langHref ?? '') + location.hash; }));

// filters
const pills = $$<HTMLButtonElement>('#filters button');
const cards = $$('#cases > [data-type]');
const count = $('#count');
const applyFilter = (f: string) => {
  pills.forEach((p) => p.setAttribute('aria-pressed', String(p.dataset.filter === f)));
  let n = 0;
  cards.forEach((c) => { const show = f === 'all' || c.dataset.type === f; c.hidden = !show; if (show) n++; });
  if (count) count.textContent = (count.dataset.template ?? '').replace('{n}', String(n)).replace('{total}', String(cards.length));
};
pills.forEach((p) => p.addEventListener('click', () => applyFilter(p.dataset.filter ?? 'all')));

// contact form (static site: opens the visitor's email app with the message prepared)
const form = $<HTMLFormElement>('#contact-form');
form?.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = form.querySelector<HTMLInputElement>('#cf-name')!;
  const email = form.querySelector<HTMLInputElement>('#cf-email')!;
  const need = form.querySelector<HTMLSelectElement>('#cf-need')!;
  const ctx = form.querySelector<HTMLTextAreaElement>('#cf-context')!;
  const check = (el: HTMLInputElement, ok: boolean) => {
    const err = document.getElementById(`${el.id}-e`);
    el.setAttribute('aria-invalid', String(!ok));
    if (err) err.hidden = ok;
    const base = el.dataset.baseDescribedby;
    el.setAttribute('aria-describedby', [base, !ok && err ? err.id : ''].filter(Boolean).join(' '));
    if (!el.getAttribute('aria-describedby')) el.removeAttribute('aria-describedby');
    return ok;
  };
  const okName = check(name, name.value.trim() !== '');
  const okMail = check(email, /^\S+@\S+\.\S+$/.test(email.value.trim()));
  if (!okName || !okMail) { (okName ? email : name).focus(); return; }
  const to = form.dataset.email ?? '';
  const body = `${name.value}\n${email.value}\n${need.value}\n\n${ctx.value}`;
  location.href = `mailto:${to}?subject=${encodeURIComponent(form.dataset.subject ?? '')}&body=${encodeURIComponent(body)}`;
  const ok = document.getElementById('cf-ok');
  if (ok) { ok.textContent = `${form.dataset.success ?? ''} ${to}`; ok.hidden = false; }
});
