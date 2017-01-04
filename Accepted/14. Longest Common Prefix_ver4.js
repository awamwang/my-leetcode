/**
 * Created by Administrator on 2016/4/10.
 */
/**
 * �Ȱ����ֵ��������ֱ�����������̴��Ĺ�������Ϊ������
 *
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  var commonStr = "";
  var len = strs.length;
  switch (len) {
    case 0:
      return commonStr;
    case 1:
      return strs[0];
    default :
      var sortedStrs = strs.sort();   //�Ȱ����ֵ��������
      var firstStr = sortedStrs[0];
      var lastStr = sortedStrs[len - 1];
      commonStr = CommonPrefixInTwoStr(firstStr, lastStr);
      return commonStr;
  }
};
/**
 * ���ַ�������˳��ȷ��ʱ�����ع����ַ���
 *
 * @param {string} shortStr
 * @param {string} longStr
 * @return {string}
 */
function CommonPrefixInTwoStr(shortStr, longStr) {
  var commonStr = "";
  for (var i = 0; i < shortStr.length; i++) {
    commonStr = shortStr.slice(0, i + 1);
    if (longStr.indexOf(commonStr) !== 0) {   //�����������longStr��0λ�ÿ�ʼ
      commonStr = shortStr.slice(0, i);
      return commonStr;
    }
  }
  return commonStr;
}
console.log(longestCommonPrefix(["abab", "aba", "abc"]));