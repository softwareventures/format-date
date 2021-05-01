import test from "ava";
import {dayOfWeek} from "./index";

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
