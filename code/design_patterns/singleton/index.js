// 单例模式
function Singleton(name) {
    this.name = name;
    this.instance = null;
}
Singleton.prototype.getName = function () {
    console.log(this.name);
};
Singleton.getInstance = function (name) {
    if (!this.instance) {
        this.instance = new Singleton(name);
    }
    return this.instance;
};
var obj1 = Singleton.getInstance('hehe');
obj1.getName();
var obj2 = Singleton.getInstance('haha');
obj2.getName();


const Singleton2 = (function() {
    let instance = null;

    return function(name) {
        this.name = name;
        if (!instance) {
            instance = this;
        }
        return instance;
    }
})();

Singleton2.prototype.getName = function() {
    console.log(this.name);
}

const obj3 =new Singleton2('haha');
obj3.getName();

const obj4 =new Singleton2('gehe');
obj4.getName();

function ProxySingleton(fn) {
    let instance = null;

    return function(...rest) {
        if (!instance) {
            instance = new fn(rest);
        }
        return instance;
    }
}

function Singleton3(name) {
    this.name = name;
}



const singleProxy = ProxySingleton(Singleton3);

const obj5 = singleProxy('foo');
console.log(obj5);

const obj6 = singleProxy('bar');
console.log(obj6);