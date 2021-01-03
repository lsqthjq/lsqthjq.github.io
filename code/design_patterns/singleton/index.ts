// 单例模式

function Singleton(name:string) {
    this.name = name;
    this.instance = null;
}

Singleton.prototype.getName = function() {
    console.log(this.name);
}

Singleton.getInstance = function(name:string) {
    if (!this.instance) {
        this.instance = new Singleton(name);
    }
    return this.instance;
}

const obj1 = Singleton.getInstance('hehe');
obj1.getName();

const obj2 = Singleton.getInstance('haha');
obj2.getName();


// const Singleton2 = (function() {
//     let instance = null;

//     return function(name:string) {
//         this.name = name;
//         if (!instance) {
//             instance = this;
//         }
//         return instance;
//     }
// })();

// Singleton2.prototype.getName = function() {
//     console.log(this.name);
// }


// const obj3 =new Singleton2('haha');
// obj3.getName();

// const obj4 =new Singleton2('haha');
// obj4.getName();

function ProxySingleton(fn:Function) {
    let instance = null;

    return function(...rest) {
        if (!instance) {
            instance = fn.apply(this, rest);
        }
        return instance;
    }
}

function Singleton3(name:string) {
    this.name = name;
}

const singleProxy = ProxySingleton(Singleton3);

const obj3 =new singleProxy('haha');
obj3.getName();

const obj4 =new singleProxy('haha');
obj4.getName();