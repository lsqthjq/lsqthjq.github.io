# 设计模式基本原则

> 设计模式学习笔记 - 1 [23个设计模式-设计模式简介](https://www.bilibili.com/video/BV1kW411P7KS?p=2)

[TOC]

## 变化与复用

设计模式很大程度上是为了设计可==复用==的解决方案。可复用的前提是问题具有某些相同的性质，如果每个问题都完全不一样，也无需设计模式了。虽然问题具有相同的性质，然而问题之间还是有许多的不同，这些不同就是问题的==变化==，而这些变化也就大大的阻碍了复用的实现。

面向对象在上一节也说到，其长处就是==处理变化==。由此可知使用面向对象是实现复用，实现设计模式的非常重要的手段。

## 深入理解面向对象

上一节提到面向对象，向下有封装、继承、多态的特性，向上有抽象的机制。这里再从其它方面认识面向对象

- 理解隔离==变化==
  - 面向对象的长处是处理变化，具体就是将变化的事物抽象出稳定的结构，封装起来。这样就可以将变化隔离，单独处理而不会影响稳定。
- 各司其职
  - 面向对象一个很重要的概念就是责任
  - 从微观层面来看，面向对象更强调每个类的责任，谁能干什么
  - 新增一个类，不应该影响原有类的责任，大家各干各的
  - 通过组合实现更强大的功能
- 对象是什么
  - 语言层面，对象封装了代码和数据
  - 规格层面，对象是一系列可被使用的公共接口
    - 不是很理解什么是规格层面
    - 就从职责来说，我们更加关心的是这个对象能干什么，而不是它是什么类。能干什么 = 接口
  - 概念层面
    - 对象是拥有某种责任的抽象
    - 对象是类的实例
      - 类封装了代码
      - 对象封装了代码和数据

## 设计原则

> 理解设计原则才能更好的理解设计模式，甚至自行开发设计模式。违背了设计原则的，一般都不是好的设计模式

### 依赖倒置原则 DIP

- 高层模块（==稳定==）不应该依赖于底层模块（==变化==），二者都应该依赖于抽象（==稳定==）
- 抽象（==稳定==）不应该依赖于实现细节（==变化==），实现细节应该依赖于抽象（==稳定==）
  - 抽象中不应该去实现具体的细节，交由继承抽象的子类去实现。
  - 如果实现了，子类需要保证父类的可[替换](#LSP)
    - 不能替换的话，谁知道你是不是我崽
- 例子
  - paint =>依赖=> (line， rect...)
    - 此处paint是高层模块
    - line、rect...是底层模块，是不固定的，明天可能就画圆了
  - paint =>依赖=> shape， （line, rect） => shape
    - shape是图形的抽象
    - paint依赖shape，无需知道是什么图形
    - 图形依赖shape，如果有新的图形，实现shape的抽象即可使用
    - 此处稳定 和 变化就被shape隔离了

### 开放封闭原则 OCP

- 对于一个已经实现好的类，应该对拓展开放，而对更改封闭
  - 如果直接更改
    - 破坏了封装
    - 不能保证子类、对象的正常运行
- 类模块应该是可拓展的，但是不可修改
- 比如：家具厂生产的一块板子，现在需要添加防火功能
  - 一种，拆掉板子，加入防火材料重新生产
  - 一种，在板子表面涂上防火涂层

### 单一职责原则 SPR

- 一个类应该只有一个引起它变化的原因
- 变化的方向应该隐含有类的责任
- 一个类只做某一方面的事情
  - 一个接口只干一件事情

### 里氏（Lisjov）替换原则 LSP {#LSP}

子类必须可以替换基类存在的位置

如果不能换，你到底是不是我崽
我把我的绝世秘籍传给了你，你却不会，那你干嘛拜我为师

经常出现子类在父类的方法中抛出了新的异常，导致替换之后无法处理

### 接口隔离原则 ISP

- 不应该强迫用户依赖他们不用的方法
- 能干的事情，自己干掉
- 接口应该小而完备
- 能不暴露就不暴露

### 优先使用对象组合，而不是继承

- 继承是 白箱复用，会破坏封装性（子类可以修改父类继承的属性，方法）
  - 父子耦合度高
  - 应该是类属关系
    - 属于某某类，具有共同的功能或属性
- 组合是 黑箱复用，只使用器提供的接口实现功能，不会破坏封装
  - 只要求组合的对象由良好定义的接口，耦合度低
  - 三个人一起做饭，我会吃，那就好好吃，有个人不来了，再找个会做的来。

### 封装变化点

使用封装来隔离变化和稳定，只在一边处理而不会影响另一边

### 针对接口编程，而不是针对实现编程

- 不讲变量类型申明为某个特定的具体类，而是声明为某个接口
- 客户程序无需知道具体的类，只要知道有什么接口
- 减少系统中各部分的依赖关系，从而事项 高内聚，低耦合 的设计方案
- 接口标准化
  - 分工协作
  - 提高复用性
  - 公司统一语言、框架
  - 秦始皇统一度量衡
  - 毕升活字印刷

### 设计原则提升为设计经验

- 设计习语 design idioms
  - 描述与特定编程语言相关的底层模型、技巧、惯用法
- 设计模式 design patterns
  - 主要描述的是 类和相互通信的对象之间的组织关系，包括他们的角色、职责、协作方式等方面
- 架构模式 architectural patterns
  - 描述系统中与基本结构组织关系密切的高层模型，包括子系统划分，职责，以及如何组织它们之间的关系的规则  

[TOP](#title-home) 跳转标题

> [返回首页](/index.html)