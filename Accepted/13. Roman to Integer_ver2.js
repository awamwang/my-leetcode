/**
 * 使用Map存储对应关系，使用Array的reduce方法来遍历数组，按照罗马数字的逻辑（1、按符号个数相加计数2、每两个数字一组。小符号在大符号前时，小符号为负数）解析成为阿拉伯数字
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  //罗马数字Map
  var roman_Int = new Map();
  roman_Int.set("I", 1);
  roman_Int.set("V", 5);
  roman_Int.set("X", 10);
  roman_Int.set("L", 50);
  roman_Int.set("C", 100);
  roman_Int.set("D", 500);
  roman_Int.set("M", 1000);
  var numArray = s.split("");
  var sumInt = 0;
  numArray.unshift(sumInt);   //使用Array的reduce方法，需要把初始值作为数组0号元素
  sumInt = numArray.reduce(addNumArray);    //试试添加初始值参数
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
    var len = array.length;
    var nowInt = roman_Int.get(currentValue);
    if (index + 1 > len) {
      return previousValue + nowInt;
    }

    var NextElement = array[index + 1];
    var nextInt = roman_Int.get(NextElement);
    var sign;
    if (NextElement && nowInt < nextInt) {
      sign = -1;  //当前字符不是倒数第一个，且当前字符小于后面一个字符
    } else {
      sign = 1;   //大于等于于后面一个字符
    }
    return previousValue + nowInt * sign;
  }
};
console.log(romanToInt("MCMLXXXIV"));