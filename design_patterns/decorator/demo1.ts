/**
 * 流
 * 文件流
 * 加密文件流
 * 缓存文件流
 * 加密缓存文件流
 */
namespace Decorator_demo1 {
  export class Stream {
    read() {
      // do something;
    }
    seek() {
      // do something;
    }
    write() {
      // do something;
    }
  }
  export class FileStream extends Stream {
    read() {
      // do something;
    }
    seek() {
      // do something;
    }
    write() {
      // do something;
    }
  }

  export class CryptFileStream extends FileStream {
    read() {
      // do crypt;
      // 调用父类操作，静态机制
      super.read();
    }
    seek() {
      // do crypt;
      // 调用父类操作，静态机制
      super.seek();
    }
    write() {
      // do crypt;
      // 调用父类操作，静态机制
      super.write();
    }
  }

  export class BufferdFileStream extends FileStream {
    read() {
      // do buffer;
      // 调用父类操作，静态机制
      super.read();
    }
    seek() {
      // do buffer;
      // 调用父类操作，静态机制
      super.seek();
    }
    write() {
      // do buffer;
      // 调用父类操作，静态机制
      super.write();
    }
  }

  export class BufferdCryptFileStream extends FileStream {
    read() {
      // do crypt;
      // do buffer;
      // 调用父类操作，静态机制
      super.read();
    }
    seek() {
      // do crypt;
      // do buffer;
      // 调用父类操作，静态机制
      super.seek();
    }
    write() {
      // do crypt;
      // do buffer;
      // 调用父类操作，静态机制
      super.write();
    }
  }
}

const d1s1 = new Decorator_demo1.FileStream();
const d1s2 = new Decorator_demo1.CryptFileStream();
const d1s3 = new Decorator_demo1.BufferdFileStream();
const d1s4 = new Decorator_demo1.BufferdCryptFileStream();

/**
 * 代码大量重复
 * 子类膨胀
 *
 * 观察代码可以发现
 *  有的子类的方法存在大量职责
 *  存在大量重复代码
 *  违背了单一职责原则
 *
 *  CryptFileStream、BufferdFileStream、BufferdCryptFileStream 都继承了FileStream，并且都在方法中调用了父类操作
 *      我们可以将继承关系转为组合，在子类中添加FileStream对象，调用该对象的操作
 *  如果有另外的 VideoStream呢，也可以添加 VideoStream 对象，但此时就违背了依赖倒置原则，抽象依赖于实现细节了。
 *  为此，可以使用 Stream来替代，运行时绑定具体的类。
 *  同时，可以看到 BufferdCryptFileStream 也可以继承  CryptFileStream 或 BufferdFileStream，为此其可以继承 Stream，以使其为子类所用
 */
