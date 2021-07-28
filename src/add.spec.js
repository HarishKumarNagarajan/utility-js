const add = require('./add');
const head = require('./head');

describe('Add', () => {

    it('Sum of 0 and 0 is 0', () => {
        expect(add(0, 0)).toEqual(0);
    });

    it('Sum of 1 and 0 is 1', () => {
        expect(add(1, 0)).toEqual(1);
    });

})

describe('Head', () => {

    it('head of array [1,2,3] is 1', () => {
        expect(head([1,2,3])).toEqual(1);
    });

    it('head of array [] is undefined', () => {
        expect(head([])).toEqual(undefined);
    });

})
