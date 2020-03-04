import {
    isEnvelopeFits
} from '../js/src/task2.js';
import {
    failer
} from '../js/src/failer.js';

export function testIsEnvelopeFits(assert) {
    const reason = 'Width and height should be numbers, not equal to 0.';

    describe('Checking isEnvelopeFits function', () => {
        it('Embedding the second envelope in the first', () => {
            const first = {
                a: 50,
                b: 50,
            };

            const second = {
                c: 49,
                d: 49,
            };
            assert.equal(isEnvelopeFits(first, second), 1);
        });
        it('Embedding the second envelope in the first', () => {
            const first = {
                a: 25,
                b: 17,
            };

            const second = {
                c: 25,
                d: 16.9,
            };
            assert.equal(isEnvelopeFits(first, second), 1);
        });
        it('Envelopes cannot be inserted', () => {
            const first = {
                a: 100,
                b: 100,
            };

            const second = {
                c: 120,
                d: 99,
            };
            assert.equal(isEnvelopeFits(first, second), 0);
        });
        it('Embedding the first envelope in the second', () => {
            const first = {
                a: -50,
                b: -20,
            };

            const second = {
                c: -70,
                d: 20,
            };
            assert.equal(isEnvelopeFits(first, second), 2);
        });
        describe('Invalid Arguments', () => {
            it('Checking on first argument to be type of string', () => {
                assert.deepEqual(isEnvelopeFits('Hello', {c: 50, d: 20}), failer(reason));
            });
            it('Checking on side of first envelope to be type of string', () => {
                const first = {
                    a: "Hello",
                    b: -20,
                };
    
                const second = {
                    c: -70,
                    d: 20,
                };
                assert.deepEqual(isEnvelopeFits(first, second), failer(reason));
            });
            it('Checking on side of second envelope to be equal to zero', () => {
                const first = {
                    a: 10,
                    b: -20,
                };
    
                const second = {
                    c: -70,
                    d: 0,
                };
                assert.deepEqual(isEnvelopeFits(first, second), failer(reason));
            });
            it('Checking on only one argument', () => {
                const first = {
                    a: 1,
                    b: -20,
                };
                assert.deepEqual(isEnvelopeFits(first), failer(reason));
            });
            it('Checking on side of first envelope to be NaN', () => {
                const first = {
                    a: 10,
                    b: NaN,
                };
    
                const second = {
                    c: -70,
                    d: 8,
                };
                assert.deepEqual(isEnvelopeFits(first, second), failer(reason));
            });
            it('Checking on 0 arguments', () => {
                assert.deepEqual(isEnvelopeFits(), failer(reason));
            });
            it('Checking on empty first object', () => {
                const first = {

                };
                const second = {
                    c: -70,
                    d: 8,
                };
                assert.deepEqual(isEnvelopeFits(first, second), failer(reason));
            });
        });
    });
}