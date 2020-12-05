/**
 * 流
 * 文件流
 * 加密文件流
 * 缓存文件流
 * 加密缓存文件流
 */

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

class CryptStream extends Stream {
  // 使用组合替代继承，大大减小了子类数量
  // 是该模式的精髓
  // 使用继承，势必需要一个父类，不断继承，不断膨胀
  // 使用组合，调用的都是同父类的子类，直接使用父类代替。不必关心子类的多少，使用多态的机制进行运行时绑定。
  public stream: Stream;

  constructor(stream: Stream) {
    super();
    this.stream = stream;
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

class BufferdStream extends Stream {
  public stream: Stream;

  constructor(stream: Stream) {
    super();
    this.stream = stream;
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
