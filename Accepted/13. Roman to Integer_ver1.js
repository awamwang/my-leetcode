/**
 * Filename: 13. Roman to Integer_ver1
 * Created by wangmeng on 2016/3/31 16:24.
 */
/**
 * 使用对象的属性和属性值存储对应关系，按照罗马数字的逻辑（1、按符号个数相加计数2、每两个数字一组。小符号在大符号前时，小符号为负数）解析称为阿拉伯数字，预期效率较高
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  var romanToInt = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
  };
  var sumInt = 0;
  var len = s.length;
  var sign = +1;
  var nowChar;
  for (var i = 0; i < len; i++) {
    nowChar = romanToInt[s.charAt(i)];
    if (i + 1 >= len || nowChar >= romanToInt[s.charAt(i + 1)]) {     //s.charAt(i + 1) === "" 越界;;;i + 1 === len最好写成大于等于
      sign = +1;    //如果当前的符号代表的数字大于等于接下去一个符号代表的数字，将数字加入总数（或者当前已经是最后一个符号）
    } else {
      sign = -1;    //如果当前的符号代表的数字小于接下去一个符号代表的数字，将数字从总数减去
    }
    sumInt += (nowChar * sign);
  }
  return sumInt;
};
console.log(romanToInt("MCMLXXVI"));