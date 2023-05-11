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

}; 

// var spiralOrder = function(matrix) {
//     let orderArray = ['right','down','left','up'];
//     let order = 0;
//     let size = 0;
//     let newMatrix = [];
//     for (let i = 0; i < matrix.length; i++) {
//         let row = [];
//         for (let j = 0; j < matrix[i].length; j++) {
//             row.push({value: matrix[i][j], visited: false})
//             size += 1;
//         }
//         newMatrix.push(row)
//     }
//     let ans = [];
//     let visited = 0;
//     let m = 0;
//     let n = 0;
//     while (visited < size) {
//         // put your logic here
//         // hint: you can access value or visited with newMatrix[m][n].visited/value
//     }
//     return ans
// };