import {
    showFibNumbers
} from '../js/src/task7.js';
import {
    failer
} from '../js/src/failer.js';

export function testShowFibNumbers(assert) {
    const reason = 'Min and Max should be integers, Min should be lower than Max. Length should be an integer not equal to 0.';

    describe('Checking showFibNumbers function', () => {
        it('Finding Fibonacci numbers from 0 to 10946', () => {
            const options = {
                min: 0,
                max: 10946,
            };
            assert.deepEqual(showFibNumbers(options), [0, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946]);
        });
        it('Finding Fibonacci numbers from -100 to 500', () => {
            const options = {
                min: -100,
                max: 500,
            };
            assert.deepEqual(showFibNumbers(options), [ 144, 233, 377 ]);
        });
        it('Finding Fibonacci numbers from 500 to 500', () => {
            const options = {
                min: 500,
                max: 500,
            };
            assert.deepEqual(showFibNumbers(options), []);
        });
        it('Finding Fibonacci numbers from -300 to -450', () => {
            const options = {
                min: -300,
                max: -450,
            };
            assert.deepEqual(showFibNumbers(options), [ 377 ]);
        });
        it('Finding Fibonacci numbers from 8 to 100', () => {
            const options = {
                min: 8,
                max: 100,
            };
            assert.deepEqual(showFibNumbers(options), [ 8, 13, 21, 34, 55, 89 ]);
        });
        it('Finding Fibonacci numbers from 34 to 34', () => {
            const options = {
                min: 34,
                max: 34,
            };
            assert.deepEqual(showFibNumbers(options), [ 34 ]);
        });
        it('Finding Fibonacci numbers length of wich equals to 2', () => {
            const options = {
                length: 2,
            };
            assert.deepEqual(showFibNumbers(options), [ 13, 21, 34, 55, 89 ]);
        });
        it('Finding Fibonacci numbers length of wich equals to 15', () => {
            const options = {
                length: 15,
            };
            assert.deepEqual(showFibNumbers(options), [117669030460994, 190392490709135, 308061521170129, 498454011879264, 806515533049393]);
        });
        it('Finding Fibonacci numbers length of wich equals to -9', () => {
            const options = {
                length: -9,
            };
            assert.deepEqual(showFibNumbers(options), [102334155, 165580141, 267914296, 433494437, 701408733]);
        });
        describe('Invalid Arguments', () => {
            it('Checking on min greater than max', () => {
                const options = {
                    min: 500,
                    max: 30,
                };
                assert.deepEqual(showFibNumbers(options), failer(reason));
            });
            it('Checking on min to be type of string', () => {
                const options = {
                    min: 'Hello',
                    max: 500,
                };
                assert.deepEqual(showFibNumbers(options), failer(reason));
            });
            it('Checking on input to be type of string', () => {
                assert.deepEqual(showFibNumbers('Hello'), failer(reason));
            });
            it('Checking on min to be float number', () => {
                const options = {
                    min: 30.5,
                    max: 500,
                };
                assert.deepEqual(showFibNumbers(options), failer(reason));
            });
            it('Checking on length to be float number', () => {
                const options = {
                    length: 3.99,
                };
                assert.deepEqual(showFibNumbers(), failer(reason));
            });
            it('Checking on length to be type of string', () => {
                const options = {
                    length: 'Hello',
                };
                assert.deepEqual(showFibNumbers(options), failer(reason));
            });
            it('Checking on empty options', () => {
                const options = {

                };
                assert.deepEqual(showFibNumbers(options), failer(reason));
            });
            it('Checking on 0 arguments', () => {
                assert.deepEqual(showFibNumbers(), failer(reason));
            });
        });
    });
}