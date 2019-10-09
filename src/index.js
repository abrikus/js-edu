/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */
module.exports = function getTimeForEducation(
  focus, 
  knowsProgramming,
  config
  ) {
    let key = focus;
    let value = config[key];
    let weeks;
    if(knowsProgramming == true) {
      weeks = Math.ceil(800 / value);
      return weeks; 
    }
    else {
      weeks = Math.ceil((800 + 500) / value);
      return weeks;
    }
};

  