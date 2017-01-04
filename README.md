# 编码算法练习总结、心得、遗留问题

## 编码注意

1. 整形除整形不是整形，需要用`parseInt();`。
2. For (var i in Object) 中的i是个字符型。


    var aa=[1,2,3];
    for (var i in aa){
      console.log(typeof(i));
    }
    3VM340:3 string
3. E6以前没有块作用域，所以同一函数的多个循环中，变量不能同名。
4. 经验：JavaScript的number也并非无上限，转为字符时，超过一定长度会转为


    function positiveNumToArray(numInput) {
      var tempStr=numInput.toString();
      var res=tempStr.split('');
      return res;
    }
    console.log(positiveNumToArray(134445767447847834756453484384534478445644564545454));
    VM168:6 ["1", ".", "3", "4", "4", "4", "5", "7", "6", "7", "4", "4", "7", "8", "4", "7", "8", "4", "e", "+", "5", "0"]
5. 下面的两条小提示可以帮你决定是使用 Map 还是 Object：
如果键在运行时才能知道，或者所有的键类型相同，所有的值类型相同，那就使用基于Object的映射。
如果需要针对个别元素进行操作，使用 Objects。
6. 即使你能用Table的innerHTML属性来写整个表格和单元格的内容，但不要用它来修改表格。
7. 字符串处理
（1）首尾空白字符
（2）内部空白字符
（3）与其他类型转换时长度限制
（4）大小写、格式等特定限制
8. For in循环的使用要注意。因为迭代的顺序是依赖于执行环境的，所以数组遍历不一定按次序访问元素。因此当迭代那些访问次序重要的 arrays 时用整数索引去进行for循环(或者使用Array.prototype.forEach()或for...of循环) 。
9. 引用值作为参数的副作用


    nums=[1,2,3,4];
    function transNumArrayToObject (numArray) {
      var res=[];
      var resObj={};
      for (var i in numArray) {
        resObj["key"]=i;
        resObj["value"]=numArray[i];
        res.push(resObj);
      }
      return res;
    }
    console.log(transNumArrayToObject(nums));


>[ { key: '3', value: 4 },
{ key: '3', value: 4 },
{ key: '3', value: 4 },
{ key: '3', value: 4 } ]
> 在for循环外部声明了resObj，在for内部作为引用传给push，所以数组res相当有4个resObj的引用，当最后一次赋值给resObj时，这个值同时应用到4个resObj上，实际我们想要的是————
> [ { key: '0', value: 1 },
> { key: '1', value: 2 },
> { key: '2', value: 3 },
> { key: '3', value: 4 } ]

>另：
>为变量赋值时，ECMAScript 的解释程序必须判断该值是原始类型，还是引用类型。要实现这一点，解释程序则需尝试判断该值是否为 ECMAScript 的原始类型之一，即 Undefined、Null、Boolean、Number 和 String 型。由于这些原始类型占据的空间是固定的，所以可将他们存储在较小的内存区域 - 栈中。这样存储便于迅速查寻变量的值。

10. **建议** 变量命名加上类型标志，比如nFirstNumber、sName。
11. 注意取余操作数要为正整数，否则情况可能复杂，下面这种情况不适合出现


    if (( i / (numRows - 1) ) % 2 < 1)
12. 下面这种将表达式作为数组成员的写法，当表达式变量重新赋值时，并不会重新计算数组元素(与条目9进行对比)  [相关题目](https://coding.net/u/wangnew2013/p/LeetCode-Code-JavaScript/git/blob/master/Accepted/6.%20ZigZag%20Conversion_ver3.js)


    steps = [(numRows - 1 - firstChar) * 2, firstChar * 2];
    step = steps[stepIndex];
13. 通过符号函数消除差异，简化代码


    var sign = 1;
    var resultNum1;
    if (x < 0) {
      sign = -1;
    }
    tmpStr = (x*sign).toString();
    arrayFromStr = tmpStr.split('');
    // arrayFromStr = catTailZeroFromArray(arrayFromStr);
    tmpStr = arrayFromStr.reverse().join('');
    resultNum1 = parseInt(tmpStr*sign);
14. 三目运算符使用时，将异常输出放在前面，比较容易理解，读起来顺


    return resultNum > INT_MAX ? 0 : (resultNum < INT_MIN ? 0 : resultNum);
15. 要注意重复操作（计算）的整合为一次操作


    var remainder; // 耗时操作只计算一次
    while (x > 0) {
      remainder = x % 10;
      rverseNum = reverseNum * 10 + remainder;
      x = (x - remainder) / 10;
    }
16. 要杜绝数组、字符串、类数组访问越界，如下面的s.charAt(i + 1)


    for (var i = 0; i < s.length; i++) {
      if (s.charAt(i + 1) === "" || romanToInt[s.charAt(i)] >= romanToInt[s.charAt(i + 1)]) {
17. 这种使用可以取到值


    var keys = !isArrayLike(obj) && _.keys(obj),      //[wangnew2013]:2016-04-22 10:19:53 这个能取到_.keys后的值吗？ 答：能
18. 处理未知个数的参数时常用方法——截取参数，逐个处理


    _.extend = function (target) {
        var args = array.slice.call(arguments, 1);
        args.forEach(function (arg) {
            merge(target, arg);
        });
        return target;
    };
19.

## 编译环境

1. 使用空格缩进，不要使用hardTab（以sublimeText为例，应在右下角处进行设置，“使用空格进行设置”）
2.

## 个人习惯

1. ~~改掉用temp命名变量的习惯~~
2. 变量类型的确定，比如整形与Boolean型的取舍，考量角度有：哪个更符合实际的意义、哪个更具自解释能力。
var carry = 0;
此处carry表示进位，当计算加法时，carry只可能为0或1，那么可以考虑写为isCarry，当它为数值时，可以考虑叫做carryBit。
3. 多考虑函数化，不要因为当前只是一两行代码就觉得没有必要函数化。
