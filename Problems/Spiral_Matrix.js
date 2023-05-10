// Given an m x n matrix, return all elements of the matrix in spiral order.

// Example 1:

// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [1,2,3,6,9,8,7,4,5]
// Example 2:

// Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
// Output: [1,2,3,4,8,12,11,10,9,5,6,7]
 
// Constraints:

// m == matrix.length
// n == matrix[i].length
// 1 <= m, n <= 10
// -100 <= matrix[i][j] <= 100

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
let spiralOrder = function(matrix) {
    let row = matrix.length;
    let list = [];
    for (let i = 0; i < row; i++) {
        list.push(matrix[0][i])
    }
    for (let i = 1; i < row; i++) {
        let lastArray = matrix[i].pop()
        list.push(lastArray)
    }
    for (let i = row; i > 1; i--) {
        list.push(matrix[row - 1][i - 2])
    }
    for (let i = row - 2;i < row + 1; i++) {
        list.push(matrix[row - 2][i - 1])
    }
    return list
}; 