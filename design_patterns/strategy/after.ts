// 使用策略模式

// 基类
// 使用 template method 模式构建算法结构
abstract class TaxStrategy {
  abstract calculate();
}

// 工厂
class StrategyFactory {
  newStrategy() {
    //生成 税法对象
    return;
  }
}

class CN_Tax extends TaxStrategy {
  calculate() {
    // doSomething
  }
}
class US_Tax extends TaxStrategy {
  calculate() {
    // doSomething
  }
}
class DE_Tax extends TaxStrategy {
  calculate() {
    //doSomething
  }
}

// 实现法国税务，只需要新增一个类继承基类即可
class FR_Tax extends TaxStrategy {
  calculate() {
    // doSomething
  }
}

class SalesOrder {
  private taxStrategy!: TaxStrategy;

  //创建的时候传入一个税务类，动态使用工厂生成对象
  constructor(strategy: TaxStrategy) {
    this.taxStrategy = strategy;
  }

  calculateTax() {
    return this.taxStrategy.calculate();
  }
}
