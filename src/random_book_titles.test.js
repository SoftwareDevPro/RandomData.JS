

const getRandomBookTitle = require('./random_book_titles').getRandomBookTitle;
const assert = require('assert');

it('random book title length > 0', () => {
    assert.notEqual(getRandomBookTitle().length, 0)
});

it('no two randomly picked book titles are the same', () => {
    const n1 = getRandomBookTitle();
    const n2 = getRandomBookTitle();
    assert.notEqual(n1, n2);
});


