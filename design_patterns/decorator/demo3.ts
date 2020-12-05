/**
 * 流
 * 文件流
 * 加密文件流
 * 缓存文件流
 * 加密缓存文件流
 */

// 如果子类中有重复属性，将其提升
namespace Decorator_demo3 {
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

  // 装饰器
  export class DecoratorStream extends Stream {
    public stream: Stream;

    constructor(stream: Stream) {
      super();
      this.stream = stream;
    }
  }

  export class CryptStream extends DecoratorStream {
    // 使用组合替代继承，大大减小了子类数量

    constructor(stream: Stream) {
      super(stream);
    }

    read() {
      // do crypt;
      // 调用父类操作，静态机制
      this.stream.read();
    }
    seek() {
      // do crypt;
      // 调用父类操作，静态机制
      this.stream.seek();
    }
    write() {
      // do crypt;
      // 调用父类操作，静态机制
      this.stream.write();
    }
  }

  export class BufferdStream extends DecoratorStream {
    constructor(stream: Stream) {
      super(stream);
    }

    read() {
      // do buffer;
      // 调用父类操作，静态机制
      this.stream.read();
    }
    seek() {
      // do buffer;
      // 调用父类操作，静态机制
      this.stream.seek();
    }
    write() {
      // do buffer;
      // 调用父类操作，静态机制
      this.stream.write();
    }
  }
}

const d3s1 = new Decorator_demo3.FileStream();
const d3s2 = new Decorator_demo3.CryptStream(d3s1);
const d3s3 = new Decorator_demo3.BufferdStream(d3s2);
