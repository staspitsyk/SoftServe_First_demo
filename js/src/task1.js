import {
    failer
} from './failer.js';
import {
    isValidType,
    isValidNumber,
} from "./validation.js";

function buildChessDesk(height, width, symbol) {
    const reason = 'Width and height should be integers, not greater than 50 and not equal to 0.Type of symbol should be string.';

    if (arguments.length != 3) return failer(reason);

    height = Math.abs(height);
    width = Math.abs(width);
    symbol = symbol[0];

    if (!isValidType([height, width, symbol], ['number', 'number', 'string'])) return failer(reason);

    if (!isValidNumber(height, 50, true)) return failer(reason);

    if (!isValidNumber(width, 50, true)) return failer(reason);

    let row = '';
    let desk = ``;
    
    for (let i = 0; i < width; i++) {
        row += `${symbol} `;
    }

    for (let i = 1; i <= height; i++) {

        if (i % 2 !== 0) {
            desk += `${row}\n`;
        } else {
            desk += ` ${row}\n`;
        }
    }

    return desk;
}

export {
    buildChessDesk,
};