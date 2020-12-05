// 文件分割

// 新需求，需要知道文件分割进度

/**
 * 方法一
 * 新增progressBar类
 * App和FileSplit新增progressBar属性
 * split方法更新progressBar
 *
 * 违背依赖倒置原则
 * 此时progressBar是实现细节，实现细节应当依赖于抽象
 * todo 实现细节是什么
 *  具体的子类
 * todo 耦合关系
 *  对象在类内部被实例化。
 */

/**
 * 优化
 * 将progressBar抽象
 * 定义一个IProgress接口类
 * 依赖于抽象
 */

/**
 * 支持多个观察者
 * 实现观察者队列
 * add,remove来管理观察者
 */

class FileSplit {
  public filePath = "";
  public fileNum = 10;

  // 改为依赖抽象，符合依赖倒置原则
  // public progressBar: ProgressBar
  // public progressBar: IProgress | null = null;
  // 支持多个观察者
  public progressBar: IProgress[] = [];

  // constructor(path: string, num: number, progressBar: IProgress | null) {
  // 不再传递 IProgress对象
  constructor(path: string, num: number) {
    this.filePath = path;
    this.fileNum = num;
  }

  public addIProgress(progress: IProgress) {
    this.progressBar.push(progress);
  }
  public removeIProgress(progress: IProgress) {
    // do remove
  }

  split() {
    // 分割文件

    for (let i = 0; i < this.fileNum; i++) {
      //do something

      // 更新进度条
      if (this.progressBar) {
        this.doProgress((i + 1) / this.fileNum);
      }
    }

    return true;
  }

  // 改良，方便子类修改
  protected doProgress(value: number) {
    // 遍历数组，更新进度条
    this.progressBar.forEach((progress: IProgress) => {
      progress.doProgress(value);
    });
  }
}

/**
 * 新增进度条类。
 * progress 保存进度
 * setProgress 设置进度
 */
class ProgressBar {
  public progress = 0;

  setProgress(progress: number) {
    this.progress = progress;
  }
}

// 定义progress接口类
interface IProgress {
  doProgress(value: number): void;
}

// 继承实现progress接口类
class App implements IProgress {
  public textFilePath = "";
  public textFileNumber = 10;

  // 新增一个progressBar对象。
  public progressBar = new ProgressBar();

  // 触发操作
  buttonClick(...args: any[]) {
    this.textFilePath = args[0];
    this.textFileNumber = args[1];

    // App实现IProgress 接口，传入this
    const fileSplit = new FileSplit(this.textFilePath, this.textFileNumber);
    fileSplit.addIProgress(this);
    fileSplit.split();
  }

  doProgress(value: number) {
    this.progressBar.setProgress(value);
  }
}
