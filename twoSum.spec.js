const {expect} = require('chai');
const twoSum = require('./twoSum');

describe('twoSUm', () => {
    it('Returns empty array if array has one or no elements', () => {
        expect(twoSum([], 3)).to.equal([]);
        // expect(twoSum([2], 3)).to.equal([]);
    });

    it('returns [1, 2]', () => {
        expect(twoSum([1,2,3], 5)).to.equal([1,2]);
    });
});