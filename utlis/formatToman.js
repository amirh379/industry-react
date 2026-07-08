import { toPersianDigits } from "./toPersianDigits";

// The template's original demo prices are plain USD-style numbers (e.g. 232).
// We scale them up into a Toman-looking price range for the Persian version
// of the shop, since Toman amounts are typically much larger numbers.
const TOMAN_RATE = 500;

/**
 * Formats a demo price (number) as a Persian Toman string, e.g. 232 -> "۱۱۶,۰۰۰ تومان".
 */
export const formatToman = (price, { withSuffix = true } = {}) => {
  const numericPrice = Number(price);
  if (price === null || price === undefined || Number.isNaN(numericPrice)) {
    return "";
  }
  const toman = Math.round(numericPrice * TOMAN_RATE);
  const formatted = toman.toLocaleString("en-US");
  const persianFormatted = toPersianDigits(formatted);
  return withSuffix ? `${persianFormatted} تومان` : persianFormatted;
};

export default formatToman;
