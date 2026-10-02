
/**
 * @param {number[]} source
 * @param {number[]} target
 * @return {number}
 */
var minQueenMoves = function (source, target) {
    const MIN_MOVES_RANGE = [0, 1, 2];
    if (areOnSameSquare(source, target)) {
        return MIN_MOVES_RANGE[0];
    }
    if (areOnSameRowOrColumn(source, target) || areOnSameDiagonal(source, target)) {
        return MIN_MOVES_RANGE[1];
    }
    return MIN_MOVES_RANGE[2];
};

/**
 * @param {number[]} source
 * @param {number[]} target
 * @return {boolean}
 */
function areOnSameSquare(source, target) {
    return source[0] === target[0] && source[1] === target[1];
}

/**
 * @param {number[]} source
 * @param {number[]} target
 * @return {boolean}
 */
function areOnSameRowOrColumn(source, target) {
    return source[0] === target[0] || source[1] === target[1];
}

/**
 * @param {number[]} source
 * @param {number[]} target
 * @return {boolean}
 */
function areOnSameDiagonal(source, target) {
    return Math.abs(source[0] - target[0]) === Math.abs(source[1] - target[1]);
}
