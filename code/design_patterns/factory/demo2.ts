// 一个对象的类型，应该声明成抽象的接口或类，以应对未来的变化

namespace Factory_demo2 {
  interface ISplitter {
    split(): void;
  }

  // 抽象工厂
  abstract class SplitterFactory {
    // 使用抽象类，将编译时绑定转为运行时绑定
    abstract createSplitter(): ISplitter;
  }

  // 具体工厂
  class BianrySplitterFactory extends SplitterFactory {
    createSplitter() {
      return new BianrySplitter();
    }
  }
  class TxtSplitterFactory extends SplitterFactory {
    createSplitter() {
      return new TxtSplitter();
    }
  }
  class PictureSplitterFactory extends SplitterFactory {
    createSplitter() {
      return new PictureSplitter();
    }
  }

  class BianrySplitter implements ISplitter {
    split() {
      // do something
    }
  }
  class TxtSplitter implements ISplitter {
    split() {
      // do something
    }
  }
  class PictureSplitter implements ISplitter {
    split() {
      // do something
    }
  }

  class App {
    // 使用抽象工厂，解除耦合关系
    factory: SplitterFactory;

    // 未来传入具体factory
    // 未来创建对象的地方会有依赖，但是在这里，已经解决了依赖关系。
    // 松耦合并不是消灭依赖（变化），而是将其（变化）赶到一个局部的地方
    constructor(factory: SplitterFactory) {
      this.factory = factory;
    }

    button_click() {
      // 面向接口编程，显著特征变量声明成接口、基类
      // 违背依赖倒置，new 实现细节
      const splitter: ISplitter = this.factory.createSplitter(); // 可以看成一个多态的new
      splitter.split();
    }
  }
}
