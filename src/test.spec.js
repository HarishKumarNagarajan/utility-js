const head = require('./head');
const tail = require('./tail');
const map = require('./map');
const max = require('./max');
const min = require('./min');

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

describe('Map', () => {

    it('map of array [] as cube is []', () => {
        expect(map([],'cube')).toEqual([]);
    });

    it('map of array [1,2,3] as identity is [1,2,3]', () => {
        expect(map([1,2,3],'identity')).toEqual([1,2,3]);
    });

    it('map of array [1,2,3] as cube is [1,8,27]', () => {
        expect(map([1,2,3],'cube')).toEqual([1,8,27]);
    });

    it('map of array [{x : 10},{x : 13}] as object is [11,14]', () => {
        expect(map([{x : 10},{x : 13}],'object')).toEqual([11,14]);
    });

})

describe('Max', () => {

    it('max of array [1,2,3,4] is 4', () => {
        expect(max([1,2,3,4])).toEqual(4);
    });

})

describe('Min', () => {

    it('min of array [1,2,3,4] is 1', () => {
        expect(min([1,2,3,4])).toEqual(1);
    });

})