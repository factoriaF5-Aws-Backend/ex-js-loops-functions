import {describe, it} from 'vitest';
import assert from 'node:assert/strict';
import {addNumbers, findMax, countVowels, getSquare} from '../src/06-Functions.js';


describe('Functions', function() {
    it('should return the sum of two numbers', function() {
        assert.equal(addNumbers(2, 3), 5);
        assert.equal(addNumbers(-1, 1), 0);
    });
    //---------------------
    it('should return the maximum number in the array', function() {
        assert.equal(findMax([1, 2, 3, 4, 5]), 5);
        assert.equal(findMax([-1, -2, -3, -4]), -1);
        assert.equal(findMax([10, 10, 10]), 10);
    });
    //---------------------
    it('should return the number of vowels in the string', function() {
        assert.equal(countVowels('hello'), 2);
        assert.equal(countVowels('world'), 1);
        assert.equal(countVowels('aeiou'), 5);
    });
    //---------------------
    it('should return the square of a function', function() {
        assert.equal(getSquare(9), 81);
        assert.equal(getSquare(0), 0);
    });
});
