---
layout: post
title: 移动端适配
tags:
  - web
  - css
  - js
---

# 移动端适配

- 使用em+js来达到自适应的目的
  - 通过js识别页面宽度，设置根字体大小
  - 监听resize事件，改变根字体大小
  - 使用em设置元素宽高
- js代码

  ~~~js
  /* 
    根据页面宽度设置页面根font-size，使用em作为单位进行移动端适配
    搭配 postcss px-to-rem 插件食用
  */
  
  /* 
    取screen.width和document.documentElement.getBoundingClientRect().width的最小值；
    除以750，乘以32；懂的起撒，就是原本是750大小的32px;
    如果屏幕大小变成了375px,那么字体就是16px;
    也就是根字体fontSize大小和屏幕大小成正比变化！是不是很简单
  */
  
  /* 立即执行函数 */
  (function() {
    function autoRootFontSize() {
      document.documentElement.style.fontSize =
        (Math.min(screen.width,document.documentElement.getBoundingClientRect().width) /750) *32 +"px";
    }
    /* 监听resize事件 */
    window.addEventListener("resize", autoRootFontSize);
    autoRootFontSize();
  })();
  ~~~

- 搭配 postcss、pxtorem插件使用
- 自动转换px为css
- 安装 `npm i postcss postcss-pxtorem -D`
- 配置

  ~~~js
  //.postcssrc.js
  module.exports = {
    plugins: {
      "postcss-pxtorem": {
        rootValue: 16,
        propList: ["*"],
        minPixelValue: 2
      }
    }
  };
  ~~~