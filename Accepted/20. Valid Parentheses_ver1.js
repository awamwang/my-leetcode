/**
 * Filename: 20. Valid Parentheses_ver1
 * Created on 2016/4/1 18:07.
 */

var parenthesesMap = new Map();
parenthesesMap.set("(", ")");
parenthesesMap.set("[", "]");
parenthesesMap.set("{", "}");
/**
 * @param {string} s
 * @return {boolean}
 */

isValid = function (s) {
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
    expected = parenthesesMap.get(preChar);
    if (expected === undefined || expected !== nowChar) {
      parenthesesArray.push(preChar);
      parenthesesArray.push(nowChar);
    }
  }
  return (parenthesesArray.length === 0);
};

console.log(isValid("()[]{}"));