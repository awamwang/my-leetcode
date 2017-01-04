var nums = [3, 2, 4];
var target = 6;

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
  //用对象数组(结构体)先记录关键字与值对应关系
  //先排成正序，从首尾两端严格步进，测试和是否为target
  var objArray = transNumArrayToObject(nums);
  objArray = objArray.sort(function (a, b) {
    return a.value - b.value;
  });
  var low = 0;
  var high = objArray.length - 1;
  while (low < high) {
    if (objArray[low].value + objArray[high].value === target) {
      return ([objArray[low].key, objArray[high].key]);
    } else if (objArray[low].value + objArray[high].value < target) {
      low++;
    } else {
      high--;
    }
  }
};
/**
 * @param {number[]} numArray
 * @return {Object[]}
 */
function transNumArrayToObject (numArray) {
  var res = [];
  for (var i = 0; i < numArray.length; i++) {
    var resObj = {};
    resObj["key"] = i;
    resObj["value"] = numArray[i];
    res.push(resObj);
  }
  return res;
}

console.log(twoSum(nums, target));
