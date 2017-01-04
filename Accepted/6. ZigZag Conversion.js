/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */

var convert = function (s, numRows) {
  if (numRows <= 1) {
    return s;
  }
  var everyRowStrArray = [];

  for (var i = 0; i < s.length; i++) {
    //为每行生成一个空字符串
    if (everyRowStrArray[i % numRows] === undefined) {
      everyRowStrArray[i % numRows] = '';
    }
    //每2*(numRows-1)个字符为一个bigLoop，每numRows-1个字符为一个smallLoop，前numRows-1正序依次填入数组，后numRows-1个逆序依次填入数组
    //循环index从0开始
    var bigLoopIndex = i % ((numRows - 1) * 2);
    var smallLoopIndex = bigLoopIndex % (numRows - 1);
    var isFirstSmallLoop = bigLoopIndex < numRows - 1;

    if (isFirstSmallLoop) {
      everyRowStrArray[smallLoopIndex] += s[i];
    } else {
      everyRowStrArray[(numRows - 1) - smallLoopIndex] += s[i];
    }
  }
  return everyRowStrArray.join('');
};
/*
 for test
 */
var res = convert("PAYPALISHIRING", 3);
console.log(res);