import {concatMap} from "@softwareventures/array";
import {Date} from "@softwareventures/date";

/** A function that formats a Date or part of a Date as a string. */
export type DateFormatter = (date: Date) => string;

/** Constructs a function that formats a date using the specified template. */
export function dateTemplate(
    texts: TemplateStringsArray,
    ...formatters: readonly DateFormatter[]
): DateFormatter {
    return date => concatMap(texts, (text, i) => [text, formatters[i]?.(date)]).join("");
}

/** Formats the day portion of the specified Date as a numeric string. */
export const day: DateFormatter = date => String(date.day);
