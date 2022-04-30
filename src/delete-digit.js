const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arr =[];
  let num = String(n).split('');


  for (let i = 0; i < num.length; i++) {
    let numb = [...num];
    numb.splice(i, 1);
    arr.push(numb.join(''))
  }
  return Math.max(...arr)
  // let nubStr = num.filter(e => e != min).join('');
  // let nmb = Number(nubStr);
}

module.exports = {
  deleteDigit
};
