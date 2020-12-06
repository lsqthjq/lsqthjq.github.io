// Messager

namespace Bridge_demo1 {
  export class Messager {
    login() {
      return;
    }
    send() {
      return;
    }
    read() {
      return;
    }

    playSound() {
      return;
    }
    connect() {
      return;
    }
    readText() {
      return;
    }
    writeText() {
      return;
    }
  }

  // 不同平台，这两个方法有不同的实现
  export class PcMessagerBase extends Messager {
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

  export class MobileMessagerBase extends Messager {
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
  export class PcMessagerLite extends PcMessagerBase {
    login() {
      super.connect();
      // .....
      return;
    }
    send() {
      super.writeText();
      return;
    }
    read() {
      super.readText();
      return;
    }
  }

  export class PcMessagerPerfect extends PcMessagerBase {
    login() {
      super.connect();
      // .....
      return;
    }
    send() {
      super.writeText();
      return;
    }
    read() {
      super.readText();
      return;
    }
  }

  export class MobileMessagerLite extends MobileMessagerBase {
    login() {
      super.connect();
      // .....
      return;
    }
    send() {
      super.writeText();
      return;
    }
    read() {
      super.readText();
      return;
    }
  }

  export class MobileMessagerPerfect extends MobileMessagerBase {
    login() {
      super.connect();
      // .....
      return;
    }
    send() {
      super.writeText();
      return;
    }
    read() {
      super.readText();
      return;
    }
  }
}

/**
 * 基类 1
 * 平台 n
 * 业务 m
 * 子类数量可能有 1 + n + m*n 个。
 *
 * 存在大量重复代码。
 * 和Decorator类似
 */
