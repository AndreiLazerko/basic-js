const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason( date ) {
  if (!date) { return 'Unable to determine the time of year!' }
  if (date.toString !== Date.prototype.toString) { throw new Error("Invalid date!") }
  let season = ['winter', 'spring', 'summer', 'autumn']
  let now = date.getMonth();
  if (now < 2 || now == 11){
    return 'winter'
  } else if( now >1 && now < 5){
    return 'spring'
  }else if( now >4 && now<8){
    return 'summer'
  }
  else {
    return 'autumn'
  }
}

module.exports = {
  getSeason
};
