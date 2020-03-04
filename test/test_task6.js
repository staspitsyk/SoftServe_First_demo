import {
    showRowOfSquares
} from '../js/src/task6.js';
import {
    failer
} from '../js/src/failer.js';

export function testShowRowOfSquares(assert) {
    const reason = 'Length should be an integer not equal to 0. Min Square should be a number.';
    
    describe('Checking showRowOfSquares function', () => {
        it('Showing row of 3 number square of which is not less than 64', () => {
            const result = `8, 9, 10`;
            assert.equal(showRowOfSquares(3, 64), result);
        });
        it('Showing row of 10 number square of which is not less than 4', () => {
            const result = `2, 3, 4, 5, 6, 7, 8, 9, 10, 11`;
            assert.equal(showRowOfSquares(10, 4), result);
        });
        it('Showing row of -7 number square of which is not less than 257', () => {
            const result = `17, 18, 19, 20, 21, 22, 23`;
            assert.equal(showRowOfSquares(-7, 257), result);
        });
        it('Showing row of 15 number square of which is not less than -1000', () => {
            const result = `32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46`;
            assert.equal(showRowOfSquares(15, -1000), result);
        });
        describe('Invalid Arguments', () => {
            it('Checking length to be type of number', () => {
                assert.deepEqual(showRowOfSquares('Hello', 1), failer(reason));
            });
            it('Checking length to be a float number', () => {
                assert.deepEqual(showRowOfSquares(4.25, 70), failer(reason));
            });
            it('Checking for arguments length to be equal to 1', () => {
                assert.deepEqual(showRowOfSquares(7), failer(reason));
            });
        });
    });
}