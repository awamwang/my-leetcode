/**
 * Filename: 20. Valid Parentheses_ver2.js
 * Created by wangmeng on 2016/4/13 20:27.
 */
/**
 * @param {string} s
 * @return {boolean}
 */

isValid = function (s) {
  var parenthesesMap = {
    "(": ")",
    "[": "]",
    "{": "}"
  };


  if (s === "") {
    return true;
  }
  var parenthesesArray = [];
  var nowChar, preChar, expected;
  parenthesesArray.push(s.charAt(0));
  for (var i = 1; i < s.length; i++) {
    if (parenthesesArray.length === 0) {
      parenthesesArray.push(s.charAt(i));
      continue;
    }
    preChar = parenthesesArray.pop();
    nowChar = s.charAt(i);
    expected = parenthesesMap[preChar];
    if (expected === undefined || expected !== nowChar) {
      parenthesesArray.push(preChar);
      parenthesesArray.push(nowChar);
    }
  }
  return (parenthesesArray.length === 0);
};

console.log(isValid("()[]{}"));