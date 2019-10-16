// unit tests - test a single unit of code in isolation (usually a function)

const { sum, subtract} = require('./math');

let actual;
let expected;

actual = sum(2, 2); // => 4
expected = 4;
// This is called an "assertion"
if (actual !== expected) {
    throw new Error(`${actual} is not equal to ${expected}`);
}

// Write multiple assertions to check different use cases
actual = sum(3, 7); // => 4
expected = 10;

if (actual !== expected) {
    throw new Error(`${actual} is not equal to ${expected}`);
}

actual = subtract(2,1);
expected = 1;

if (actual !== expected){
    throw new Error(`${actual} is not equal to ${expected}`);
}

actual = subtract(4, 8);
expected = -4;

if (actual !== expected){
    throw new Error(`${actual} is not equal to ${expected}`)
}