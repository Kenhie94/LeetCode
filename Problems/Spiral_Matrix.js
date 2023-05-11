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
    let orderArray = ['right','down','left','up'];
    let order = 0;
    let size = 0;
    let newMatrix = [];
    for (let i = 0; i < matrix.length; i++) {
        let row = [];
        for (let j = 0; j < matrix[i].length; j++) {
            row.push({value: matrix[i][j], visited: false})
            size += 1;
        }
        newMatrix.push(row)
    }
    let ans = [];
    let visited = 0;
    let m = 0;
    let n = 0;
    while (visited < size) {
            if (orderArray[order] === 'right') {
                if (newMatrix[m][n].visited === false) {
                    ans.push(newMatrix[m][n].value)
                    newMatrix[m][n].visited = true
                    n += 1
                    visited += 1
                    if (n === newMatrix[m].length) {
                        order += 1
                        m += 1
                        n -= 1
                    }
                } else {
                    order += 1
                    m += 1
                    n -= 1
                }
            } else if (orderArray[order] === 'down') {
                if (newMatrix[m][n].visited === false) {
                    ans.push(newMatrix[m][n].value)
                    newMatrix[m][n].visited = true
                    m += 1
                    visited += 1
                    if (m === newMatrix.length) {
                        order += 1
                        m -= 1
                        n -= 1
                    }
                } else {
                    order += 1
                    m -= 1
                    n -= 1
                }
            } else if (orderArray[order] === 'left') {
                if (newMatrix[m][n].visited === false) {
                    ans.push(newMatrix[m][n].value)
                    newMatrix[m][n].visited = true
                    n -= 1
                    visited += 1
                    if (n < 0) {
                        order += 1
                        m -= 1
                        n += 1
                    }
                } else {
                    order += 1
                    m -= 1
                    n += 1
                }
            } else if (orderArray[order] === 'up') {
                if (newMatrix[m][n].visited === false) {
                    ans.push(newMatrix[m][n].value)
                    newMatrix[m][n].visited = true
                    m -= 1
                    visited += 1
                } else {
                    order = 0
                    m += 1
                    n += 1
                };
            };
    };
    return ans
};