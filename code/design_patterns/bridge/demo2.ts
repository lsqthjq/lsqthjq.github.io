// Messager

namespace Bridge_demo2 {
  export abstract class Messager {
    abstract login(): void;
    abstract send(): void;
    abstract read(): void;

    abstract playSound(): void;
    abstract connect(): void;
    abstract readText(): void;
    abstract writeText(): void;
  }

  // 不同平台，这两个方法有不同的实现
  export abstract class PcMessagerBase extends Messager {
    playSound() {
      // do something
      return;
    }
    connect() {
      // do something
      return;
    }
    readText() {
      // ......
      return;
    }
    writeText() {
      // ......
      return;
    }
  }

  export abstract class MobileMessagerBase extends Messager {
    playSound() {
      // do something
      return;
    }
    connect() {
      // do something
      return;
    }
    readText() {
      // ......
      return;
    }
    writeText() {
      // ......
      return;
    }
  }

  // 业务不同
  export class MessagerLite {
    messager!: Messager; // 运行时动态绑定 PcMesssagerBase， 但此时其并未完全实现

    constructor(messager: Messager) {
      this.messager = messager;
    }

    login() {
      this.messager.connect();
      // .....
      return;
    }
    send() {
      this.messager.writeText();
      return;
    }
    read() {
      this.messager.readText();
      return;
    }
  }
  export class MessagerPerfect {
    messager!: Messager; // 运行时动态绑定

    constructor(messager: Messager) {
      this.messager = messager;
    }
    login() {
      this.messager.connect();
      // .....
      return;
    }
    send() {
      this.messager.writeText();
      return;
    }
    read() {
      this.messager.readText();
      return;
    }
  }
}

/**
 * 装饰器模式并未能完全解决问题
 * 因为在不同维度的子类，只重写了部分父类的方法
 * 需要将其拆分开来
 */
