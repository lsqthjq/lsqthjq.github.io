// Messager
// 有两个变化的维度。
namespace Bridge_demo3 {
  // 业务实现抽象为一个类
  export abstract class Messager {
    messagerImp!: MessagerIMP;

    constructor(messagerImp: MessagerIMP) {
      this.messagerImp = messagerImp;
    }

    abstract login(): void;
    abstract send(): void;
    abstract read(): void;
  }

  // 将平台实现抽象出来
  export abstract class MessagerIMP {
    abstract playSound(): void;
    abstract connect(): void;
    abstract readText(): void;
    abstract writeText(): void;
  }

  // 不同平台，这两个方法有不同的实现
  export abstract class PcMessagerBase extends MessagerIMP {
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

  export abstract class MobileMessagerBase extends MessagerIMP {
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
  export class MessagerLite extends Messager {
    constructor(messagerImp: MessagerIMP) {
      super(messagerImp);
    }

    login() {
      this.messagerImp.connect();
      // .....
      return;
    }
    send() {
      this.messagerImp.writeText();
      return;
    }
    read() {
      this.messagerImp.readText();
      return;
    }
  }

  export class MessagerPerfect extends Messager {
    constructor(messagerImp: MessagerIMP) {
      super(messagerImp);
    }
    login() {
      this.messagerImp.connect();
      // .....
      return;
    }
    send() {
      this.messagerImp.writeText();
      return;
    }
    read() {
      this.messagerImp.readText();
      return;
    }
  }
}
