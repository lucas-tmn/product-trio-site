import en from '../content/en.json';
import vi from '../content/vi.json';

export const locales = ['en', 'vi'] as const;
export type Lang = (typeof locales)[number];
export type Content = typeof en;

const dictionaries: Record<Lang, Content> = { en, vi };
export const getContent = (lang: Lang): Content => dictionaries[lang];

/** Base-aware URL for a locale page: path('vi', 'pricing') -> /<base>/vi/pricing/ */
export function path(lang: Lang, p = ''): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const clean = p.replace(/^\/|\/$/g, '');
  return `${base}/${lang}/${clean ? clean + '/' : ''}`;
}

export const staticLangPaths = () => locales.map((lang) => ({ params: { lang } }));

export const fill = (tpl: string, vars: Record<string, string | number>) =>
  tpl.replace(/\{(\w+)\}/g, (_, k) => String(vars[k] ?? ''));
