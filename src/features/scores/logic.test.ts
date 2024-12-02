import test from "node:test";
import { deepEqual } from "node:assert/strict";
import { calculateAverageLevel } from "./logic";


test("It should return level 0", () => {

    const result = calculateAverageLevel(0,0,0);

    deepEqual(result, 0)

});

test("It should return level 4", () => {

    const result = calculateAverageLevel(80,70,50);

    deepEqual(result, 4)

});

test("It should return level 3", () => {

    const result = calculateAverageLevel(50,50,50);

    deepEqual(result, 3)

});

test("It should return level 3", () => {

    const result = calculateAverageLevel(67,87,92);

    deepEqual(result, 4.92)

});