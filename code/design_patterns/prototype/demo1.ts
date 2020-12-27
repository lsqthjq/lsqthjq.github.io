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

const app = new Prototype_demo1.App(new Prototype_demo1.BianrySplitter());
app.button_click();
