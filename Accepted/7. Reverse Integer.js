var test1 = 0;
var test2 = 123;
var test3 = -123;
var test4 = 1534236469; //24646461469654320
var test5 = -45460000;

const INT_MAX = 2147483647;
const INT_MIN = -2147483648;
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  var arrayFromStr;
  var tmpStr;
  var sign = 1;
  var resultNum;
  if (x < 0) {
    sign = -1;
  }
  tmpStr = (x * sign).toString();
  arrayFromStr = tmpStr.split('');
  tmpStr = arrayFromStr.reverse().join('');
  resultNum = parseInt(tmpStr * sign);

  return resultNum > INT_MAX ? 0 : (resultNum < INT_MIN ? 0 : resultNum);
};
/**
 * @param {string[]} arrInput
 * @return {string[]}
 */
/*function catTailZeroFromArray(arrInput) {
  for (var i = arrInput.length - 1; i >= 0; i--) {
    if (arrInput[i] !== 0) {
      break;
    }
    arrInput.pop();
  }
  return arrInput;
 }*/

/*

 */
console.log(reverse(test1));
console.log(reverse(test2));
console.log(reverse(test3));
console.log(reverse(test4));
console.log(reverse(test5));