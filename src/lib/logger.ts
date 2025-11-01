// A simple logger utility for consistent logging
export const logger = {
  info: (message: string, ...args: any[]) => console.info(message, ...args),
  warn: (message: string, ...args: any[]) => console.warn(message, ...args),
  error: (message: string, ...args: any[]) => {
    // Replace console.error with a proper logging mechanism
    console.error(`[ERROR]: ${message}`, ...args);
  },
};
