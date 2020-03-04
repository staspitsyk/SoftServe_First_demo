import {
    sortTriangles
} from '../js/src/task3.js';
import {
    failer
} from '../js/src/failer.js';

export function testSortTriangles(assert) {
    const reason = `Name of triangle should contain 3 not repeated symbols. All names of triangles should be unique. Vertices should be numbers not equal to 0.`;

    describe('Checking sortTriangles function', () => {
        it('Sorting two triangles by their area', () => {
            const arr = [{
                vertices: 'ABC',
                a: 1,
                b: 2,
                c: 2,
            },
            {
                vertices: 'BCD',
                d: 5,
                b: 6,
                c: 7.2,
            },
            ];
            assert.deepEqual(sortTriangles(arr), [ 'BCD', 'ABC' ]);
        });
        it('Sorting three triangles by their area. Vertices are numbers.', () => {
            const arr = [{
                vertices: '123',
                1: 1,
                2: 2,
                3: 2,
            },
            {
                vertices: '456',
                4: 5,
                5: 6,
                6: 7.2,
            },
            {
                vertices: '345',
                3: 8.1,
                4: 9,
                5: 10.22323,
            },
            ];
            assert.deepEqual(sortTriangles(arr), [ '345', '456', '123' ]);
        });
        it('Sorting four triangles by their area. All vertices sides are float numbers.', () => {
            const arr = [{
                vertices: 'ABC',
                a: 1.1,
                b: 2.1,
                c: 2.1,
            },
            {
                vertices: 'BCD',
                d: 5.1,
                b: 6.1,
                c: 7.2,
            },
            {
                vertices: 'CBA',
                c: 8.1,
                b: 9.1,
                a: 10.22323,
            },
            {
                vertices: 'DEF',
                d: 11.1,
                f: 12.1,
                e: 13.1,
            },
            ];
            assert.deepEqual(sortTriangles(arr), [ 'DEF', 'CBA', 'BCD', 'ABC' ]);
        });
        it('Sorting five triangles by their area.', () => {
            const arr = [{
                vertices: 'ABC',
                a: 1,
                b: 2,
                c: 2,
            },
            {
                vertices: 'BCD',
                d: 5,
                b: 6,
                c: 7.2,
            },
            {
                vertices: 'CBA',
                c: 8.1,
                b: 9,
                a: 10.22323,
            },
            {
                vertices: 'DEF',
                d: 11,
                f: 12,
                e: 13,
            },
            {
                vertices: 'CAB',
                a: 14,
                b: 15,
                c: 16,
            },
            ];
            assert.deepEqual(sortTriangles(arr), [ 'CAB', 'DEF', 'CBA', 'BCD', 'ABC' ]);
        });
        describe('Invalid Arguments', () => {
            it('Checking on two not unique triangles', () => {
                const arr = [{
                    vertices: 'ABC',
                    a: 1,
                    b: 2,
                    c: 2,
                },
                {
                    vertices: 'ABC',
                    a: 5,
                    b: 6,
                    c: 7.2,
                },
                ];
                assert.deepEqual(sortTriangles(arr), failer(reason));
            });
            it('Checking on triangle with not 3 unique vertecies symbols', () => {
                const arr = [{
                    vertices: 'AAA',
                    a: 1,
                    a: 2,
                    a: 2,
                },
                {
                    vertices: 'ABC',
                    a: 5,
                    b: 6,
                    c: 7.2,
                },
                ];
                assert.deepEqual(sortTriangles(arr), failer(reason));
            });
            it('Checking on triangle with side equal to 0', () => {
                const arr = [{
                    vertices: 'ABC',
                    a: 1,
                    b: 2,
                    c: 2,
                },
                {
                    vertices: 'ABC',
                    a: 5,
                    b: 0,
                    c: 7.2,
                },
                ];
                assert.deepEqual(sortTriangles(arr), failer(reason));
            });
            it('Checking on triangle with type of side equal to string', () => {
                const arr = [{
                    vertices: 'ABC',
                    a: 1,
                    b: 'Hello',
                    c: 2,
                },
                {
                    vertices: 'BCD',
                    d: 5,
                    b: 6,
                    c: 7.2,
                },
                ];
                assert.deepEqual(sortTriangles(arr), failer(reason));
            });
            it('Checking on input to be type of string', () => {
                assert.deepEqual(sortTriangles('Hello'), failer(reason));
            });
            it('Checking on 0 arguments', () => {
                assert.deepEqual(sortTriangles(), failer(reason));
            });
            it('Checking on empty arr', () => {
                const arr = [];
                assert.deepEqual(sortTriangles(arr), failer(reason));
            });
        });
    });
}