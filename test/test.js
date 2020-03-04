import {testBuildChessDesk} from './test_task1.js';
import {testIsEnvelopeFits} from './test_task2.js';
import {testSortTriangles} from './test_task3.js';
import {testFindPalindrome} from './test_task4.js';
import {testWhichMethodWins} from './test_task5.js';
import {testShowRowOfSquares} from './test_task6.js';
import {testShowFibNumbers} from './test_task7.js';

mocha.setup('bdd');

const assert = chai.assert;

testBuildChessDesk(assert);
testIsEnvelopeFits(assert);
testSortTriangles(assert);
testFindPalindrome(assert);
testWhichMethodWins(assert);
testShowRowOfSquares(assert);
testShowFibNumbers(assert);

mocha.run();