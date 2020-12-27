/**
 * js 原型与原型链
 *
 * 函数原型
 * 对象原型链
 *
 * 类继承
 */

let undefiendV;
const nullV = null;
const numV = 1;
const stringV = "string";
const boolV = true;
const symbolV = Symbol(1);
const arr = ["foo", "bar"];
const obj = {
    foo: "bar",
};

/**
 * 构造函数
 * 返回值不能为对象，除非返回this
 * 返回其它对象会改变new 的返回值，并改变原型
 * this 设置，访问相关属性
 */
function Foo() {
    this.bar = "bar";
    return this;
}

const foo = new Foo();

/**
 * 类
 * 特殊的构造函数
 * 无需this,设置、访问属性
 * constructor 函数
 * 返回其它对象会改变new 的返回值，并改变原型
 */
class Bar {
    foo = "foo";

    // 做初始化操作
    constructor() {
        return this;
    }
}

const bar = new Bar();

const mapV = new Map();
mapV.set("foo", "bar");

const setV = new Set();
setV.add("foo");
setV.add("bar");

console.log({ undefiendV, nullV, numV, stringV, boolV, symbolV, arr, obj, Foo, foo, Bar, bar, mapV, setV });

/**
 * 对象的原型
 * 两种获取方式
 * obj.__proto__
 * Object.getPrototypeOf()
 * Ecma 6
 * Reflect.getPrototypeOf() 只适用于对象
 */

// console.log("undefiendV.__proto__", undefiendV.__proto__); // 未定义的变量没有原型
// console.log("nullV.__proto__", nullV.__proto__);  // null值 无原型
console.log("numV.__proto__", numV.__proto__); // Number
console.log("stringV.__proto__", stringV.__proto__); // String
console.log("boolV.__proto__", boolV.__proto__); // Boolean
console.log("symbolV.__proto__", symbolV.__proto__); // Symbol
console.log("arr.__proto__", arr.__proto__); // constructor: ƒ Array()
console.log("obj.__proto__", obj.__proto__); // constructor: ƒ Object()
console.log("foo.__proto__", foo.__proto__); // constructor: ƒ Foo()
console.log("bar.__proto__", bar.__proto__); // constructor: class Bar
console.log("mapV.__proto__", mapV.__proto__); // Map
console.log("setV.__proto__", setV.__proto__); // Set

// console.log("Object.getPrototypeOf(undefiendV)", Object.getPrototypeOf(undefiendV));  //  Cannot convert undefined or null to object
// console.log("Object.getPrototypeOf(nullV)", Object.getPrototypeOf(nullV));  //  Cannot convert undefined or null to object
console.log("Object.getPrototypeOf(numV)", Object.getPrototypeOf(numV));
console.log("Object.getPrototypeOf(stringV)", Object.getPrototypeOf(stringV));
console.log("Object.getPrototypeOf(boolV)", Object.getPrototypeOf(boolV));
console.log("Object.getPrototypeOf(symbolV)", Object.getPrototypeOf(symbolV));
console.log("Object.getPrototypeOf(arr)", Object.getPrototypeOf(arr));
console.log("Object.getPrototypeOf(obj)", Object.getPrototypeOf(obj));
console.log("Object.getPrototypeOf(foo)", Object.getPrototypeOf(foo));
console.log("Object.getPrototypeOf(bar)", Object.getPrototypeOf(bar));
console.log("Object.getPrototypeOf(mapV)", Object.getPrototypeOf(mapV));
console.log("Object.getPrototypeOf(setV)", Object.getPrototypeOf(setV));

// console.log("Reflect.getPrototypeOf(undefiendV)", Reflect.getPrototypeOf(undefiendV));  //  Cannot convert undefined or null to Reflect
// console.log("Reflect.getPrototypeOf(nullV)", Reflect.getPrototypeOf(nullV));  //  Cannot convert undefined or null to Reflect
// console.log("Reflect.getPrototypeOf(numV)", Reflect.getPrototypeOf(numV)); //Reflect.getPrototypeOf called on non-objec
// console.log("Reflect.getPrototypeOf(stringV)", Reflect.getPrototypeOf(stringV)); //Reflect.getPrototypeOf called on non-objec
// console.log("Reflect.getPrototypeOf(boolV)", Reflect.getPrototypeOf(boolV)); //Reflect.getPrototypeOf called on non-objec
// console.log("Reflect.getPrototypeOf(symbolV)", Reflect.getPrototypeOf(symbolV)); //Reflect.getPrototypeOf called on non-objec
console.log("Reflect.getPrototypeOf(arr)", Reflect.getPrototypeOf(arr));
console.log("Reflect.getPrototypeOf(obj)", Reflect.getPrototypeOf(obj));
console.log("Reflect.getPrototypeOf(foo)", Reflect.getPrototypeOf(foo));
console.log("Reflect.getPrototypeOf(bar)", Reflect.getPrototypeOf(bar));
console.log("Reflect.getPrototypeOf(mapV)", Reflect.getPrototypeOf(mapV));
console.log("Reflect.getPrototypeOf(setV)", Reflect.getPrototypeOf(setV));

/**
 * js 函数 还有一个特殊属性 prototype
 * 通过prototype可以给对象添加属性
 * 但其不是直接添加到对象上
 * 而是在其原型上
 */

 Foo.prototype.speak = function() {
   console.log('i am foo');
 }

 Foo.prototype.tt = 'foo'

 console.log('Foo',Foo);
 /* Foo ƒ Foo() {
  this.bar = "bar";
  return this;
} */
 console.log('foo',new Foo());
/*  index.js:121
 foo Foo {bar: "bar"}
 bar: "bar"
 __proto__: 
    speak: ƒ ()
    tt: "foo"
    。。。
     */

Bar.prototype.speak = function() {
  console.log('i am Bar');
}

Bar.prototype.tt = 'Bar'

console.log('Bar',Bar);
/* Bar class Bar {
    foo = "foo";

    // 做初始化操作
    constructor() {
        return this;
    }
}*/
console.log('bar',new Bar());
/* bar Bar {foo: "foo"}
foo: "foo"
__proto__:
speak: ƒ ()
tt: "Bar"
constructor: class Bar
__proto__: Object */


/**
 * 可以修改对象的 __proto__ 设置其原型
 *  Object.setPrototypeOf
 *  Reflect.setPrototypeOf // 只针对对象
 *  function.prototype = 
 */

Foo.prototype = Bar;

console.log('bar',new Foo());
/* 
index.js:171 
  bar Foo {bar: "bar"}
  bar: "bar"
  arguments: (...)
  caller: (...)
  __proto__: class Bar    原型被改变了
 */

 /**
  * 因为js是使用 原型模式 来实现类的继承
  * 在调用属性时，先查找该对象里有没有
  * 再去原型链上找
  * 所以可以通过修改原型来给所有的对象添加方法
  */

  Object.prototype.shuai = 'wo zui shuai';
  console.log(numV.shuai);  // wo zui shuai
  console.log(stringV.shuai);  // wo zui shuai
  console.log(boolV.shuai);  // wo zui shuai
  console.log(symbolV.shuai);  // wo zui shuai
  console.log(stringV.shuai);  // wo zui shuai
  console.log(arr.shuai);  // wo zui shuai
  console.log(obj.shuai);  // wo zui shuai
  console.log(mapV.shuai);  // wo zui shuai
  console.log(setV.shuai);  // wo zui shuai