/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */

var convert = function (s, numRows) {
  var len = s.length;
  if (len === 0 || numRows <= 1) return s;

  var everyRowStrArray = new Array(numRows);
  var rowPoint = 0;
  var step = {"forward": +1, "backward": -1};   //在每行的数组下标中移动的步进方向，可以为+1、-1，超过下标上界时改为-1，超过下界时改为+1
  var nowStep = step.forward;
  for (var i = 0; i < len; i++) {
    //为每行生成一个空字符串
    if (everyRowStrArray[i % numRows] === undefined) {
      everyRowStrArray[i % numRows] = '';
    }
    everyRowStrArray[rowPoint] += s[i];
    rowPoint += nowStep;
    if (rowPoint >= numRows - 1) {
      rowPoint = numRows - 1;
      nowStep = step.backward;
    } else if (rowPoint <= 0) {
      rowPoint = 0;
      nowStep = step.forward;
    }
  }
  return everyRowStrArray.join("");
};
/*
 for test
 */
var resultStr = convert("PAYPALISHIRING", 3);
console.log(resultStr);