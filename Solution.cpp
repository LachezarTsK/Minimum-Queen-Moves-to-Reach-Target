
#include <span>
#include <cmath>
#include <array>
#include <vector>
using namespace std;

class Solution {

    inline static array<int, 3> MIN_MOVES_RANGE{ 0, 1, 2 };

public:
    int minQueenMoves(vector<int>& source, vector<int>& target) {
        if (areOnSameSquare(source, target)) {
            return MIN_MOVES_RANGE[0];
        }
        if (areOnSameRowOrColumn(source, target) || areOnSameDiagonal(source, target)) {
            return MIN_MOVES_RANGE[1];
        }
        return MIN_MOVES_RANGE[2];
    }

    static bool areOnSameSquare(span<const int> source, span<const int> target) {
        return source[0] == target[0] && source[1] == target[1];
    }

    static bool areOnSameRowOrColumn(span<const int> source, span<const int> target) {
        return source[0] == target[0] || source[1] == target[1];
    }

    static bool areOnSameDiagonal(span<const int> source, span<const int> target) {
        return abs(source[0] - target[0]) == abs(source[1] - target[1]);
    }
};
