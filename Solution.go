
package main
import "math"

var MIN_MOVES_RANGE = []int{0, 1, 2}

func minQueenMoves(source []int, target []int) int {
    if areOnSameSquare(source, target) {
        return MIN_MOVES_RANGE[0]
    }
    if areOnSameRowOrColumn(source, target) || areOnSameDiagonal(source, target) {
        return MIN_MOVES_RANGE[1]
    }
    return MIN_MOVES_RANGE[2]
}

func areOnSameSquare(source []int, target []int) bool {
    return source[0] == target[0] && source[1] == target[1]
}

func areOnSameRowOrColumn(source []int, target []int) bool {
    return source[0] == target[0] || source[1] == target[1]
}

func areOnSameDiagonal(source []int, target []int) bool {
    return math.Abs(float64(source[0] - target[0])) == math.Abs(float64(source[1] - target[1]))
}
