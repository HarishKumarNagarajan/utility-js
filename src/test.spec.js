const head = require('./head');
const tail = require('./tail');

describe('Head', () => {

    it('head of array [1,2,3] is 1', () => {
        expect(head([1,2,3])).toEqual(1);
    });

    it('head of array [] is undefined', () => {
        expect(head([])).toEqual(undefined);
    });

})

describe('Tail', () => {

    it('tail of array [1,2,3] is [2,3]', () => {
        expect(tail([1,2,3])).toEqual([2,3]);
    });

    it('tail of array [] is []', () => {
        expect(tail([])).toEqual([]);
    });

})