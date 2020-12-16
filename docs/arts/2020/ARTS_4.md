---
title: ARTS-第4周
---
**开始容易，坚持不易，愿你我都能坚持下去。**
# Algorithm
**Thousand Separator**
>Given an integer n, add a dot (".") as the thousands separator and return it in string format.
>Example 1:
 >Input: n = 987
 Output: "987"
 Example 2:
 Input: n = 1234
 Output: "1.234"
 Example 3:
 Input: n = 123456789
 Output: "123.456.789"
 Example 4:
 Input: n = 0
 Output: "0"
   Constraints:
 0 <= n < 2^31
 
 思路：转成字符串，每次从最后截取三位数字，当剩余位数小于等于3时停止，并拼接起来。
```javascript
 /**
 * @param {number} n
 * @return {string}
 */
var thousandSeparator = function(n) {
    let nStr = n.toString();
    if(nStr.length<=3) return n.toString();
    let rest = '';
    while (nStr.length>3){
        rest = '.'+ nStr.substr(nStr.length-3,3)+rest
        nStr = nStr.substring(0,nStr.length-3)
    }
    return nStr+rest
};
```
 # Review
 [Stop Using the Git CLI](https://medium.com/better-programming/stop-using-the-git-cli-d9cbee32cc27)

*这篇文章告诉我们使用Git GUI的好处，来看看吧*

**停止使用Git CLI**       
丢弃Git GUI的耻辱感，了解更多Git知识，再也不会偶然提交代码到主分支。

如果你是一位开发者，你可能会使用Git，如果你没有使用，那我希望你正在使用一种源代码版本库。

如果你正在使用Git，你要么使用CLI要么使用包装了功能的GUI。使用一种好的GUI是有利的。

**Oh，我的眼睛。。。**
使用GUI的第一个主要优点就是你可以使用图形用户界面——一种为你，开发者量身定制的真实的UI。开发者编写代码帮助其他开发者完成他们的工作。我不能夸大这一点。一旦你掌握了使用GUI的诀窍，你就可以用一种完全不同的方式查看你的代码库。

因此我将向你介绍我最爱的Git GUI，GitKraken:

如果你已经使用了Git一段时间，我希望这将取悦你的眼睛。你可以立刻并很容易的看到你的代码库中来自每一位成员的每一次提交。查看远程分支，合并记录以及标签。

这真是太漂亮了。有了这个视图，你可以很容易的看到变化。这意味着你可以很容易的看到一些错误的变化（比如提交到master分支上）。

这影响到了我的工作表现。在我公司，所有要合并到master的都是为了推出一个新版本的应用程序。突然，我们停止构建。QA将这一消息发布到公共频道上。我能够回退到我们最后一次构建的标签上并逐行快速点击每一次提交。定位到错误的提交是微不足道的。我打开快速公关并获得了我五分钟的声誉。但是这都要归功于GitKraken!

**不要弄混了你的命令**
我同样不会花费时间在打分支名以及记Git命令上，或者是记错他们。

使用GUI的另一个优点是很少出错。你可以很容易的看到你在哪个分支就像看那些提交了哪些没提交一样。你将会很小可能偶然提交到master分支上。我知道在CLI中快速执行一些命令是很有趣的，但每次输入的时候可能就会输错或者忘记你所在的分支。

**了解更多你的工具**
说到git，你最后一次实际去查阅或者阅读官方文档或者了解Git的新东西是什么时候？我几乎从来没有过。我仍然有学习一些东西，只是通过使用GitKraken.例如，只是右键提交：（假装有图片）

![在这里插入图片描述](https://img-blog.csdnimg.cn/20200828174036245.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM4NDA5MjY0,size_16,color_FFFFFF,t_70#pic_center)
你知道这里的每一个简单的选项是什么吗？你知道这里的Git能做到哪些吗？Git是非常强大的工具，有很多的使用方法。但是当你使用CLI的时候，你只能了解到很少的你知道的命令（commit，push，branch）而不知道Git真正能提供什么。

或许Git的微妙之处并不是如此清晰：
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200828174502153.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM4NDA5MjY0,size_16,color_FFFFFF,t_70#pic_center)
UI向你展示了从远程仓库获取代码的不同方式。在这里，你可以很容易的谷歌到这些不同的pull方式。我从不知道这些指令的存在。如果你很好奇，可以查看[文档](https://git-scm.com/docs/git-pull)

真正知道了git的工作原理之后，我可以筛选合并，制作demo分支，合并他们，很容易的并行化我的工作而不用担心产生混乱。

**羞耻**
我希望你能倾向于使用Git GUI。如果你读过这篇文章，你可能会对转换持开放态度，但很多人不会。
出于某种原因，使用git是一种耻辱，它不够酷。我们都想要成为下一代黑客，诚实的说，这是我们从事这项工作的部分原因。

但是这不是限制自己的有效原因。这几乎类似于坚持使用一种旧的编程语言仅仅是因为你对他感到舒服，好的工程师不会如此。

我想人们轻视GUI的使用并视他为拐杖。专业人员使用CLI，好吧，专业人士不会犯错，这无疑是GUI最大的优点。（*有点不太懂其实*）

在某些方面，更好的掌握Git的使用比学习一门新的语言更重要，因为源代码控制是一项开发技能-无关语言。

不要有同侪压力或者有很强的的羞耻感，使用GUI是OK的，使用CLI也是OK的。承认你喜欢CLI，因为它很有趣。

感谢阅读。

（*我发现词汇量是硬伤啊*）
# Tips
无。。。==！
# Share
无。。。==！



