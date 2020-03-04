import {
    failer
} from "./failer.js";
import {
    isValidType,
    isValidNumber,
} from "./validation.js";

function showRowOfSquares(len, minSq) {
    const reason = 'Length should be an integer not equal to 0. Min Square should be a number.';

    if (arguments.length != 2) return failer(reason);

    len = Math.abs(len);
    minSq = Math.abs(minSq);

    if (!isValidType([len, minSq], ['number', 'number'])) return failer(reason);

    if (!isValidNumber(len, Infinity, true)) return failer(reason);

    if (isNaN(minSq)) return failer(reason);

    const start = Math.ceil(minSq ** (1 / 2));
    let answer = '';
    let counter = 1;

    for (let i = start; counter <= len; i++) {
        answer += `${i}, `;
        counter++;
    }
    
    return answer.slice(0, -2);
}

export {
    showRowOfSquares,
};