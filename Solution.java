
public class Solution {

    private static final int[] MIN_MOVES_RANGE = {0, 1, 2};

    public int minQueenMoves(int[] source, int[] target) {
        if (areOnSameSquare(source, target)) {
            return MIN_MOVES_RANGE[0];
        }
        if (areOnSameRowOrColumn(source, target) || areOnSameDiagonal(source, target)) {
            return MIN_MOVES_RANGE[1];
        }
        return MIN_MOVES_RANGE[2];
    }

    private static boolean areOnSameSquare(int[] source, int[] target) {
        return source[0] == target[0] && source[1] == target[1];
    }

    private static boolean areOnSameRowOrColumn(int[] source, int[] target) {
        return source[0] == target[0] || source[1] == target[1];
    }

    private static boolean areOnSameDiagonal(int[] source, int[] target) {
        return Math.abs(source[0] - target[0]) == Math.abs(source[1] - target[1]);
    }
}
