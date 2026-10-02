
function minQueenMoves(source: number[], target: number[]): number {
    const MIN_MOVES_RANGE = [0, 1, 2];
    if (areOnSameSquare(source, target)) {
        return MIN_MOVES_RANGE[0];
    }
    if (areOnSameRowOrColumn(source, target) || areOnSameDiagonal(source, target)) {
        return MIN_MOVES_RANGE[1];
    }
    return MIN_MOVES_RANGE[2];
};

function areOnSameSquare(source: number[], target: number[]): boolean {
    return source[0] === target[0] && source[1] === target[1];
}

function areOnSameRowOrColumn(source: number[], target: number[]): boolean {
    return source[0] === target[0] || source[1] === target[1];
}

function areOnSameDiagonal(source: number[], target: number[]): boolean {
    return Math.abs(source[0] - target[0]) === Math.abs(source[1] - target[1]);
}
