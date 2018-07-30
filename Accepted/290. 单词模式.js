
// 给定一种 pattern(模式) 和一个字符串 str ，判断 str 是否遵循相同的模式。

// 这里的遵循指完全匹配，例如， pattern 里的每个字母和字符串 str 中的每个非空单词之间存在着双向连接的对应模式。

// 示例1:

// 输入: pattern = "abba", str = "dog cat cat dog"
// 输出: true
// 示例 2:

// 输入:pattern = "abba", str = "dog cat cat fish"
// 输出: false
// 示例 3:

// 输入: pattern = "aaaa", str = "dog cat cat dog"
// 输出: false
// 示例 4:

// 输入: pattern = "abba", str = "dog dog dog dog"
// 输出: false
// 说明:
// 你可以假设 pattern 只包含小写字母， str 包含了由单个空格分隔的小写字母。    

// https://leetcode-cn.com/problems/word-pattern/description/

/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
  let strArray = str.split(' ')

  let pLen = pattern.length
  let sLen = strArray.length

  if (pLen !== sLen) {
    return false
  }

  let matchMap = new Map()
  for (let i = 0; i <= pLen - 1; i ++) {
    let pEle = pattern[i]
    let sEle = strArray[i]
    let match = matchMap.get(pEle)

    if (match === undefined) {
      matchMap.set(pEle, sEle)
    } else {
      if (sEle !== match) {
        return false
      }
    }
  }

  return (new Set(matchMap.values())).size === matchMap.size
};

console.log(wordPattern('abba', 'dog cat cat'))
console.log(wordPattern('abba', 'dog cat cat dog'))
console.log(wordPattern('abba', 'dog cat cat fish'))
console.log(wordPattern('aaaa', 'dog cat cat dog'))
console.log(wordPattern('abba', 'dog dog dog dog')) // false