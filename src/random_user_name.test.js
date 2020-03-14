
const getRandomUserName = require('./random_user_name').getRandomUserName;
const assert = require('assert');

it('random user name length > 0', () => {
    assert.notEqual(getRandomUserName().length, 0)
});

it('no two randomly picked user names are the same', () => {
    const n1 = getRandomUserName();
    const n2 = getRandomUserName();
    assert.notEqual(n1, n2);
});

