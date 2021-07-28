const head = require('./head');
const tail = require('./tail');
const map = require('./map');
const max = require('./max');
const min = require('./min');
const filter = require('./filter');
const reduce = require('./reduce');

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

describe('Filter', () => {

    it('filter of array [] as x >= true is []', () => {
        expect(filter([],'>= true')).toEqual([]);
    });

    it('filter of array [1,2,3] as x => true is [1,2,3]', () => {
        expect(filter([1,2,3],' == true')).toEqual([1,2,3]);
    });

    it('filter of array [1,2,3] as x => false is []', () => {
        expect(filter([1,2,3],' == false')).toEqual([]);
    });

    it('filter of array [1,2,3] as x > 1 is [2,3]', () => {
        expect(filter([1,2,3]," > 1")).toEqual([2,3]);
    });

    it(`filter of array ['a','B','c','D'] as filterUpperCase is [B,D]`, () => {
        expect(filter(['a','B','c','D'],"filterUpperCase")).toEqual(['B','D']);
    });

})

describe('Reduce', () => {

    it('reduce of array [] as (x,y)=>x+y is undefines', () => {
        expect(reduce([])).toEqual(undefined);
    });

    it('reduce of array [] as v(x,y)=>x+y with start value 10 is 10', () => {
        expect(reduce([],10)).toEqual(10);
    });

    it(`reduce of array ['a','b','c'] as (x,y)=>x+y is abc`, () => {
        expect(reduce(['a','b','c'])).toEqual('abc');
    });

    it(`reduce of array ['a','b','c'] as (x,y)=>x+y with start value 'z' is zabc`, () => {
        expect(reduce(['a','b','c'],'z')).toEqual('zabc');
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