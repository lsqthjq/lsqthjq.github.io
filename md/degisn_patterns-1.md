# 什么是设计模式

> 设计模式学习笔记 - 1 [23个设计模式-设计模式简介](https://www.bilibili.com/video/BV1kW411P7KS?p=1)

每一个模式描述了在我们周围不断重复发生的问题以及该问题的解决方案的核心。这样你就能一次又一次的使用该方案而不必做复劳动。  --- Christopher Alexander

[TOC]

## 可复用面向对象的基础
- 可复用是设计模式的目标
- 面向对象是来实现的方法
- 通常所说的设计模式隐含的表示“面向对象设计模式”，但并不意味着设计模式就等于“面向对象设计模式”
  
# 什么是面向对象

## 两种思维方式

- 底层思维：向下，如何把握机器底层，从微观理解对象构造。理解代码运行机制，提高性能。
  - 语言构造
  - 编译转换
  - 内存模型
  - 运行时机制
- 抽象思维：向上，如何将现实世界抽象为程序代码。帮助管理代码复杂度。
  - 面向对象
  - 组件封装
  - 设计模式
  - 架构模式
  
## 深入理解面向对象

- 向下：面向对象三大机制
  - 封装，隐藏内部实现
  - 继承，复用现用代码
  - 多态，改写对象行为（js 无法实现传统意义上的多态。只能通过判断参数个数或类型，执行不同的操作，只是一个函数）
- 向上：理解面向对象的抽象意义，理解使用这些机制来表达现实世界。掌握什么是“好的面向对象设计”；

## 软件设计固有的复杂性

软件用户经常会在不仔细思考情况下去实现类似：给100层大厦加装一个地下室 的功能。

## 解决复杂性

### 分解

- 分而治之，将大问题分解成小问题，将复杂问题分解为多个简单问题
- 在不确定中将某些确定的部分分离出来，然后对这些确定的部分先提供解决办法，而不确定的部分留到具体问题明确（新需求）的时候解决 [^1]
- 局部化确定部分
- 各种类库

例：使用鼠标画一个正方形、一条线、一个圆。
正方形：画四条线
线：画两个点连起来
圆：由圆心和半径表示
点：基本

> 把画图形分解为，画点、画线、画圆等等等

```ts
/* 实现绘制图形 */

/* 分解 */

/* 图形类别 */
enum EShapeType {
  POINT,
  LINE,
  RECT,
  CIRCLE
}

/* 点类 */
class Point {
  x: number;
  y: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
 
}

/* 线类 */
class Line {
  pointStart: Point;
  pointEnd: Point;

  constructor(pointStart: Point, pointEnd: Point) {
    this.pointStart = pointStart;
    this.pointEnd = pointEnd;
  }
  
}

/* 矩形类 */
class Rect {
  lineLeft: Line;
  lineRight: Line;
  lineTop: Line;
  lineBottom: Line;

  constructor(lineLeft: Line, lineRight: Line, lineTop: Line, lineBottom: Line) {
    this.lineLeft = lineLeft;
    this.lineRight = lineRight;
    this.lineTop = lineTop;
    this.lineBottom = lineBottom;
  }
  
}

/* 圆类 */
class Circle {
  point: Point;
  r: number;

  constructor(point: Point, r: number) {
    this.point = point;
    this.r = r;
  }
  
}

/* 绘制方法 */
class Paint{
  type:EShapeType;

  constructor(type:EShapeType) {
    this.type = type;
  }

  function draw(...rest: any[]) {
    switch (this.type) {
      case EShapeType.POINT:
        /* 传入数据，绘制 */
        break;
      case EShapeType.LINE:
        /* 传入数据，绘制 */
        /* 先画点再画线 */
        break;
      case EShapeType.RECT:
        /* 传入数据，绘制 */
        /* 先点再线再面 */
        break;
      case EShapeType.CIRCLE:
        /* 传入数据，绘制 */
        /* 圆 */
        break;
      default:
        break;
    }
  }
}

/* 执行 */
(new Paint(EShapeType.POINT))draw(data);

// 确定部分，如何画点、线、圆、矩形
// 变化部分，要画什么，如何画其它东西

// 把画图形分解为，画点、画线、画圆等等等
// 也可以把绘制方法定义在各个类里
// Paint.draw 可以不关心对象是谁，但是无法保证能画
```

- 优点
  - 直观
  - 自上至下，一步一步来
  - 实现容易
- 缺点
  - draw 方法需要去判断各种不同的形状
  - draw方法固定
  - 新建图形类型，需要改变大量代码
  - 不适应变化和拓展
  - 不容易复用

### 抽象

- 人们处理复杂性有一个通用的技术，抽象。由于不能掌握全部的复杂对象，我们选择忽略他的非本质细节，而去处理泛化和理想的对象模型。
- 分析不确定的情况的时候，概括出他们之间的本质特性，这种本质特性就是抽象层次。[^1]
- 各种框架

例：使用鼠标画一个正方形、一条线、一个圆。
新建一个shape类，定义draw抽象方法。
定义点、线、正方形、圆，继承shape，实现各自的draw方法
用户选择形状
传入要画的形状的对象，执行该对象的draw方法（多态调用）。

> 抽象出图形这一概念

```ts
/* 实现绘制图形 */

/* 抽象 */

/* 图形类别 */
enum EShapeType {
  POINT,
  LINE,
  RECT,
  CIRCLE
}

/* 图形基类 */
abstract class Shape {
  abstract draw();
}

/* 点类 */
class Point extends Shape {
  x: number;
  y: number;
  constructor(x: number, y: number) {
    super();
    this.x = x;
    this.y = y;
  }

  draw() {
    // doSomething;
  }
}

/* 线类 */
class Line extends Shape {
  pointStart: Point;
  pointEnd: Point;

  constructor(pointStart: Point, pointEnd: Point) {
    super();
    this.pointStart = pointStart;
    this.pointEnd = pointEnd;
  }
  draw() {
    // doSomething;
  }
}

/* 
  矩形类
 */
class Rect extends Shape {
  lineLeft: Line;
  lineRight: Line;
  lineTop: Line;
  lineBottom: Line;

  constructor(lineLeft: Line, lineRight: Line, lineTop: Line, lineBottom: Line) {
    super();
    this.lineLeft = lineLeft;
    this.lineRight = lineRight;
    this.lineTop = lineTop;
    this.lineBottom = lineBottom;
  }
  draw() {
    // doSomething;
  }
}

/* 圆类 */
class Circle extends Shape {
  point: Point;
  r: number;

  constructor(point: Point, r: number) {
    super();
    this.point = point;
    this.r = r;
  }
  draw() {
    // doSomething;
  }
}

/* 绘制方法 */
class Paint {
  draw(shape: Shape) {
    shape.draw();
  }
}


/* 执行 */
  (new Paint()).draw(new Point(1,2));

// 变化，要画什么，如何画
// 本质，都是图形，都有绘制方法。
// 绘制方法无需关心画什么
```

- 优点
  - 无需关心传入的是什么类型，只要其是shape的子类，实现了draw方法
  - 新增类型无需修改绘制方法
  - 适应变化和拓展
  - 容易复用
- 缺点
  - 理解复杂

> 两种都能解决问题，使用的时候考虑具体情况。

> 这两种方法各有优缺点，分解方法的优点是它的灵活性，因为它处理的是部分确定性，而对整体的不确定性没有作任何假设，缺点是留下的具体问题太多；抽象的方法优点是解决了整体的抽象部分，因而后面需要处理的只是差异部分，缺点是要求抽象的模型必须准确，如果出现实际问题和抽象模型不匹配的话，抽象的方法就难以处理这类问题，因而存在一定的扩展性风险。[^1]

## 面向对象和面向过程 [^2]

- 面向对象是软件开发方法
  - 谁能做什么
- 面向过程是一种以过程为中心的编程思想
  - 先做什么再做什么


[^1]: [分解和抽象](https://blog.csdn.net/lbdz/article/details/1408173)
[^2]: [面向对象和面向过程](https://www.zhihu.com/question/28790424?sort=created)


> [返回首页](/index.html):rocket: