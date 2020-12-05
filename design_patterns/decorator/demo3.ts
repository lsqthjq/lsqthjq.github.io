/**
 * 流
 * 文件流
 * 加密文件流
 * 缓存文件流
 * 加密缓存文件流
 */

// 如果子类中有重复属性，将其提升

class Stream {
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

class FileStream extends Stream {
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
class DecoratorStream extends Stream {
  public stream: Stream;

  constructor(stream: Stream) {
    super();
    this.stream = stream;
  }
}

class CryptStream extends DecoratorStream {
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

class BufferdStream extends DecoratorStream {
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

const s1 = new FileStream();
const s2 = new CryptStream(s1);
const s3 = new BufferdStream(s2);
