function Food(name) {
    this.name = name;
}
Food.prototype.getName = function () {
    console.log(this.name);
};

/**
 * 懒汉式
 * 使用代理，分离了对象的创建和判断操作
 * Food负责对象的创建
 * LazySingleton负责判断有无对象
 * @param {function} fn 
 */
const LazySingleton = function (fn) {
    let instance = null;

    return function (name) {
        if (!instance) {
            instance = new fn(name);
        }
        return instance;
    };
};

const lazySingleton = LazySingleton(Food);

var obj1 = lazySingleton("hehe");
obj1.getName();
var obj2 = lazySingleton("haha");
obj2.getName();

/**
 * 饿汉式
 * 因为js没有其它语言那样的类加载机制，可以使用闭包函数包裹一下（代理）
 * 或是用立即执行函数，返回获取对象的方法
 * @param {function} fn 
 */
const HungrySingleton = function (fn) {
    let instance = new fn("foo");

    return function (name) {
        return instance;
    };
};

const hungrySingleton = HungrySingleton(Food);

var obj3 = hungrySingleton("hehe");
obj3.getName();
var obj4 = hungrySingleton("haha");
obj4.getName();