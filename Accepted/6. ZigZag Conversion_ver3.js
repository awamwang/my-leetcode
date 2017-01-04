/**
 * Filename: 6. ZigZag Conversion_ver3.js
 * Created on 2016/4/5 15:04.
 */

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */

var convert = function (s, numRows) {
  var strLen = s.length;
  if (strLen === 0 || numRows <= 1) return s;

  var result = '';
  var firstChar = 0;
  var step, steps, stepIndex = 0;   //var a = b = 0;会解析成于目的不符的意思，但var a = 0, b = 0;并不会
  var charIndex;

  if (strLen <= numRows) {
    return s;
  }

  while (firstChar < numRows) {
    steps = [(numRows - 1 - firstChar) * 2, firstChar * 2];   //每行字符在输入字符中的序号按照0,0+(numRows - 1 - firstChar) * 2，0+(numRows - 1 - firstChar) * 2 + firstChar * 2，…………的顺序
    charIndex = firstChar;
    result += s.charAt(charIndex);
    while (charIndex < strLen) {
      step = steps[stepIndex];
      charIndex += step;
      if (step) {
        result += s.charAt(charIndex);
      }
      stepIndex = (stepIndex + 1) % 2;
    }
    firstChar++;
    stepIndex = 0;
  }
  return result;
};

/*
 for test
 */
var resultStr = convert("ABCD", 3);
console.log(resultStr);