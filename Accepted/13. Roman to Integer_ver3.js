/**
 * Filename: 13. Roman to Integer_ver3.js
 * Created by wangmeng on 2016/3/31 18:55.
 */
/**
 * 使用对象的属性和属性值存储对应关系，使用Array的reduce方法来遍历数组，按照罗马数字的逻辑（1、按符号个数相加计数2、每两个数字一组。小符号在大符号前时，小符号为负数）解析成为阿拉伯数字
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  var roman_Int = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
  };
  var numArray = s.split("");
  var sumInt = 0;
  numArray.unshift(sumInt);   //使用Array的reduce方法，需要把初始值作为数组0号元素
  sumInt = numArray.reduce(addNumArray);
  return sumInt;
  /**
   * 使用对象的属性和属性值存储对应关系，按照罗马数字的逻辑（1、按符号个数相加计数2、每两个数字一组。小符号在大符号前时，小符号为负数）解析称为阿拉伯数字，预期效率较高
   *
   * @param {number} previousValue
   * @param {number} currentValue
   * @param {number}  index
   * @param {[]} array
   * @return {number}
   */
  function addNumArray(previousValue, currentValue, index, array) {
    var NextElement = array[index + 1];
    var nowInt = roman_Int[currentValue];
    var nextInt = roman_Int[NextElement];
    if (NextElement) {
      return previousValue + ( nowInt >= nextInt ? nowInt : (nowInt * (-1)));     //当前字符不是倒数第一个
    } else {
      return previousValue + nowInt;  //当前字符是倒数第一个
    }
  }
};
console.log(romanToInt("MCMLXXXIV"));