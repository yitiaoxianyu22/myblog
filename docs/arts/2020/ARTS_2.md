---
title: ARTS-第2周
---
# Algorithm
**680. Valid Palindrome II**
>  Given a non-empty string s, you may delete at most one character. Judge whether you can make it a palindrome.
>
>Example 1:
   Input: "aba"
   Output: True
>Example 2:
   Input: "abca"
   Output: True
   Explanation: You could delete the character 'c'.
>
>Note:
   The string will only contain lowercase characters a-z. The maximum length of the string is 50000.

思路:验证回文串使用双指针，头尾指针往里缩，如果遇到不相等的字符，可以删除左指针或者右指针的字符，再检测剩下的串是否为回文串，剩下的串中只要遇到不相等的字符
就判定不是回文串（一开始的思路完全错了，用了数组翻转的方法，但是这样的话字符串长了时间复杂度会非常高）

```javascript
/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    let left = 0;
    let right = s.length-1;
    while (left<right){
        if(s[left] !== s[right]){
            return valid(s,left+1,right) || valid(s,left,right-1)
        }
        left++;
        right--
    }
    return true
};

//这个辅助函数就可以将里面的串都检测是否为回文串
function valid(str,l,r){
    while(l<r){
        if(str[l++] !== str[r--])
            return false
    }
    return true
}
```
# Review
先贴地址 [7 Skills of Highly “Effective” Programmers](https://medium.com/better-programming/7-habits-of-highly-effective-programmers-563ee3b63f33)

上一篇选的过于简单，这一篇又太难了，对照谷歌翻译看得，但是感觉有的句子翻译的也不好。

这篇文章讲的是高效率程序员的7个技巧：

软件工程师会通过练习leetcode题目以及完善简历来获得面试技巧，一旦他们在一家初创公司，谷歌，亚马逊或是另一家公司获得了工作
他们用来获得这份共偶的技能可能跟他们日常工作不匹配。我们团队受到TechLead所创的高效率程序员的七个技巧的启发，想对此主题提供自己的看法。


1. 学习如何阅读别人的代码

除你之外每个人都在写糟糕的代码。

这就是为什么一项具有多项好处的伟大技能是能够遵循别人的代码。

无论上一位工程师的代码有多么混乱以及考虑不周，你都需要能够去遍历它，毕竟，这是你的工作。即使那位工程师是一年前的你。

这项技能有两种好处，第一，能够阅读别人的代码是一个很好地了解不好设计的机会。当你浏览别人代码的时候你会了解哪些有效哪些无效。
更重要的是，你能了解到哪种类型的代码易于其他工程师遵循，哪种很难遵循。

你需要确保尽可能多的阅读别人的代码。这样，其他工程师会了解你是一位怎样的高级工程师。

确保你能提出关于可维护代码以及良好注释的重要性的观点，这更进一步表明你在编程领域的领导地位。

你的设计应该井井有条，不需要任何文档。事实上，如果你是一位优秀的程序员你不需要编写任何关于代码的文档。
这只是浪费时间，你需要话费时间编程以及参加会议进行讨论。

能够阅读别人混乱的代码也会使得在有需要时更新变的容易。这同时意味着你缺乏更新代码的经验。例如，我们曾经将脚本从Powershell 
转换为Python再转换为Perl。我们在Perl方面经验有限，但是我们仍然有足够的背景知识弄清楚发生了什么并做出所需的更改。

这源于对所有代码的理解以及对Perl的了解。

阅读别人的代码会使你更有价值，因为你可以遵循可能会绊倒别人的过度设计的系统。

2. 对不良项目的敏感度

有很多技能需要花费时间去了解，我们认为值得了解的技能之一是明白哪些项目不值得做，哪些项目显然是步履维艰。

大公司的项目总是比可能完成的或者影响更大的项目多。有很多项目可能不会产生任何商业影响（至少不会对你），还有一些项目管理不善。
这并不是说当你不同意项目中的一些观点时就要放弃你的想法。但是如果利益相关者不能合理的解释最终结果会是什么样的，那这个项目大概是不值得做的。

同样，有些项目可能聚焦于技术而不是解决方案，因此从一开始就很明显不会产生太大影响。这项技巧需要你在明白不良项目到底是什么样之前
就做过很多不良项目。因此不要花费太多时间在辨别不良项目上。

在你职业生涯的某个时候，你会有良好的直觉。

3. 避免开会

无论你是软件工程师还是数据科学家，开会都是必须的，因为你需要能够与项目经理，最终用户和客户商议同一件事。但是
会议也有可能突然占据你的整个行程。这就是为什么学会如何避免不必要的会议是很重要的。或许更好的说法是管理而不是避免。
这里的目标是确保你花费在会议上的时间能够驱动决策并且帮助团队前进。

最简单的方法是每天安排一个两小时的固定会议。通常情况下大多数会在他们觉得有益的时候召开一次定期会议。他们会利用这个时间
来赶上开发工作。

另一种避免会议以便完成工作的方式是在其他人之前出现。就个人研二，我们喜欢早点来，因为通常来说，办公室是安静的。
大多数像你一样早来的人只是希望在没人烦你的时候完成工作。

这对个人贡献者而言是很重要的，因为我们的工作需要时间专注并且不跟其他人说话。是的，有时候你可能会想和其他人一起解决问题。
但是一旦你克服了阻塞问题，你只需要编码。它是关于一个区域，在这个区域里你会对你正在做的工作在你的头脑中产生源源不断的复杂的想法。
如果你停止了，你就很难再从你停止的地方捡起来。

4. GitHub...等不了吗？

很多计算机专业的学生在他们成为学生起就使用Git，他们了解每一个命令，参数，并能在专业人士周围打转（我觉得是离专业人士很近了）。
其他人在他们一开始工作的时候才开始接触Git，对他们而言，Git是地狱般的风景，由于他们混乱的命令和进程。
他们不会100%确定他们在做什么（这也是备忘录受欢迎的原因）。

无论你们公司使用的是什么仓库系统，如果能正确使用，系统就是有帮助的，不能合理使用系统就会成为阻碍。一个简单的push或commit不需要太多时间就能
让你花费数小时来解开由多个分支和分支组成的大杂烩。另外，如果你忘记拉取仓库的最新版本，你将需要解决合并从未有过的冲突。

如果你需要记录git命令到备忘录上，那就去做，这会使你的生活变得简单。

5. 编写简答可维护的代码

年轻工程师可能会有的一个倾向就是他们会想要在一种解决方案中实现他们所知道的一切事情。你需要了解面向对象编程，数据结构，设计模式和新技术，
并在你编写的每一段代码中用到它。你创造了一种不必要的复杂性，因为你过度依赖于你过去使用的解决方案或者设计模式。

在复杂的设计层面和简单的代码之间应该有一种平衡，设计模式和面向对象的编程旨在简化计划中的代码。然而，越多的程序被抽象，封装，黑盒，越难以调试。

6. 学会说不并分清轻重缓急

这确实是对所有角色有用，无论你是金融分析师还是软件工程师。但是特别的，技术角色似乎让每个人都需要一些东西。
如果你是一位数据工程师，你可能会被要求做的不仅仅是开发工作。一些团队需要数据提取，其他团队需要仪表盘，还有一些团队需要为他们的数据科学家提供
新的管道。

现在，分清主次和说不可能确实是两项不同的技能，但是他们是紧密交织的。分清主次意味着你仅需要花费时间在公司有重大影响的事情上。而说不仅以为这避免需要由
不同团队解决的工作。对于所有角色来说他们通常是同时发生的。

这可能是很难掌握的一项技能，因为它很容易接受你提出的每一项请求。尤其是你刚从大学毕业。你不想让任何人失望，你总会有很多事要做。

在大公司里总会有无尽的工作量，关键是只做能做的事。

有很多技能没有在面试中测试过甚至大学里没有教过。通常，这是由于环境的限制，而不是缺乏将学生暴露于实际开发中已存在的问题的愿景。

7. 操作设计思维

一项很难再面试中测试并且在大学课程中很难复制的技能是思考最终用户会如何不正确的使用你的软件。我们通常将其称为思考操作场景。

然而这只是一种对于你伪造证据代码的礼貌的说法。

例如，由于大部分编程都是维护性的，因此通常意味着更改与其他代码高度纠结的代码。
即使是一个简单的更改也需要跟踪对象、方法和/或API的所有可能引用。
否则很容易意外的破坏你没有意识到是连接的模块。即使你只是在修改数据库的数据类型。

也包括在开发之前考虑边界情况以及完整的顶层设计。

在开发新的模块或者微服务时的一些更复杂的情况，花费时间去思考你正在构建的操作场景是很重要的。思考将来用户会如何需要你的新模块，他们会如何不正确的使用它，
哪些参数是需要的，将来程序员是否有不同的方式使用你的代码。

简化代码与程序只是问题的一部分。创造出在你的机器上运行良好的软件是很容易的。但是有很多部署代码的方式可以产生错误。一旦投入生产，很难说哪些代码会被使用以及哪些会与你的原始代码关联。
从现在之后的五年，未来的程序员可能会因为你代码的局限性而感到沮丧。


*这篇文章读的我很累了，不过确实很有用，有一点我觉得说的很对，在我们对基础掌握不牢或者运用不熟练的时候我们总想把我们知道的所有的东西用在一个解决方案里，这可能会使得代码变的复杂而不可维护*
# Tips
刚刚学到的，GitHub上fork的用法，可以将他人仓库的项目复制到自己的仓库，这样push的时候就只是提交到自己的仓库中而不必担心会修改原作者的项目。
# Share
想分享一个前端面试题库的小程序，叫高级前端面试。