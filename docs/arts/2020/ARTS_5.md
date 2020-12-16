---
title: ARTS-第5周
---
**开始容易，坚持不易，愿你我都能坚持下去。**
# Algorithm
**String Compression**
>Given an array of characters, compress it in-place.
 >The length after compression must always be smaller than or equal to the original array.
 Every element of the array should be a character (not int) of length 1.
 After you are done modifying the input array in-place, return the new length of the array.  
 Follow up:
 Could you solve it using only O(1) extra space?  
 
> Example 1:
 Input:
 ["a","a","b","b","c","c","c"]
 Output:
 Return 6, and the first 6 characters of the input array should be: ["a","2","b","2","c","3"]
 Explanation:
 "aa" is replaced by "a2". "bb" is replaced by "b2". "ccc" is replaced by "c3".
 
> Example 2:
 Input:
 ["a"]
 Output:
 Return 1, and the first 1 characters of the input array should be: ["a"]
 Explanation:
 Nothing is replaced.
 
 >Example 3:
 Input:
 ["a","b","b","b","b","b","b","b","b","b","b","b","b"]
 Output:
 Return 4, and the first 4 characters of the input array should be: ["a","b","1","2"].
 Explanation:
 Since the character "a" does not repeat, it is not compressed. "bbbbbbbbbbbb" is replaced by "b12".
 Notice each digit has it's own entry in the array.
 
> Constraints:
 1 <= chars.length <= 2000
 chars[i].length == 1
 chars[i] is a lower-case English letter, upper-case English letter, digit or a symbol.
 
 思路：遍历所有字符，判断当前字符与下一个字符是否相等，不相等的话，如果字符数大于一，将数量拆分成数组，替换到字符后面，通过splice方法实现删除字符与添加字符，其中最关键的是要计算好下一步的索引值。
```javascript
 /**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let num = 1;
    for (let i=0;i<chars.length;i++){
        if(chars[i] === chars[i+1]){
            num++
        }else {
            if(num !== 1){
                chars.splice(i-num+2,num-1,...(num.toString()).split(''))
                i = i-num+2
                num = 1

            }
        }
    }
    return chars.length

};
```
 # Review
 [4 Signs of an Inexperienced DeveloperI](https://levelup.gitconnected.com/4-signs-of-an-inexperienced-developer-851966fdc6b1)

*这篇文章讲的是缺乏经验的开发人员的四个特征，感觉条条命中呀。。。*

**无经验开发人员的四种迹象**    
不要担心，因为每一个好的开发人员曾经都是无经验的

 经验是最难的老师，他先给你测试，然后给你上课，Oscar Wilde的这句话很好地总结了一名无经验开发者的生活。

你通过做来学习，这弄脏了你的手。在这样的过程中，只要你从错误中学习你就会犯错，这是完全可以的。这是你获得经验的方式。

作为无经验的开发人员，你每天都会获得这样的测试。但是如何识别无经验的开发者呢？这里有四个迹象，向你展示无经验开发人员的一些特征。

**非结构化代码**
编写非结构化代码是你期望从无经验的开发人员那里看到的，如果稍微有一点结构，那已经是非常大的胜利。无经验开发人员编写非结构化代码的原因是他们的重点是让它正常工作。有经验的开发人员知道作为开发者还有很多事情要做。

作为开发者，编写代码并能让它正常工作是你工作中很小的一部分。然而，无经验的开发人员认为这是他们工作中很大的一部分。随着经验增多，你会意识到你的大部分工作是维护项目而不是从头构建项目。

一旦你意识到这一点，你就会以完全不同的方式写代码。你会开始以可维护的易于其他开发者理解的方式写代码。

意识不到这一点会导致写出像一篇文章一样的方法。这会带来很多缺点，例如，可测试性。你怎样去测试一个可以做五件不同的事像一篇文章大小的方法呢？

当目标只是让它正常工作时，问题是大多数时候代码都没有经过深思熟虑。代码质量因此受到影响。
这种代码通常像过程代码，不遵循像单一职责原则的代码规则。一旦代码进入维护阶段，你就会感到代码质量的不足。


**Shotgun debugging**
砰！
好吧，那没有用。
砰！
好的，那也不起作用。
当经验不足的开发人员遇到问题时，他们通常会开始进行shot弹枪调试（有点不知道咋说这个地方）-他们随机更改代码中的某些内容，以期在不知道实际问题是什么的情况下解决问题。

显然，这在大多数时候都不起作用。通过随机更改，您只会引入更多错误。您应该做的是收集有关该问题的更多信息，而不是shot弹枪调试。

有一些更好的方法来调试代码。您要做的第一件事是找出如何重现问题。在开始对代码进行任何更改之前，请确保您知道如何执行此操作。

打开日志文件（希望您有日志文件）可以是调试过程的一个好的开始。看看您是否能找到一些有用的信息，这些信息可以引导您朝正确的方向发展。在开始更改代码之前收集信息非常重要，这样您就可以了解导致错误的真正原因。

一旦找到了错误的原因并解决了，您还没有完成。如果您确实想做得好，则应该至少编写一个测试来解决问题。这样一来，将来问题变的更坏时，您可以得到保护。

**过于关注技术**
没有经验的开发人员仍在学习技巧。因此，他们的重点主要是成为技术堆栈的专家。这是有道理的，因为如果您想成为一名出色的开发人员，则需要掌握您的技术堆栈。但是，您不仅应该关注技术。
在学习技术堆栈的所有内容时，您不应失去业务。这就是为什么您首先在这里。这就是你有这份工作的原因。

您是在努力为企业创造价值，还是在与企业无关的事情上花费过多的时间？这是一个重要的问题，您应该一直问自己。

成为开发人员不仅仅对工作的技术方面感兴趣。请记住，商业和经济因素是证明工作存在的因素。


**有点不同**
在团队中工作时，您可以通过做一些与团队其他成员略有不同的事情来发现缺乏经验的开发人员。没有经验的开发人员倾向于以自己的方式做事，而不是与其他所有人一样。

有时这是无意发生的。没有经验的人无法识别解决方案中的某些模式。如果您觉得这很熟悉，那么您可以做一些可能会在将来对您有所帮助的事情。

为了以与团队中其他所有人相同的方式执行任务，您可以查看所有创建的pull请求。您无需查看所有内容，只需确保您看看其他开发人员如何解决某些问题即可。他们的解决方案是否类似于您解决问题的方式？如果不是，请询问他们为何寻求解决方案，以及他们是否考虑了您的解决方案。

（*我发现词汇量是硬伤啊*）
# Tips
最近学到了使用swagger进行接口设计，可以在swaggerHub上登录账号（可用GitHub账号登录），创建项目进行设计，要比写文档方便一些。公司项目放在网上可能不好，那可以在本地安装一个swagger editor。
# Share
无



