import {
    findPalindrome
} from '../js/src/task4.js';
import {
    failer
} from '../js/src/failer.js';

export function testFindPalindrome(assert) {
    const reason = 'Input should be an integer, not equal to 0.';

    describe('Checking findPalindrome function', () => {
        it('Finding the bigest palindrom from 1234567', () => {
            assert.equal(findPalindrome(1234567), 0);
        });
        it('Finding the bigest palindrom from 223353322', () => {
            assert.equal(findPalindrome(223353322), 223353322);
        });
        it('Finding the bigest palindrom from 123444444444444444444444890', () => {
            assert.equal(findPalindrome(-675555550), 555555);
        });
        it('Finding the bigest palindrom from 2345555223', () => {
            assert.equal(findPalindrome(2345555223), 5555);
        });
        describe('Invalid Arguments', () => {
            it('Checking input to be a type of string', () => {
                assert.deepEqual(findPalindrome('Hello'), failer(reason));
            });
            it('Checking input to be equal to zero', () => {
                assert.deepEqual(findPalindrome(0), failer(reason));
            });
            it('Checking input to be float number', () => {
                assert.deepEqual(findPalindrome(3.6), failer(reason));
            });
            it('Checking on 0 arguments', () => {
                assert.deepEqual(findPalindrome(), failer(reason));
            });
        });
    });
}