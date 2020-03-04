import {
    failer
} from "./failer.js";
import {
    isValidType,
    isValidQuantityOfFields,
    isMinGreaterMax,
    isValidNumber,
} from "./validation.js";

function whichMethodWins(obj) {
    const reason = 'Min and Max should be integers, Min should be lower than Max, Max should be <= 999999 and not equal to 0.';

    if (arguments.length != 1) return failer(reason);

    if (!isValidType([obj, obj.min, obj.max], ['object', 'number', 'number'])) return failer(reason);

    if (!isValidQuantityOfFields(obj, 2)) return failer(reason);

    obj.min = Math.abs(obj.min);
    obj.max = Math.abs(obj.max);

    if (isMinGreaterMax(obj.min, obj.max)) return failer(reason);

    if (!isValidNumber(obj.min)) return failer(reason);

    if (!isValidNumber(obj.max, 999999, true)) return failer(reason);

    const answer = {
        winner: null,
        simple: findScore(obj, true),
        difficult: findScore(obj, false),
    };

    if (answer.simple > answer.difficult) {
        answer.winner = 'simple';
    } else if (answer.difficult > answer.simple) {
        answer.winner = 'difficult';
    } else {
        answer.winner = ['simple', 'difficult'];
    }

    return answer;
}

function findScore(obj, isSimple) {
    let start = obj.min;
    let end = obj.max;
    let counter = 0;

    for (let i = start; i <= end; i++) {
        let str = String(i);
        let leftSide = 0;
        let rightSide = 0;

        if (str.length !== 6) {
            str = '0'.repeat(6 - str.length) + str;
        }

        if (isSimple) {
            leftSide = +str[0] + +str[1] + +str[2];
            rightSide = +str[3] + +str[4] + +str[5];

        } else {

            for (let n of str) {
                n % 2 === 0 ? leftSide += +n : leftSide;
                n % 2 === 1 ? rightSide += +n : rightSide;
            }

        }

        if (leftSide === rightSide) counter++;
    }

    return counter;
}

export {
    whichMethodWins,
};