/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function (str) {
  str=str.trim();
  var pureIntRegExp = /^\-?\d+$/;
  var decimalRegExp = /^\-?(\d*)\.\d*$/;
  var eIntRegExp = /^(\d?\.?\d*)[Ee](\-)?(\d+)$/;
  var commaIntRegExp = /^\d{1,3}(,\d\d\d)*$/;

  if (pureIntRegExp.test(str) || decimalRegExp.test()) {  //整数或小数形式
    return parseInt(str);
  } else if (eIntRegExp.test(str)) {  //科学计数法

  } else if (commaIntRegExp.test(str)) {

  }
};


var res = myAtoi("1.54561e564");
console.log(res);