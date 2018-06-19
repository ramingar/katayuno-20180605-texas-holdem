import test from 'tape';

const Card = function (cardAsString) {

    const VALUE_EQUIVALENCES = {
        'J': 11,
        'Q': 12,
        'K': 13,
        'A': 14
    };

    const family = cardAsString.substr(cardAsString.length - 1);
    const value  = cardAsString.substr(0, cardAsString.indexOf(family));

    const getValue = function () {

        const cardValue = VALUE_EQUIVALENCES[value] ? VALUE_EQUIVALENCES[value] : value;
        return parseInt(cardValue);
    };

    const getFamily = function () {
        return family;
    };

    return {getValue, getFamily};
};

// TEST --------------------------------------------------------------------------------

test(`-------- Component: Testing card's value`, (assert) => {
    const message           = `Testing if we are able to retrieve the card's value`;
    const expectedCardValue = 10;
    const card              = Card('10h');

    const actualCardValue = card.getValue();

    assert.equal(actualCardValue, expectedCardValue, message);
    assert.end();
});

test(`-------- Component: Testing card's family`, (assert) => {
    const message           = `Testing if we are able to retrieve the card's family`;
    const expectedCardValue = 'c';
    const card              = Card('10c');

    const actualCardValue = card.getFamily();

    assert.equal(actualCardValue, expectedCardValue, message);
    assert.end();
});

test(`-------- Component: Testing figure's card's value`, (assert) => {
    const message           = `Testing if we are able to retrieve the figure's card's value`;
    const expectedCardValue = 13;
    const card              = Card('Kc');

    const actualCardValue = card.getValue();

    assert.equal(actualCardValue, expectedCardValue, message);
    assert.end();
});
