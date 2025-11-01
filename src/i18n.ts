// i18n.ts
import { getRequestConfig, GetRequestConfigParams, RequestConfig } from 'next-intl/server';

export const locales = ['en', 'es', 'fr'] as const;
export type Locale = (typeof locales)[number];

export default getRequestConfig(async ({ locale }: GetRequestConfigParams): Promise<RequestConfig> => {
  const Localee = locale ? locale : 'en';
  try {
    if (!locales.includes(Localee as Locale)) {
      // Replace console.error with a proper logging mechanism
      throw new Error(`Invalid locale received: ${Localee}`);
    }
    const messages = (await import(`./locales/${Localee}.json`)).default;
    return {
      locale: Localee as Locale,
      messages
    };
  } catch (error) {
    // Replace console.error with a proper logging mechanism
    throw new Error(`Error loading messages for locale "${Localee}". Please check the locale files.`);
  }
});