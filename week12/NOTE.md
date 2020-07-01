# 每周总结可以写在这里


## 用LL算法做语法分析


* 使用正则做词法分析，步骤：
1. 用正则匹配所有的token
2. 判断token的类型
3. 生成token

* 根据产生式做语法分析
```
<AdditiveExpression> ::=
	<Number>
	| <MultiplicativeExpression><*><Number>
	| <MultiplicativeExpresssion></><Number>
	| <AdditiveExpression><+> <MultiplcativeExpression>
	| <AdditiveExpression><-> <MultiplcativeExpression>
```


## 字符串分析算法

* 字典树
> 大量字符串的完整模式匹配  
* KMP
> 长字符串中找子字符串O(m+n)  
* WildCard 通配符算法
> 长字符串中找子字符串升级版  
* 正则：
> 字符串匹配的通用模式  
* 状态机：
> 通用的字符串分析  
* LL LR：
> 字符串多层级结构分析  

### 字典树：

* 又名Trie 
* 可以在多个字符串中找出现最多的字符串。
* 或者找前n大的数字（不同位数的数字在前面补0）
* 性能高，时间复杂度是O(n)
* 关键点：
> 用一个树结构去存储所有的数据  

### 括号匹配：

* 这是LR的雏形
* 关键点：
> 用stack来做括号匹配  

### KMP

* 时间复杂度是M+N
* 关键点：
> 用一个table来记录回溯的位置  

### wildcard

* *表示匹配任意数量的字符串
* ?表示匹配任意个字符
* 关键点：
> 找出*中间的subPattern，然后按顺序用正则去匹配source，如果全部都匹配出来，表示匹配成功。  
> ？在正则中使用[\\s\\S]替代  

