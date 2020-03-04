import {
    whichMethodWins
} from '../js/src/task5.js';
import {
    failer
} from '../js/src/failer.js';

export function testWhichMethodWins(assert) {
    const reason = 'Min and Max should be integers, Min should be lower than Max, Max should be <= 999999 and not equal to 0.';

    describe('Checking whichMethodWins function', () => {
        it('Finding wich metgod wins with min equals to 1 and max equals to 999999', () => {
            const obj = {
                min: 1,
                max: 999999,
            };
            assert.deepEqual(whichMethodWins(obj), {winner: "simple", simple: 55251, difficult: 25080});
        });
        it('Finding wich metgod wins with min equals to 1 and max equals to -999999', () => {
            const obj = {
                min: 1,
                max: -999999,
            };
            assert.deepEqual(whichMethodWins(obj), {winner: "simple", simple: 55251, difficult: 25080});
        });
        it('Finding wich metgod wins with min equals to 333 and max equals to 999', () => {
            const obj = {
                min: 333,
                max: 999,
            };
            assert.deepEqual(whichMethodWins(obj), {winner: "difficult", simple: 0, difficult: 20});
        });
        it('Finding wich metgod wins with min equals to -100 and max equals to -800', () => {
            const obj = {
                min: -100,
                max: -800,
            };
            assert.deepEqual(whichMethodWins(obj), {winner: "difficult", simple: 0, difficult: 26});
        });
        it('Finding wich metgod wins with min equals to 1 and max equals to 10', () => {
            const obj = {
                min: 1,
                max: 10,
            };
            assert.deepEqual(whichMethodWins(obj), {winner: ["simple", "difficult"], simple: 0, difficult: 0});
        });
        describe('Invalid Arguments', () => {
            it('Checking when min greater than max', () => {
                const obj = {
                    min: 10000,
                    max: 10,
                };
                assert.deepEqual(whichMethodWins(obj), failer(reason));
            });
            it('Checking when max equals to 0', () => {
                const obj = {
                    min: 1,
                    max: 0,
                };
                assert.deepEqual(whichMethodWins(), failer(reason));
            });
            it('Checking when min is a type of string', () => {
                const obj = {
                    min: 'Hello',
                    max: 10,
                };
                assert.deepEqual(whichMethodWins(), failer(reason));
            });
            it('Checking when min is a float number', () => {
                const obj = {
                    min: 351.2,
                    max: 900,
                };
                assert.deepEqual(whichMethodWins(), failer(reason));
            });
            it('Checking on 0 arguments', () => {
                assert.deepEqual(whichMethodWins(), failer(reason));
            });
            it('Checking for input to be type of string', () => {
                assert.deepEqual(whichMethodWins('Hello'), failer(reason));
            });
            it('Checking on object length to be equal 3', () => {
                const obj = {
                    hello: 3,
                    min: 1,
                    max: 0,
                };
                assert.deepEqual(whichMethodWins(obj), failer(reason));
            });
        });
    });
}