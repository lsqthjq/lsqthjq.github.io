---
layout: post
title: Markdown 基本语法
tags: 
- markdown
---

# Markdown 基本语法

<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [Markdown 基本语法](#markdown-基本语法)
  - [区块元素](#区块元素)
    - [段落](#段落)
    - [换行](#换行)
    - [区块引用](#区块引用)
    - [列表](#列表)
    - [代码区块](#代码区块)
    - [分割线](#分割线)
  - [区段元素](#区段元素)
    - [链接](#链接)
    - [强调](#强调)
    - [代码](#代码)
    - [图片](#图片)
  - [其它](#其它)
    - [反斜杠](#反斜杠)
    - [自动链接](#自动链接)

<!-- /code_chunk_output -->

> 可以使用html元素 \^_\^  


## 区块元素

### 段落

  由一个或多个连续的文本行组成，它的前后要有一个以上的空行。否则或被转换到一个连续文本行上。
  
### 换行

  两个空格加回车。  
  比如这样。

      两个空格加回车。··回车
      比如这样。
  
- 标题
  支持两种标题的语法
  
  1. 类Setext形式，采用底线的形式，利用 = （最高阶标题） 和 - （第二阶标题），任意数量都有效。比如：
  
          This is an H1
          =============

          This is an H2
          -------------

  2. 类Atx形式 使用 1~6个 # 号表示 H1 ~ H6。比如：
  
          # H1

          ## H2

          ### H3

  H1有的地方显示会有下划线。

### 区块引用
  
  在每行的最前端加上 > ，或是偷懒在段落前加一个 >;
  
      > This is a blockquote;
      > hhhhhhhhh
  
  > This is a blockquote;
  > hhhhhhhhh

      > This is a blockquote;
      hhhhhhhhh

  > This is a blockquote;
  hhhhhhhhh

  也可以嵌套使用

      > This is a blockquote;
      > > hhhhhhhhh
  
  > This is a blockquote;
  > > hhhhhhhhh

  内部可以使用其它Markdown语法

### 列表
  
  Markdown 支持无序列表和有序列表  
  无序列表使用 * 、 + 、 - 号作为列表标记

      * red
      * green
      * blue

  等同

      + red
      + green
      + blue

  等同

      - red
      - green
      - blue

  - red
  - green
  - blue

  有序列表使用 数字，可以不在意数字的顺序。

      1. red
      2. green
      3. blue

  1. red
  2. green
  3. blue

  > vscode 解析有序列表从第一个数字起递增，其它的不知道怎么样
  > 行首出现 数字 + . , 使用反斜杠 ``` 1999\. ```

  多级列表，使用 tab 或 4个空格

        - 1
          - 2

  - 1
    - 2

  列表项目可以包含多个多端，每个项目下的段落都需要由相应的缩进

      - ha

        hi
      
      - foo

  - ha

    hi

  - foo

### 代码区块
  
  使用简单的缩进4个空格或是1个制表符

      代码

          code;

### 分割线
  
  使用三个以上的 * 、 - 、 _ 来建立一个分割线，可以在星号或减号中加空格，行内不能有其它东西

      * * *

      ***

      - - -

      ---

      ————————

## 区段元素

### 链接
  
  支持两种链接形式，行内式和参考式  
  不管哪一种，链接文字都是用 [方括号] 来标记

  **行内式**,在方括号后紧跟圆括号并插入网址即可。

      This is a [link](http://example.com/ "Title")

  This is a [link](http://www.bing.com/ "bing")

  **参考式**，在链接文字的方括号之后再加上另一个方括号，里面填上一个标记，另外可以在任意处，将这个标记的链接内容定义出来。

      This is a [link][bing]

      This is a [bing][]  隐式

      [bing]: http://www.bing.com/ "bing"

  This is a [link][bing]

  [bing]: http://www.bing.com/ "bing"

  > 支持完整链接或相对路径

### 强调
  
  使用 * 和 _ 作为标记强调的符号, 一个转换为斜体 两个为加粗  

      *foo*

      _bar_

      **strong**

      __strong__
  
   *foo*

    _bar_

    **strong**

    __strong__

    > 和文本之间不能有空白

### 代码
  
  在行内标记代码可以使用 \` \` 将它包起来。

      this is a ` code `

  this is a ` code `

  > 如果要在内部使用 \`, 前后使用两个 \`

  > 三个\` + 换行 会形成代码块,

      ```
      foo
      ```

### 图片

  和链接一样，有行内式和参考式

  行内式

      ![Alt text](link)

  ![shuaiqi](/assets/image/4b869db11ec66d6fe7cf946f5aad912e.gif)

  参考式

      ![Alt text][id]

      [id]: link title

  ![Alt text][img_ref]

  [img_ref]: /assets/image/4b869db11ec66d6fe7cf946f5aad912e.gif

  > 无法指定宽高，可以使用img

  <img src="/assets/image/4b869db11ec66d6fe7cf946f5aad912e.gif" style="width:45px">

## 其它

### 反斜杠
  
  查看原滋原味的内容

### 自动链接

  自动转换链接

      <htttp://www.bing.com>

  <htttp://www.bing.com>

> [返回首页](/index.html)