import {
    failer
} from './failer.js';
import {
    isValidQuantityOfFields,
    isValidType,
    isValidEnvelope,
} from "./validation.js";

function isEnvelopeFits(first, second) {
    const reason = 'Width and height should be numbers, not equal to 0.';

    if (arguments.length != 2) return failer(reason);

    const arrOfArgs = [first, second, first.a, first.b, second.c, second.d];
    const arrOftypes = ['object', 'object', 'number', 'number', 'number', 'number'];

    if (!isValidQuantityOfFields(first, 2) || !isValidQuantityOfFields(second, 2)) return failer(reason);

    if (!isValidType(arrOfArgs, arrOftypes)) return failer(reason);

    if (!isValidEnvelope(first) || !isValidEnvelope(second)) return failer(reason);

    first.a = Math.abs(first.a);
    first.b = Math.abs(first.b);
    second.c = Math.abs(second.c);
    second.d = Math.abs(second.d);

    const p = first.a >= first.b ? first.a : first.b;
    const q = first.a <= first.b ? first.a : first.b;
    const a = second.c >= second.d ? second.c : second.d;
    const b = second.c <= second.d ? second.c : second.d;
    
    if (p <= a && q <= b) return 2;

    let condition = ((2 * p * q * a) + (p**2 - q**2) * (p**2 + q**2 - a**2)**(1/2))/(p**2 + q**2);
    
    if (p > a && b > condition) return 2;

    if (a <= p && b <= q) return 1;

    condition = ((2 * a * b * p) + (a**2 - b**2) * (a**2 + b**2 - p**2)**(1/2)/(a**2 + b**2));

    if (a > p && q > condition) return 1;

    return 0;
}

export {
    isEnvelopeFits,
};