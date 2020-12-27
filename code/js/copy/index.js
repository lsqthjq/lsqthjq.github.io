// 浅拷贝
// function clone(obj) {
//   const obj2 = { ...obj };
//   return obj2;
// }

// 不完全的深拷贝  Number, String, Boolean, Array, 扁平对象有效
// function clone(obj) {
//   return JSON.parse(JSON.stringify(obj));
// }

// 浅拷贝
// function clone(obj) {
//   return Object.assign(Object.create(Object.getPrototypeOf(obj)), obj);
// }

function clone(obj) {
  const attrs = Object.getOwnPropertyDescriptors(obj);
  const newObj = Object.create(Object.getPrototypeOf(obj));
  for (key in attrs) {
    Object.defineProperty(newObj, key, attrs[key]);
  }
  return newObj;
}

const childs = [
  {
    name: "foo"
  },
  "bar"
];

// function Obj() {
//   let name = "obj";
//   let run = function () {
//     console.log("run fast");
//   };
//   let brother = {
//     name: "brother"
//   };
//   let age = 1;
//   // 此处出现了一个问题。因为变量提升，函数定义先于变量定义。因此不能访问到children
//   // let children = childs;
//   let children = null;
//   function speak() {
//     console.log("i am obj");
//   }
// }

function Obj() {
  this.name = "obj";
  this.run = function () {
    console.log("run fast");
  };
  this.brother = {
    name: "brother"
  };
  this.age = 1;
  // 此处出现了一个问题。因为变量提升，函数定义先于变量定义。因此不能访问到children
  // let children = childs;
  this.children = null;
  this.speak = function () {
    console.log("i am obj");
  };
}

// todo 增加Symbol、不可枚举类、prototype
const obj = new Obj();
// 数据属性
Reflect.defineProperty(obj, "foo", {
  configurable: true, // 可否被配置
  enumerable: true, // 可否被遍历
  writable: false, // 是否可写，给其赋值，值不会改变，不会报错
  value: "bar" // 值
});
// 访问器属性
Object.defineProperty(obj, "bat", {
  configurable: true, // 可否被配置
  enumerable: true, // 可否被遍历
  set: function (val) {
    console.log("set");
  },
  get: function () {
    console.log("get");
    return "bar"; // 取值，设置之后，打印会变成 （。。。）
  }
});
obj.children = childs;
obj.symbol = Symbol("1");
console.log(obj);
console.log(Object.getOwnPropertyDescriptors(obj));

// 此时输出obj是这样的
// Obj {children: Array(2)}
// children: (2) [{…}, "bar"]
// name: "obj old"
// run: ƒ ()

const obj2 = clone(obj);

obj.name = "obj old";
if (obj.speak) {
  obj.speak = function () {
    console.log("i am obj old");
  };
}
obj.run = function () {
  console.log("run slow");
};
obj.brother.name = "hehe";
childs[0].name = "foo hehe";
childs[1] = "";
obj.symbol = Symbol("2");

console.log(obj2);
console.log(Object.getOwnPropertyDescriptors(obj2)); // 克隆后，丢失访问器属性
obj2.speak();
obj2.run();

const children2 = clone(childs);
console.log(children2);

function showThis() {
  this.showT = function () {
    console.log(this);
  };
}

function newObj(cla, ...args) {
  let obj = Object.create(cla.prototype);
  obj = Object.assign(obj, cla);
  const res = cla.apply(obj, args);
  const isObject = typeof res === "object" && res !== null;
  const isFunction = typeof res === "function";

  return isObject || isFunction ? res : obj;
}

function _new(Fn, ...args) {
  // 判断是否是构造函数
  function is_constructor(f) {
    if (f === Symbol) return false;
    try {
      // 功能和new类似，返回一个新的对象
      // 第一个 target 参数传入无关的构造函数，第三个参数传入待检测函数
      // 关键在于传入的第三个参数，是用来指定第一个参数传入的构造函数生成的对象的prototype，并不会去执行它
      // 但是它也会被执行是否构造函数检查
      Reflect.construct(String, [], f);
    } catch (e) {
      return false;
    }
    return true;
  }

  // 1. 参数判断检测
  let isFunction = typeof Fn === "function";
  if (!isFunction || !is_constructor(Fn)) {
    throw new TypeError(`${Fn.name || Fn} is not a constructor`);
  }

  // 2. 创建一个继承构造函数.prototype的空对象
  var obj = Object.create(Fn.prototype);
  // 3. 让空对象作为函数 A 的上下文，并调用 A，同时获取它的返回值
  let result = Fn.call(obj, ...args);
  // 4. 如果构造函数返回一个对象，那么直接 return 它，否则返回内部创建的新对象
  return result instanceof Object ? result : obj;
}

// js 的构造函数就是声明对象的创建过程，由new这个辅助函数，帮助生成对象并返回。
// 构造函数内部 this调用声明的值，并不会被遍历。需要通过 apply call 运行构造函数来绑定到新对象上。

// showThis();
// new showThis().showT();

// function this，调用的对象。
const oo = newObj(showThis);
console.log("oo", oo);
