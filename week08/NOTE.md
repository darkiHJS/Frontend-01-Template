# 每周总结可以写在这里
## CSS分类

1. 简单选择器；
  * 全体选择器（*）
  * 类型选择器 （div svg｜a）
    我们若要想区分选择 svg 中的 a 和 HTML 中的 a，就必须用带命名空间的类型选择器 |
    ```
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>JS Bin</title>
    </head>
    <body>
    <svg width="100" height="28" viewBox="0 0 100 28" version="1.1"
        xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <desc>Example link01 - a link on an ellipse
      </desc>
      <a xlink:href="http://www.w3.org">
        <text y="100%">name</text>
      </a>
    </svg>
    <br/>
    <a href="javascript:void 0;">name</a>
    </body>
    </html>

    @namespace svg url(http://www.w3.org/2000/svg);
    @namespace html url(http://www.w3.org/1999/xhtml);
    svg|a {
      stroke:blue;
      stroke-width:1;
    }

    html|a {
      font-size:40px
    }
    ```
    
  * class选择器（.cls） 
  * id选择器（#id）
  * 属性选择器（[attr=name]）
    * [att] （直接在方括号中放入属性名，是检查元素是否具有这个属性，只要元素有这个属性，不论属性是什么值，都可以被选中）
    * [att=val] （精确匹配，检查一个元素属性的值是否是 val）
    * [att~=val] （多种匹配，检查一个元素的值是否是若干值之一，这里的 val 不是一个单一的值了，可以是用空格分隔的一个序列）
    * [att|=val] （开头匹配，检查一个元素的值是否是以 val 开头，它跟精确匹配的区别是属性只要以 val 开头即可，后面内容不管）
  * 伪类选择器
    * 树结构关系伪类选择器（:root、:empty、:nth-child等）
    * 链接与行为伪类选择器（:any-link、:link、:hover、:active等）
    * 逻辑伪类选择器（:not）
    * 其它伪类选择器

2. 复合选择器；
  * <简单选择器><简单选择器><简单选择器>
  * *或者div必须写在最前面
3. 复杂选择器；
  * <复合选择器><sp><复合选择器>
    * 子孙及后代，表示选中所有符合条件的后代节点
  * <复合选择器>">"<复合选择器>
    * 子选择器，只能选择子一级
  * <复合选择器>"~"<复合选择器>
    * 后继，表示选中所有符合条件的后继节点，后继节点即跟当前节点具有同一个父元素，并出现在它之后的节点
  * <复合选择器>"+"<复合选择器>
    * 直接后继，表示选中符合条件的直接后继节点，直接后继节点即 nextSlibling
  * <复合选择器>"||"<复合选择器>
    * selectors-4语法
    * 列选择器（table），表示选中对应列中符合条件的单元格

4. 选择器列表；
  * 以 comma 分隔的复杂选择器序列

## 选择器优先级

样式优先级规则： [行内, id, class, 标签]

#### 请写出下面选择器的优先级

1. div#a.b .c[id=x] //[0,1,3,1]
2. #a:not(#b) //[0,2,0,0]
3. *.a // [0,0,1,0]
4. div.a // [0,0,1,1]

注意：
1. :not、* 不参与specificity计算；
2. [id=x]类似于.x;

参考标准：
* [图解css specificity](http://www.standardista.com/css3/css-specificity/）
* [w3c css specificity](https://www.w3.org/TR/2018/WD-selectors-4-20181121/#specificity-rules）
* [MDN css specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity）

