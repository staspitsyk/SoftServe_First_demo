import {
    failer
} from './failer.js';
import {
    isValidType,
    areTrianglesValid,
} from "./validation.js";

function sortTriangles(arrOfTriangles) {
    const reason = `Name of triangle should contain 3 not repeated symbols. All names of triangles should be unique. Vertices should be numbers not equal to 0.`;

    if (arguments.length != 1) return failer(reason);

    if (arrOfTriangles.length === 0) return failer(reason);

    if (!isValidType([arrOfTriangles], ['array'])) return failer(reason);

    const arr = JSON.parse(JSON.stringify(arrOfTriangles));

    const len = arr.length;
    const arrOfVertices = arr.map(obj => obj.vertices);
    const setOfUniqueTrianglesLen = new Set(arrOfVertices).size;

    if (setOfUniqueTrianglesLen !== len) return failer(reason);

    if (!areTrianglesValid(arr)) return failer(reason);

    arr.forEach(obj => {
        const sideOne = obj.vertices[0].toLowerCase();
        const sideTwo = obj.vertices[1].toLowerCase();
        const sideThree = obj.vertices[2].toLowerCase();
        const halfPerimetr = (1 / 2) * (obj[sideOne] + obj[sideTwo] + obj[sideThree]);
        obj.square = (halfPerimetr * (halfPerimetr - obj[sideOne]) * (halfPerimetr - obj[sideTwo]) * (halfPerimetr - obj[sideThree])) ** (1 / 2);
    });

    arr.sort((a, b) => b.square - a.square);

    return arr.map(obj => obj.vertices);
}

export {
    sortTriangles,
};