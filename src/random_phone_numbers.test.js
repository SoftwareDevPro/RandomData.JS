
const getRandomPhoneNumber = require('./random_phone_numbers').getRandomPhoneNumber;
const assert = require('assert');

it('random number length > 0', () => {
    assert.notEqual(getRandomPhoneNumber().length, 0)
});

it('no two randomly picked numbers are the same', () => {
    const num1 = getRandomPhoneNumber();
    const num2 = getRandomPhoneNumber();
    assert.notEqual(num1, num2);
});

