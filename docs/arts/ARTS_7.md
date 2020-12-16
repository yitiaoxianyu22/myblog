---
title: ARTS-第7周
---
**开始容易，坚持不易，愿你我都能坚持下去。**
# Algorithm
**14. Longest Common Prefix**
>  Write a function to find the longest common prefix string amongst an array of strings.
 If there is no common prefix, return an empty string "".
 Example 1:
 Input: strs = ["flower","flow","flight"]
 Output: "fl"
 Example 2:
 Input: strs = ["dog","racecar","car"]
 Output: ""
 Explanation: There is no common prefix among the input strings.
 
 思路：以数组中第一个单词为基准，依次遍历剩下的。
```javascript
 var longestCommonPrefix = function(strs) {
    if(!strs.length) return '';
    let cp = '';
    for(let index = 0;index<strs[0].length;index++){
        for(let i=1;i<strs.length;i++){
            if(index>strs[i].length || strs[i][index]!==strs[0][index]){
                return cp
            }
        }
        cp += strs[0][index]
    }
    return cp

};
```
 # Review
 [What the devil is ‘this’!](https://medium.com/swlh/whats-this-in-javascript-870918e833b8)

*这篇文章讲的是js中的恶魔-this*


![在这里插入图片描述](https://img-blog.csdnimg.cn/20201027175610862.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM4NDA5MjY0,size_16,color_FFFFFF,t_70#pic_center)

*这篇文章还挺有实用性的，感兴趣的自己去看原文吧~*
# Tips
无
# Share
无


