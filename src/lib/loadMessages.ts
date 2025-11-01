// lib/loadMessages.ts
import { logger } from './logger'; // Adjust the import based on your project structure

export async function loadMessages(locale: string) {
  if (locale.length > 0) {
    try {
      const messages = await import(`./../locales/${locale}.json`);
      return messages;
    } catch (error) {
      logger.error(`Failed to load messages for locale "${locale}":`, error);
      throw new Error(`Failed to load messages for locale "${locale}". Please check the locale files.`);
    }
  }
}