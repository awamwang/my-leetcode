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
  // string.replace(/((1)+|(2)+|(3)+|(4)+|(5)+|(6)+|(7)+|(8)+|(9)+)/g, '$1'+ ' ' + '$2' + '$3' + '$4' + '$5' + '$6' + '$7' + '$8' + '$9' + '$10' + ';')
  var say = '';
  var words = string.match(/(1+|2+|3+|4+|5+|6+|7+|8+|9+)/g);
  for (var i = 0, len = words.length; i < len; i ++) {
    var word = words[i];
    say = say + word.length + word.slice(0, 1);
  }
  return say;
}

console.log(countAndSay(5))
