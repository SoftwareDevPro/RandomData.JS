
const getRandomEmail = require('./random_email').getRandomEmail;
const assert = require('assert');

it('random email length > 0', () => {
    assert.notEqual(getRandomEmail().length, 0)
});

it('no two randomly picked emails are the same', () => {
    const email1 = getRandomEmail();
    const email2 = getRandomEmail();
    assert.notEqual(email1, email2);
});
