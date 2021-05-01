import {concatMap} from "@softwareventures/array";
import {Date} from "@softwareventures/date";

/** A function that formats a Date or part of a Date as a string. */
export type DateFormatter = (date: Date) => string;

/** Constructs a function that formats a date using the specified template.
 *
 * This function is intended to be used as a template literal tag function.
 *
 * The template may contain placeholders which will be called as functions
 * with the specified Date as their argument.
 *
 * @example
 * const formatShortBritish = dateTemplate`${day2}/${month2}/${year2}`;
 * const text = formatShortBritish(date); */
export function dateTemplate(
    texts: TemplateStringsArray,
    ...formatters: readonly DateFormatter[]
): DateFormatter {
    return date => concatMap(texts, (text, i) => [text, formatters[i]?.(date)]).join("");
}

/** Formats the year portion of the specified Date as a numeric string. */
export function year(date: {readonly year: number}): string {
    return String(date.year);
}

/** Formats the year portion of the specified Date as a numeric string
 * truncated to the last two digits. */
export function shortYear(date: {readonly year: number}): string {
    return String(date.year).padStart(2, "0").substr(-2);
}

/** Formats the year portion of the specified Date as a numeric string,
 * zero-padded to at least four digits. */
export function year4(date: {readonly year: number}): string {
    return String(date.year).padStart(4, "0");
}

/** Formats the month portion of the specified Date as a numeric string. */
export function month(date: {readonly month: number}): string {
    return String(date.month);
}

/** Formats the month portion of the specified DAte as a 2-digit numeric
 * string. */
export function month2(date: {readonly month: number}): string {
    return String(date.month).padStart(2, "0");
}

/** Formats the day portion of the specified Date as a numeric string. */
export function day(date: {readonly day: number}): string {
    return String(date.day);
}

/** Formats the day portion of the specfied Date as a 2-digit numeric string. */
export function day2(date: {readonly day: number}): string {
    return String(date.day).padStart(2, "0");
}

/** Formats the specified Date as IS0 8601 extended, e.g. YYYY-MM-DD. */
export const iso8601 = dateTemplate`${year4}-${month2}-${day2}`;
