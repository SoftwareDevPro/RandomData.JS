
const getRandomName = require('./random_name').getRandomName;
const assert = require('assert');

it('random name length > 0', () => {
    assert.notEqual(getRandomName().length, 0)
});

it('no two randomly picked names are the same', () => {
    const name1 = getRandomName();
    const name2 = getRandomName();
    assert.notEqual(name1, name2);
});



