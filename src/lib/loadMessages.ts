// lib/loadMessages.ts
export async function loadMessages(locale: string) {
  if (locale.length > 0) {
    console.log("locale1 : ", locale);
    try {
      const messages = await import(`./../locales/${locale}.json`);
      return messages;
    } catch (error) {
      console.error(`Could not load messages for locale "${locale}":`, error);
      return null;
    }
  }
}