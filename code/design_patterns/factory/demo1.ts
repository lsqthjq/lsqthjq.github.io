// 一个对象的类型，应该声明成抽象的接口或类，以应对未来的变化

abstract class SplitterFactory {
  abstract createSplitter(): ISplitter;
}

interface ISplitter {
  split(): void;
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
  factory: SplitterFactory;

  button_click() {
    // 面向接口编程，显著特征变量声明成接口、基类
    // 违背依赖倒置，new 实现细节
    const splitter: ISplitter = this.factory.createSplitter();
    splitter.split();
  }
}
