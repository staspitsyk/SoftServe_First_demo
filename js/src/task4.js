import {
    failer
} from './failer.js';
import {
    isValidType,
    isValidNumber,
} from "./validation.js";

function findPalindrome(number) {
    const reason = 'Input should be an integer, not equal to 0.';

    if (arguments.length != 1) return failer(reason);

    number = Math.abs(number);

    if (!isValidType([number], ['number'])) return failer(reason);

    if (!isValidNumber(number, Infinity, true)) return failer(reason);

    number = String(number);
    const firstCheck = cutHalf(number);
    let answer = isPalindrome(firstCheck) ? +number : 0;
    const len = number.length;
    let counter = 1;

    while (!answer) {
        let sliceFinish = number.length - counter;
        let times = len - sliceFinish + 1;

        for (let i = 0; i < times; i ++) {
            const numberSlice = number.slice(i, sliceFinish);
            const arrOfHalfs = cutHalf(numberSlice);
            const isPal = isPalindrome(arrOfHalfs);

            if (isPal) {
                answer = +numberSlice;
                break;
            }
            sliceFinish++;
        }
        counter++;

        if (number.length - counter === 1) break;
    }

    return answer;
}

function cutHalf(number) {
    const len = number.length;
    let firstPart;
    let secondPart;

    if (len % 2 === 0) {
        firstPart = number.slice(0, len/2);
        secondPart = number.slice(len/2);
    } else {
        const middle = Math.floor(len/2);
        firstPart = number.slice(0, middle);
        secondPart = number.slice(middle + 1);
    }

    return [firstPart, secondPart];
}

function isPalindrome(arr) {
    return arr[0] === arr[1].split('').reverse().join('');
}

export {
    findPalindrome,
};