// 使用模板方法

// 定义执行方法
// 定义确定的步骤
// 不确定的步骤仅定义虚函数
class Library {
  step1() {
    console.log("step1");
  }

  step2() {
    return;
  }

  step3() {
    console.log("step3");
  }

  step4() {
    return;
  }

  step5() {
    console.log("step5");
  }

  run() {
    this.step1();
    this.step2();
    this.step3();
    this.step4();
    this.step5();
  }
}

// 应用类继承lib，实现step2 与 step4即可；
class App extends Library {
  step2() {
    console.log("app step2");
  }

  step4() {
    console.log("app step4");
  }
}

const app = new App();

app.run();
