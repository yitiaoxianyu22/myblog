---
title: ARTS-第6周
---
**开始容易，坚持不易，愿你我都能坚持下去。**
# Algorithm
**Reverse Vowels of a String**
> Write a function that takes a string as input and reverse only the vowels of a string.
 Example 1:
 Input: "hello"
 Output: "holle"
 Example 2:
 Input: "leetcode"
 Output: "leotcede"
 
 思路：set存储所有元音字母，头尾双指针遍历所有字母，头尾指针处的字母均为元音字母则交换，否则指针继续向内收直到头尾指针相等。
```javascript
 var reverseVowels = function(s) {
    let s1 = s.split('')
    let left = 0,
        right = s1.length-1,
        vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']),
        temp = '',
        leftFlag = false,
        rightFlag = false;
    while(left<right) {
        leftFlag = vowels.has(s1[left]);
        rightFlag = vowels.has(s1[right]);
        if(leftFlag && rightFlag){
            temp = s1[left];
            s1[left] = s1[right];
            s1[right] = temp
            left++;
            right--;
            continue
        }
        if(!leftFlag) left++;
        if(!rightFlag) right--;

    }
    return s1.join('')
};
```
 # Review
 [Understand Functional Programming In Javascript](https://medium.com/@mehdiouss315/understand-functional-programming-in-javascript-57840c4edc8)

*这篇文章讲的是了解js中的函数式编程*

![在这里插入图片描述](https://img-blog.csdnimg.cn/202010091611384.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM4NDA5MjY0,size_16,color_FFFFFF,t_70#pic_center)
*感兴趣的自己去看原文吧~*
# Tips
无
# Share
分享一篇[axios封装](https://mp.weixin.qq.com/s/IKCSVS5BvvarzXZesOP-DQ)的文章



