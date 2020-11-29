// 没有使用设计模式的代码

// 工具类，定义三个步骤
class Library {
  step1() {
    console.log("step1");
  }

  step3() {
    console.log("step3");
  }

  step5() {
    console.log("step5");
  }
}

// 应用类，定义剩下的两个步骤和执行方法
class App {
  protected step2() {
    console.log("step2");
  }

  protected step4() {
    console.log("step4");
  }

  // 声明了一个工具类，并调用工具类的方法
  // 早绑定
  // 应用开发人员必须非常熟悉工具类

  // 可以修改执行流程
  public run() {
    const lib = new Library();
    lib.step1();
    this.step2();
    lib.step3();
    this.step4();
    lib.step5();
  }
}

const app = new App();
app.run();
