function isValidNumber(number, max, notEqualsToZero) {
    if (max && notEqualsToZero) {
        return Number.isInteger(number) && number <= max && number !== 0;
    } else if (max) {
        return Number.isInteger(number) && number <= max;
    } else {
        return Number.isInteger(number);
    }
}

function isMinGreaterMax(min, max) {
    return min > max;
}

function isValidEnvelope(obj) {
    for (let key in obj) {
        if (isNaN(obj[key])) return false;
        if (obj[key] === 0) return false;
    }
    return true;
}

function isValidType(arrOfArgs, arrOftypes) {
    for (let i = 0; i < arrOfArgs.length; i++) {
        if (arrOftypes[i] === 'array') {
            if (!Array.isArray(arrOfArgs[i])) return false;
        } else if (typeof arrOfArgs[i] === 'number' && isNaN(arrOfArgs[i])) {
            return false;
        } else {
            if (typeof arrOfArgs[i] !== arrOftypes[i]) return false;
        }
    }
    return true;
}

function areTrianglesValid(arr) {
    const len = arr.length;
    for (let i = 0; i < len; i++) {
        const obj = arr[i];

        if (obj.vertices.length !== 3) return false;

        const sideOne = obj.vertices[0].toLowerCase();
        const sideTwo = obj.vertices[1].toLowerCase();
        const sideThree = obj.vertices[2].toLowerCase();
        let keyCount = 0;

        for (let key in obj) {
            if (key !== 'vertices' && obj[key] === 0) return false;
            if (key !== 'vertices' && typeof obj[key] !== 'number' || key !== 'vertices' && isNaN(obj[key])) return false;
            keyCount++;
        }

       if (!obj.hasOwnProperty(sideOne) || !obj.hasOwnProperty(sideTwo) || !obj.hasOwnProperty(sideThree) || !obj.hasOwnProperty('vertices')) {
            return  false;
        } else if (keyCount !== 4) return false;
    }
    return true;
}

function isValidQuantityOfFields(obj, quantity) {
    let counter = 0;
    for (let key in obj) {
        counter++;
    }
    return counter === quantity;
}

function isObjectEmpty(obj) {
    let counter = 0;
    for (let key in obj) {
        counter++;
    }
    return counter === 0;
}

export {
    isValidNumber,
    isMinGreaterMax,
    isValidEnvelope,
    isValidType,
    areTrianglesValid,
    isValidQuantityOfFields,
    isObjectEmpty,
};