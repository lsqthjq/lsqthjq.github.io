// 税法计算
// 不同国家，不同计算方法

enum TaxBase {
  CN_Tax,
  US_Tax,
  DE_Tax,
  // 如果要加个法国
  FR_Tax // 更改  违背了开闭原则
}

class SaleOrder {
  calucateTax(country: TaxBase) {
    switch (country) {
      case TaxBase.CN_Tax:
        //doSomething;
        break;
      case TaxBase.US_Tax:
        //doSomething;
        break;
      case TaxBase.DE_Tax:
        //doSomething;
        break;
      case TaxBase.FR_Tax: // 更改 违背了开闭原则，修改代码容易造成bug
        //doSomething;
        break;
    }
  }
}

// 不要静态的看程序设计，要有时间轴的概念，考虑到未来的一些变化
