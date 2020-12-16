---
title: ARTS-第3周
---
# Algorithm
**Unique Morse Code Words**
唯一摩尔斯密码词，给定一组词，判断该组词翻译成摩尔斯密码之后有几个不同的词
>International Morse Code defines a standard encoding where each letter is mapped to a series of dots and dashes, as follows: "a" maps to ".-", "b" maps to "-...", "c" maps to "-.-.", and so on.
 >For convenience, the full table for the 26 letters of the English alphabet is given below:
> [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
 Now, given a list of words, each word can be written as a concatenation of the Morse code of each letter. For example, "cab" can be written as "-.-..--...", (which is the concatenation "-.-." + ".-" + "-..."). We'll call such a concatenation, the transformation of a word.
 Return the number of different transformations among all words we have. 
 >
>Example:
 Input: words = ["gin", "zen", "gig", "msg"]
 Output: 2
 Explanation:
 The transformation of each word is:
 "gin" -> "--...-."
 "zen" -> "--...-."
 "gig" -> "--...--."
 "msg" -> "--...--."
>
 >There are 2 different transformations, "--...-." and "--...--.".
 Note:
>
> The length of words will be at most 100.
 Each words[i] will have length in range [1, 12].
 words[i] will only consist of lowercase letters.
 
 思路：定义一个对象，字母为key，对应的摩尔斯代码为value，对于每一个单词，将其翻译成摩尔斯密码，然后对比有几个相同的摩尔斯密码
```avascript
 /**
 * @param {string[]} words
 * @return {number}
 */
const morseCodeMap = {
    a: ".-",
    b: "-...",
    c: "-.-.",
    d: "-..",
    e: ".",
    f: "..-.",
    g: "--.",
    h: "....",
    i: "..",
    j: ".---",
    k: "-.-",
    l: ".-..",
    m: "--",
    n: "-.",
    o: "---",
    p: ".--.",
    q: "--.-",
    r: ".-.",
    s: "...",
    t: "-",
    u: "..-",
    v: "...-",
    w: ".--",
    x: "-..-",
    y: "-.--",
    z: "--.."
};
var uniqueMorseRepresentations = function (words) {
    let differentMorseCode = words.reduce((pre, next)=>{
        let morseCode = translateWord(next);
        if(!pre.includes(morseCode)) {
            pre.push(morseCode);
        }
        return pre
    },[]);
    return differentMorseCode.length

};
function translateWord(word) {
    let morseCode = '';
    for (let i=0;i<word.length;i++){
        morseCode += morseCodeMap[word[i]]
    }
    return morseCode
}
```
 # Review
 地址[The Internet changes: HTTP/3 will not use TCP anymore](https://medium.com/drill/the-internet-changes-http-3-will-not-use-tcp-anymore-427e82eeadc0)

*这篇难度还可以，长度也刚刚好，选文章真的要选适合自己的。*

因特网的改变：HTTP/3将不再使用TCP协议

IETF透露，超文本传输协议HTTP的第三个正式版本将不再使用TCP协议，取而代之的是，它将运行在2012年由谷歌首次开发的QUIC协议上。

什么是QUIC？

快速UDP网络连接（QUIC），顾名思义，是基于多路UDP连接的传输层协议。事实上，QUIC将UDP上的TCP+TLS+SPDY结合使用，并相对于当前的TCP上的HTTP/2实现了一些增强。

从2016年IETF就一直致力于谷歌QUIC的标准化版本。最近，他们宣布将会在新的HTTP/3的版本中使用它。然而，QUIC的版本已经与原始的QUIC设计有很大不同。

由于TLS1.3的加密技术，QUIC协议旨在保持安全性的同时加速和简化连接。他们开发了一种对于连接建立和数据传输更高效的协议。据谷歌所言，QUIC握手在发送有效负载之前通常需要0往返，而TCP+TLS需要1-3次往返。事实上，第一次连接需要1次往返，之后需要0次往返。

此外，他对于数据包丢失的处理要比当前的TCP协议处理的好。每一个重传的数据包都消耗一个新的序列号，因此消除了歧义，并阻止了由RTO造成的损失。正如IETF的janaiyengar所说，QUIC不仅是对互联网传输层的重新定义，也是对传输权的重新定义。

现在，只有1.2%的顶级网站支持QUIC，但是它们都是高流量站点：几乎每一个谷歌服务都支持它们的QUIC协议。

QUIC是安全的吗？

QUIC的第一次开发包含他自己的加密技术。然而，这只是一种暂时的实现，注定会被由IETF描述的TLS1.3所取代。

事实上，QUIC的连接建立策略是基于加密和传输握手的结合。

>QUIC依赖于密码和传输握手的结合最小化连接建立延迟。

使用QUIC，每个东西都会被默认加密，但是，QUIC就像其他任何一种技术一样存在安全风险。

2015年 Robert Lychev and Samuel Jero 的工作报告了协议的几个弱点，QUIC性能可能会因为服务器配置重放共计等攻击而降低。然而，根据他们的安全模型和测试，数据的机密性和真实性似乎得到了适当的保护。

如果你想要了解更多的QUIC以及他是如何集成到下一版本的HTTP中，强烈建议你查阅谷歌官方文档以及IETF发布的草稿。你可以在参考文献里找到他们。

**创新是螺旋前进的，就像是个钻头。**
# Tips
无。
# Share
无。



