---
title: ARTS-第1周
---
# Algorithm

__20. Valid Parentheses__
>Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
An input string is valid if:
　Open brackets must be closed by the same type of brackets.
　Open brackets must be closed in the correct order.
Note that an empty string is also considered valid.

思路：

判断括号是否匹配，我的思路是将字符串拆分成数组，再用另一个数组做栈存储暂时不匹配的括号，将原数组的每个括号与栈数组的最后一个元素作比较是否匹配，匹配就出栈，不匹配就将该括号入栈，最后判断栈数组长度是否为０
```javascript
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  if(s.length === 0)
      return true;
  let arr = s.split("");
  let arr1 = [arr[0]];
  for(let i=1;i<arr.length;i++){      if(isMatch(arr1[arr1.length-1],arr[i])){
          arr1.pop();
          continue;
      }
      arr1.push(arr[i])
  }
  return arr1.length === 0
};

function isMatch(par1,par2) {
    if(par1 === '(' && par2 === ')')
        return true;
    if(par1 === '[' && par2 === ']')
        return true;
    return par1 === '{' && par2 === '}';

}
```
看到别人更简单优秀的方式，利用正则表达式，将匹配的括号替换为空串，如果最后字符串长度为0，则匹配，返回true，如下：
```javascript
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if (s.length % 2 !== 0) return false;
    const len = s.length/2;
    for (let i = 0; i < len; i++) {
        s = s.replace(/(\(\))|(\[\])|(\{\})/, '');
    }
    return s.length == 0;
}
```
# Review
其实我的英语很不好，所以这次选了medium上一篇比较简单的文章，也不是技术类文章，地址[The Hardest Part of Living Abroad Nobody Talks About](https://medium.com/@tom.stevenson78/the-hardest-part-of-living-abroad-nobody-talks-about-e7ed0fc07cf1)

文章讲述的对于在国外生活中的最困难的部分没有人提及，大多数人听到在国外生活过都会发出大声的wow之类的惊叹的话语，他们之所以会发出这样的声音，是因为他们从未在国外生活过，但其实国外的生活除了语言，食物，习俗不同之外，起床上班，下班其实都是一样的，但是在国外生活却还有最大的一个问题，没有哪一个地方像家。作者打算定居他熟悉的英国，但是他发现几年过去，英国也不再是他熟悉的英国了，最后作者说了一句I feel like a man without a country,a man without a home.An outsider in my country and any other.


结局很心酸，但是也是事实，居无定所的日子可能谁都会累吧。但是我们就是这样呀，不断的制造变化，拥抱变化，适应变化。
# Tips
无。
# Share
分享我在掘金看到的一位小姐姐整理的js的基础知识吧，很全面，还包含脑图
[js知识](https://juejin.im/post/5ebb68796fb9a0435432df8e)
# 最后
这一次的分享其实是上一周做的，上周没有整理，今天整理一下。

这也是第一次做ARTS，希望可以坚持下去。
