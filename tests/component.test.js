import test from 'tape';

const Card = function () {

    const get = function ({card}) {
        const value = Number.parseInt(card.split('')[0]);
        const family = card.split('')[1];

        return Object.freeze({value, family});
    };

    const isPair = function ({card1},{card2}) {
        const value1 = get({card: card1}).value;
        const value2 = get({card: card2}).value;

        return value1 === value2;
    };

    return Object.freeze({get, isPair});
};

test(`-------- Component: Testing the number of a card`, (assert) => {
    const messageResult  = `Testing if we are able to retrieve the number of a card`;
    const expectedtNumber = 6;
    const testedCard = Card();

    const {value} = testedCard.get({card: '6c'});

    assert.equal(value, expectedtNumber, messageResult);
    assert.end();
});
test(`-------- Component: Testing the family of a card`, (assert) => {
    const messageResult  = `Testing if we are able to retrieve the number of a card`;
    const expectedtFamily = 'c';
    const testedCard = Card();

    const {family} = testedCard.get({card: '6c'});

    assert.equal(family, expectedtFamily, messageResult);
    assert.end();
});

test(`-------- Component: Testing if we have a pair`, (assert) => {
    const messageResult  = `Testing true if we have a pair`;
    const expectedResult = true;
    const testedCard = Card();

    const pair = testedCard.isPair({card1: '8h'}, {card2: '8c'});

    assert.equal(pair, expectedResult, messageResult);
    assert.end();
});

