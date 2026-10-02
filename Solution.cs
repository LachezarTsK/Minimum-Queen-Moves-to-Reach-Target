
using System;

public class Solution
{
    static readonly int[] MIN_MOVES_RANGE = { 0, 1, 2 };

    public int MinQueenMoves(int[] source, int[] target)
    {
        if (AreOnSameSquare(source, target))
        {
            return MIN_MOVES_RANGE[0];
        }
        if (AreOnSameRowOrColumn(source, target) || AreOnSameDiagonal(source, target))
        {
            return MIN_MOVES_RANGE[1];
        }
        return MIN_MOVES_RANGE[2];
    }

    private static bool AreOnSameSquare(int[] source, int[] target)
    {
        return source[0] == target[0] && source[1] == target[1];
    }

    private static bool AreOnSameRowOrColumn(int[] source, int[] target)
    {
        return source[0] == target[0] || source[1] == target[1];
    }

    private static bool AreOnSameDiagonal(int[] source, int[] target)
    {
        return Math.Abs(source[0] - target[0]) == Math.Abs(source[1] - target[1]);
    }
}
