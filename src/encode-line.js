const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let res = '';
  let count = 1;
  let arr = str.split('');
  for(let i = 0; i < str.length; i++){
    if (arr[i] === arr[i+1])count++;
    else {
      if (count > 1) res += count + arr[i] ;
      else res += arr[i];
      count = 1
    }
  }
  return res
}

module.exports = {
  encodeLine
};
