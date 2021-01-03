---
layout: post
title: '原型模式 Prototype'
tags:
    - 设计模式
---  
  
  
#  原型模式 Prototype
  
- [原型模式 Prototype](#原型模式 Prototype )
  - [示例](#示例 )
  - [动机&意图](#动机意图 )
  - [类别](#类别 )
  - [结构](#结构 )
  - [总结](#总结 )
  
##  示例
  
~~~ts
// 一个对象的类型，应该声明成抽象的接口或类，以应对未来的变化
  
namespace Prototype_demo1 {
  // 抽象接口
  // interface ISplitter {
  //   split(): void;
  // }
  
  // // 抽象工厂
  // abstract class SplitterFactory {
  //   // 使用抽象类，将编译时绑定转为运行时绑定
  //   abstract createSplitter(): ISplitter;
  // }
  
  // 抽象工厂的 基类 和 工厂类 和二为一
  /**
   * 当对象的创建过于复杂时
   * 对象的状态负责
   * 对象状态需要保留
   * 原型对象，只需要实现一次，就可以直接clone使用，可以保存之前的状态
   */
  
  abstract class ISplitter {
    abstract split(): void;
  
    // 改名为clone
    // 是一种特殊的 创建
    // 深拷贝，不能是浅拷贝
    abstract clone(): ISplitter;
  }
  
  export class BianrySplitter extends ISplitter {
    split() {
      // do something
    }
  
    clone() {
      return new BianrySplitter();
    }
  }
  
  export class App {
    prototype: ISplitter;
  
    constructor(prototype: ISplitter) {
      this.prototype = prototype;
    }
  
    // 点击一次，就创建一个对象。
    button_click() {
      // 原型对象不是供使用的，而是用来clone的。
      const splitter: ISplitter = this.prototype.clone();
      console.log(splitter);
      splitter.split();
    }
  }
}
  
// 声明一个应用并注入一个原型对象。
const app = new Prototype_demo1.App(new Prototype_demo1.BianrySplitter());
app.button_click();
~~~
  
##  动机&意图
  
  
软件系统中，经常会面临“某些复杂对象创建”的问题。当发生需求变动时，这些对象也会有剧烈的变化，但是其始终拥有**比较稳定的接口**。
如何应对这种变化？如何想客户程序（使用这些对象的程序）**隔离出这些易变的对象**，从而使得依赖这些易变对象的客户程序不随着需求改变而改变。
  
不同于工厂模式，原型模式通过拷贝原型来创建新的对象，这使的新对象的创建可以绕过复杂的创建过程，同时可以保留对象的状态。
  
- 隔离创建与使用
- 使用与
  - 对象创建复杂
  - 对象状态复杂
  - 对象状态需要保留
  
##  类别
  
  
- 对象创建模式
  
##  结构
  
  
![img](/assets/image/design-pattern/10-1.png )
  
##  总结
  
  
- 原型模式同样适用于隔离对象的使用这是具体类型（**易变类**）之间的耦合关系，它同样要求这些易变类**有稳定的接口**。
- 原型模式使用**原型克隆**的方式来新建对象，这使得我们可以非常灵活的创建“拥有某些稳定接口”的新对象--所需工作仅仅是注册一个新类的对象（原型），然后在任何需要的地方克隆。
- 原型模式中的克隆方法可以利用某些框架中的序列化实现深拷贝
- 原型模式生成的对象同样支持拷贝
  