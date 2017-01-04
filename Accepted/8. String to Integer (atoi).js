/**
 * @param {string} str
 * @return {number}
 */
const INT_MAX = 2147483647;
const INT_MIN = -2147483648;

var myAtoi = function (str) {
  str = str.trim();
  var pureIntRegExp = /^[\-\+]?\d+/;
  if (pureIntRegExp.test(str)) {
    var retArray = pureIntRegExp.exec(str);
    var ret = retArray[0] * 1;  ///js三种字符转整形方法：1、函数2、强制类型转换Number(str)3、弱类型进行算术运算
    return ret > INT_MAX ? INT_MAX : (ret < INT_MIN ? INT_MIN : ret);
  } else {
    return 0;
  }
};


var ret = myAtoi("-2147483647");
console.log(ret);