// The count-and-say sequence is the sequence of integers beginning as follows:
// 1, 11, 21, 1211, 111221, ...
//
// 1 is read off as "one 1" or 11.
// 11 is read off as "two 1s" or 21.
// 21 is read off as "one 2, then one 1" or 1211.
// Given an integer n, generate the nth sequence.

// https://leetcode.com/problems/count-and-say/

/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  if (n === 1) {
    return '1';
  }

  var string = '1';
  var say;
  for (var i = 1; i <= n - 1; i ++) {
    say = sayWord(string);
    string = say;
  }
  return say;
};

function sayWord (string) {
  var say = '';
  var count = 1;
  var str = '';
  var nextStr = 'init';

  while (nextStr !== '') {
    str = string.slice(0, 1);
    string = string.slice(1, string.length);
    nextStr = string.slice(0, 1);
    if (str !== nextStr) {
      say = say + count + str
      count = 1
    } else {
      count ++
    }
  }

  return say;
}

console.log(countAndSay(5))
