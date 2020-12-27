// 一个对象的类型，应该声明成抽象的接口或类，以应对未来的变化
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Prototype_demo1;
(function (Prototype_demo1) {
    // 抽象接口
    // interface ISplitter {
    //   split(): void;
    // }
    // // 抽象工厂
    // abstract class SplitterFactory {
    //   // 使用抽象类，将编译时绑定转为运行时绑定
    //   abstract createSplitter(): ISplitter;
    // }
    // 抽象工厂的 基类 和 工厂类 和二为一
    /**
     * 当对象的创建过于复杂时
     * 对象的状态负责
     * 对象状态需要保留
     * 原型对象，只需要实现一次，就可以直接clone使用，可以保存之前的状态
     */
    var ISplitter = /** @class */ (function () {
        function ISplitter() {
        }
        return ISplitter;
    }());
    var BianrySplitter = /** @class */ (function (_super) {
        __extends(BianrySplitter, _super);
        function BianrySplitter() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.splitter2 = { name: "haha" };
            return _this;
        }
        BianrySplitter.prototype.split = function () {
            // do something
        };
        BianrySplitter.prototype.clone = function () {
            return this.deepCopy(this);
        };
        BianrySplitter.prototype.deepCopy = function (oldObj) {
            var obj = Object.create(Object.getPrototypeOf(oldObj));
            var keys = Object.keys(this);
            for (var key in keys) {
                if (oldObj[key] && typeof oldObj[key] === "object") {
                    obj[key] = this.deepCopy(oldObj[key]);
                }
                else {
                    obj[key] = oldObj[key];
                }
            }
            return obj;
        };
        return BianrySplitter;
    }(ISplitter));
    Prototype_demo1.BianrySplitter = BianrySplitter;
    var App = /** @class */ (function () {
        function App(prototype) {
            this.prototype = prototype;
        }
        App.prototype.button_click = function () {
            // 原型对象不是供使用的，而是用来clone的。
            var splitter = this.prototype.clone();
            console.log(splitter);
            splitter.split();
        };
        return App;
    }());
    Prototype_demo1.App = App;
})(Prototype_demo1 || (Prototype_demo1 = {}));
var app = new Prototype_demo1.App(new Prototype_demo1.BianrySplitter());
app.button_click();
