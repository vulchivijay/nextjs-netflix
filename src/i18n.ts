// i18n.ts
import { getRequestConfig } from 'next-intl/server';

export const locales = ['en', 'es', 'fr'] as const;
export type Locale = (typeof locales)[number];

export default getRequestConfig(async ({ locale }) => {
  const Localee = locale ? locale : 'en';
  try {
    if (!locales.includes(Localee as Locale)) {
      console.warn(`Invalid locale received: ${Localee}`);
      return null;
    }
    const messages = (await import(`./locales/${Localee}.json`)).default;
    return {
      locale: Localee as Locale,
      messages
    };
  } catch (error) {
    console.error(`Error loading messages for locale "${Localee}":`, error);
    return null;
  }
});