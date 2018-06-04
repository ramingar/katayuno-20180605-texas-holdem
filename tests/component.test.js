import test from 'tape';

test(`-------- Component: Testing...`, (assert) => {
    const messageResult  = `Testing...`;
    const expectedResult = 1;

    const actualResult = 1;
    assert.equal(actualResult, expectedResult, messageResult);

    assert.end();
});
