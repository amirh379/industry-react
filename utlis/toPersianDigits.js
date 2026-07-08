const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];

/**
 * Converts any Latin digits (0-9) found in a number/string to Persian digits (۰-۹).
 * Non-digit characters (commas, dots, currency symbols, text, etc.) are left untouched.
 */
export const toPersianDigits = (input) => {
  if (input === null || input === undefined) return "";
  return String(input).replace(/[0-9]/g, (digit) => persianDigits[digit]);
};

export default toPersianDigits;
