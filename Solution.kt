
import kotlin.math.abs

class Solution {

    private companion object {
        val MIN_MOVES_RANGE = intArrayOf(0, 1, 2)
    }

    fun minQueenMoves(source: IntArray, target: IntArray): Int {
        if (areOnSameSquare(source, target)) {
            return MIN_MOVES_RANGE[0];
        }
        if (areOnSameRowOrColumn(source, target) || areOnSameDiagonal(source, target)) {
            return MIN_MOVES_RANGE[1];
        }
        return MIN_MOVES_RANGE[2];
    }

    private fun areOnSameSquare(source: IntArray, target: IntArray): Boolean {
        return source[0] == target[0] && source[1] == target[1];
    }

    private fun areOnSameRowOrColumn(source: IntArray, target: IntArray): Boolean {
        return source[0] == target[0] || source[1] == target[1];
    }

    private fun areOnSameDiagonal(source: IntArray, target: IntArray): Boolean {
        return abs(source[0] - target[0]) == abs(source[1] - target[1]);
    }
}
