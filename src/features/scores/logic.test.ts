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

test("It should return level 6", () => {

    const result = calculateAverageLevel(100,100,100);

    deepEqual(result, 6)

});

test("First user level is 4.46", () =>{
    const firstUser = {
        frontend: 67,
        backend: 72,
        charismatic: 70,
        teamwork: 50,
        design: 100,
        management: 87
      }
    const result = calculateAverageLevel((firstUser.frontend + firstUser.backend) / 2, (firstUser.charismatic + firstUser.teamwork) /2, (firstUser.design + firstUser.management) / 2)
    
    deepEqual(result, 4.46)
})

test("It should return level 5.44", () => {

    const result = calculateAverageLevel(90,85,97);

    deepEqual(result, 5.44)

});