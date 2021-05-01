import test from "ava";
import {dayOfWeek, iso8601} from "./index";

test("dayOfWeek", t => {
    t.is(dayOfWeek({year: 2021, month: 3, day: 29}), "Monday");
    t.is(dayOfWeek({year: 2021, month: 3, day: 30}), "Tuesday");
    t.is(dayOfWeek({year: 2021, month: 3, day: 31}), "Wednesday");
    t.is(dayOfWeek({year: 2021, month: 4, day: 1}), "Thursday");
    t.is(dayOfWeek({year: 2021, month: 4, day: 2}), "Friday");
    t.is(dayOfWeek({year: 2021, month: 4, day: 23}), "Friday");
    t.is(dayOfWeek({year: 2021, month: 4, day: 24}), "Saturday");
    t.is(dayOfWeek({year: 2021, month: 4, day: 25}), "Sunday");
    t.is(dayOfWeek({year: 2021, month: 4, day: 26}), "Monday");
    t.is(dayOfWeek({year: 2021, month: 4, day: 27}), "Tuesday");
    t.is(dayOfWeek({year: 2021, month: 4, day: 28}), "Wednesday");
    t.is(dayOfWeek({year: 2021, month: 4, day: 29}), "Thursday");
    t.is(dayOfWeek({year: 2021, month: 4, day: 30}), "Friday");
});

test("iso8601", t => {
    t.is(iso8601({year: 2021, month: 4, day: 30}), "2021-04-30");
    t.is(iso8601({year: 10000, month: 1, day: 1}), "10000-01-01");
    t.is(iso8601({year: 1994, month: 11, day: 5}), "1994-11-05");
    t.is(iso8601({year: 1, month: 2, day: 3}), "0001-02-03");
});
