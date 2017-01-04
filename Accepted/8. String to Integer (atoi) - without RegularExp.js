/**
 * @param {string} str
 * @return {number}
 */
const INT_MAX = 2147483647;
const INT_MIN = -2147483648;

var myAtoi = function (str) {
  var strArray = str.trim().split("");
  var ret = "";
  if ((strArray[0] <= 9 && strArray[0] >= 0) || strArray[0] === "+" || strArray[0] === "-") {
    switch (strArray[0]) {
      //不加break，在+、-情况下执行strArray[1]是否为数字的判断，否则不执行
      case "+":
        if (parseInt(strArray[1]) != strArray[1]) return 0;
      case "-":
        if (parseInt(strArray[1]) != strArray[1]) return 0;
      default:
        var i = 1;
        ret += strArray[0];
        while (parseInt(strArray[i]) == strArray[i]) {
          ret += strArray[i];
          i++;
        }
        ret = parseInt(ret);
        return ret < INT_MAX ? (ret > INT_MIN ? ret : INT_MIN) : INT_MAX;
        break;
    }
  } else {
    return 0;
  }
};


var ret = myAtoi("1");
console.log(ret);