import {
    failer
} from "./failer.js";
import {
    isObjectEmpty,
    isValidType,
    isValidNumber,
    isMinGreaterMax,
} from "./validation.js";

function showFibNumbers(obj) {
    const reason = 'Min and Max should be integers, Min should be lower than Max. Length should be an integer not equal to 0.';

    if (arguments.length != 1) return failer(reason);

    if (obj.hasOwnProperty('min') && obj.hasOwnProperty('max') && obj.hasOwnProperty('length')) return failer(reason);

    if (isObjectEmpty(obj)) return failer(reason);

    if (obj.hasOwnProperty('max') && !isValidType([obj, obj.min, obj.max], ['object', 'number', 'number'])) return failer(reason);

    if (obj.hasOwnProperty('length')  && !isValidType([obj, obj.length], ['object', 'number'])) return failer(reason);

    if (obj.hasOwnProperty('max') && !isValidNumber(obj.min)) return failer(reason);

    if (obj.hasOwnProperty('max') && !isValidNumber(obj.max)) return failer(reason);

    if (obj.hasOwnProperty('length') && !isValidNumber(obj.length, Infinity, true)) return failer(reason);

    const answer = [];
    let prev = 0;
    let next = 1;
    let newFibNum = 0;

    const changePrevNext = function () {
        newFibNum = prev + next;
        prev = next;
        next = newFibNum;
    };

    const showFromMinToMax = function () {

        while (newFibNum <= obj.max) {

            if (newFibNum >= obj.min && newFibNum <= obj.max) answer.push(newFibNum);
            changePrevNext();
        }
    };

    const showFibNumEqualsToLen = function () {
        obj.length = Math.abs(obj.length);

        while (newFibNum.toString().length <= obj.length) {

            if (newFibNum.toString().length === obj.length) answer.push(newFibNum);
            changePrevNext();
        }
    };

    if (obj.hasOwnProperty('min') && obj.hasOwnProperty('max')) {
        obj.min = Math.abs(obj.min);
        obj.max = Math.abs(obj.max);
        
        if (isMinGreaterMax(obj.min, obj.max)) return failer(reason);
        showFromMinToMax();
    } else {
        showFibNumEqualsToLen();
    }

    return answer;
}

export {
    showFibNumbers,
};