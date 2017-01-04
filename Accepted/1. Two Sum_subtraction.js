var nums = [2, 7, 11, 15];
var target = 9;

/**
 *单行说明、简要说明
 *
 *多行说明1
 *多行说明2
 *多行说明3
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  //if (nums === []) {    //对本题不需要判断，异常判断考虑清楚
  //  return;
  //}
  var resLow = 0;
  var resHigh = 0;
  var diff;
  nums.forEach(findAnotherNum);
  return ([resLow, resHigh]);
  //根据目标数与当前数的差，找到另外一个数字的下标
  function findAnotherNum(element, index, array) {
    diff = target - element;
    var low = index;
    var high = array.findIndex(function (ele, idx) {
      if (ele === diff && idx !== low) {
        return true;
      }
    }); //findIndex通过回调函数寻找值为diff的数组元素下标Index
    if (high && high > low) { //findIndex找不到情况返回undefined，找到情况下返回下标
      resLow = low;
      resHigh = high;
    }
  }

};

console.log(twoSum(nums, target));
