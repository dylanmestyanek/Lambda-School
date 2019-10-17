const assert = require('assert');
const {sum, subtract} = require('./math');

let actual;
let expected;

actual = sum(3, 7);
expected = 10;
assert.strictEqual(actual, expected);

actual = subtract(10, 7);
expected = 3;
assert.strictEqual(actual, expected);

// const test = (title, callback) => {
//     try {
//         callback();
//         console.log(`${title} Passed!`);
//     } catch(err) {
//         console.error(`${title} Failed!`);
//         console.error(err);
//     } 
// }

// const expect = (actual) => {
//     return {
//         toBe: (expected) => {
//             if (actual !== expected) {
//                 throw new Error(`${actual} is not equal to ${expected}`);
//             }
//         }
//     }
// }

test('sum returns the sum of two numbers', () => {
    actual = sum(3, 7);
    expected = 10;
    expect(actual).toBe(expected);
})

test('subtract returns the difference of two given numbers', () => {
    actual = subtract(4,2);
    expected = 2;
    expect(actual).toBe(expected);
})