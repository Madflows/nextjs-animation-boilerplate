import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import ms from 'ms';

/**
 * Combines class names using clsx and merges Tailwind CSS classes using twMerge.
 * Useful for conditionally joining classNames together and ensuring Tailwind utilities are merged properly.
 * @function
 * @param {...ClassValue} inputs - An arbitrary number of arguments of type ClassValue.
 * @returns {string} - The combined and merged class names.
 * @example
 * // Returns 'bg-red-500 text-white sm:bg-green-500'
 * cn('bg-red-500', 'text-white', { 'sm:bg-green-500': true });
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/**
 * Calculates how long ago a date was from the current time and formats it as a string.
 * If 'timeOnly' is true, it omits the ' ago' suffix.
 * @function
 * @param {Date} timestamp - The date to compare against the current time.
 * @param {boolean} [timeOnly=false] - Whether to return only the time without ' ago' suffix.
 * @returns {string} - The formatted time difference.
 * @example
 * // Returns '5 days ago' or '2 hours' if timeOnly is true
 * timeAgo(new Date(Date.now() - 432000000), false);
 */
export const timeAgo = (timestamp: Date, timeOnly?: boolean): string => {
  if (!timestamp) return 'never';
  return `${ms(Date.now() - new Date(timestamp).getTime())}${
    timeOnly ? '' : ' ago'
  }`;
};

/**
 * Capitalizes the first character of a string.
 * @function
 * @param {string} str - The string to capitalize.
 * @returns {string} - The capitalized string. Returns the original string if it's not of type string or is empty.
 * @example
 * // Returns 'Hello'
 * capitalize('hello');
 */
export function capitalize(str: string): string {
  if (!str || typeof str !== 'string') return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Truncates a string to a specified length and appends ellipsis (...) if it exceeds that length.
 * @function
 * @param {string} str - The string to truncate.
 * @param {number} length - The maximum length of the string before truncation.
 * @returns {string} - The potentially truncated string.
 * @example
 * // Returns 'Hello World...'
 * truncate('Hello World, this is a long string', 10);
 */
export const truncate = (str: string, length: number) => {
  if (!str || str.length <= length) return str;
  return `${str.slice(0, length)}...`;
};

/**
 * Preloads images specified by the CSS selector.
 * @function
 * @param {string} [selector='img'] - CSS selector for target images.
 * @returns {Promise} - Resolves when all specified images are loaded.
 * @example
 * // Preload all images in the document
 * preloadImages().then(() => console.log('All images have been loaded.'));
 */
export const preloadImages = (selector = 'img') => {
  return new Promise((resolve) => {
    // The imagesLoaded library is used to ensure all images (including backgrounds) are fully loaded.
    imagesLoaded(
      document.querySelectorAll(selector),
      { background: true },
      resolve
    );
  });
};
