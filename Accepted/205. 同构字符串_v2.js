// 给定两个字符串 s 和 t，判断它们是否是同构的。

// 如果 s 中的字符可以被替换得到 t ，那么这两个字符串是同构的。

// 所有出现的字符都必须用另一个字符替换，同时保留字符的顺序。两个字符不能映射到同一个字符上，但字符可以映射自己本身。

// 示例 1:

// 输入: s = "egg", t = "add"
// 输出: true
// 示例 2:

// 输入: s = "foo", t = "bar"
// 输出: false
// 示例 3:

// 输入: s = "paper", t = "title"
// 输出: true
// 说明:
// 你可以假设 s 和 t 具有相同的长度。

// https://leetcode-cn.com/problems/isomorphic-strings/description/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }
  
  let aLogs = new Map()
  let bLogs = new Map()

  for (let i = 0, len = s.length; i < len; i++) {
    let c = s[i]
    let replaceC = t[i]
    let aLog = aLogs.get(c)
    let bLog = bLogs.get(replaceC)

    if (((aLog !== undefined) && (aLog !== replaceC)) ||
      ((bLog !== undefined) && (bLog !== c))) {
      return false
    } else {
      aLogs.set(c, replaceC)
      bLogs.set(replaceC, c)
    }
  }

  return true
};

console.log(isIsomorphic('egg', 'add'))
console.log(isIsomorphic('foo', 'bar'))
console.log(isIsomorphic('paper', 'title'))
console.log(isIsomorphic('ab', 'aa'))