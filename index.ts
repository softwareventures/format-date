/** @file Convert @softwareventures/date to a string in a variety of formats. */

import {concatMap} from "@softwareventures/array";
import type {Date} from "@softwareventures/date";
import {toReferenceDays} from "@softwareventures/date";
import {notNull} from "@softwareventures/nullable";

/** A function that formats a {@link Date} or part of a {@link Date} as a
 * string. */
export type DateFormatter = (date: Date) => string;

/** Constructs a function that formats a {@link Date} using the specified
 * template.
 *
 * This function is intended to be used as a template literal tag function.
 *
 * The template may contain placeholders which will be called as functions
 * with the specified {@link Date} as their argument.
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

/** Formats the year portion of the specified {@link Date} as a numeric
 * string. */
export function year(date: {readonly year: number}): string {
    return String(date.year);
}

/** Formats the year portion of the specified {@link Date} as a numeric string
 * truncated to the last two digits. */
export function shortYear(date: {readonly year: number}): string {
    return String(date.year).padStart(2, "0").substr(-2);
}

/** Formats the year portion of the specified {@link Date} as a numeric string,
 * zero-padded to at least four digits. */
export function year4(date: {readonly year: number}): string {
    return String(date.year).padStart(4, "0");
}

/** Formats the month portion of the specified {@link Date} as a numeric
 * string. */
export function month(date: {readonly month: number}): string {
    return String(date.month);
}

/** Formats the month portion of the specified {@link Date} as a 2-digit
 * numeric string. */
export function month2(date: {readonly month: number}): string {
    return String(date.month).padStart(2, "0");
}

export type MonthName =
    | "January"
    | "February"
    | "March"
    | "April"
    | "May"
    | "June"
    | "July"
    | "August"
    | "September"
    | "October"
    | "November"
    | "December";

const monthNames: readonly MonthName[] = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

/** Formats the name of the month portion of the specified {@link Date} as a
 * string, e.g. `"January"`. */
export function monthName(date: {readonly month: number}): MonthName {
    return notNull(monthNames[date.month - 1]);
}

/** Formats the day portion of the specified {@link Date} as a numeric
 * string. */
export function day(date: {readonly day: number}): string {
    return String(date.day);
}

/** Formats the day portion of the specified {@link Date} as a 2-digit numeric
 * string. */
export function day2(date: {readonly day: number}): string {
    return String(date.day).padStart(2, "0");
}

export type DayOfWeek =
    | "Sunday"
    | "Monday"
    | "Tuesday"
    | "Wednesday"
    | "Thursday"
    | "Friday"
    | "Saturday";

const daysOfWeek: readonly DayOfWeek[] = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

/** Formats the name of the day-of-the-week of the specified {@link Date} as a
 * string, e.g. `"Monday"`. */
export function dayOfWeek(date: {
    readonly year: number;
    readonly month: number;
    readonly day: number;
}): DayOfWeek {
    const {year, month, day} = date;
    return notNull(daysOfWeek[(8 + (toReferenceDays({year, month, day}) % 7)) % 7]);
}

/** Formats the specified {@link Date} as IS0 8601 extended, e.g.
 * `"YYYY-MM-DD"`. */
export const iso8601 = dateTemplate`${year4}-${month2}-${day2}`;
