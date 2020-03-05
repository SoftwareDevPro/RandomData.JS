

const getRandomAddress = require('./random_addresses').getRandomAddress;
const assert = require('assert');

it('random address length > 0', () => {
    assert.notEqual(getRandomAddress().length, 0)
});

it('no two randomly picked addresses are the same', () => {
    const addr1 = getRandomAddress();
    const addr2 = getRandomAddress();
    assert.notEqual(addr1, addr2);
});

