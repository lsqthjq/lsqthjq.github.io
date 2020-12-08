---
layout: post
title: vertical-align 行内元素对齐
tags:
  - web
  - css
---

# vertical-align 行内元素对齐

## 顶线、中线、基线、底线

![img](/assets/image/web/vertica-align-1.jpg)

- 绿色：顶线  top
- 蓝色：中线 middle （中线不一定在字的中心上）
- 红色：基线 baseline
- 紫色：底线 bottom

父元素基线，最后一个元素的基线。

![img](/assets/image/web/vertica-align-2.jpg)

- 行高：1+2+3+4
- 行距：3
- 字体大小：1+2+4
- line-height = font-size + 行距

![img](/assets/image/web/vertica-align-3.jpg)

- 内容区：顶线与底线包裹的区域
- 行内框：每个行内元素会生成一个行内框，在没有padding影响下，行内框等于内容区域，设定行高时，行内框高度不变，其它分别增加/减少到上下半行距。
- 行框：行框高度等于本行内所有元素中行内框最大的值（以行高值最大的行内框为基准，其他行内框采用自己的对齐方式向基准对齐，最终计算行框的高度），当有多行内容时，每行都会有自己的行框。

## vertical-align

- 它不影响块级元素的内容对齐， 只对行内元素、表格单元格元素生效，通常用来控制图片/表单与文字的对齐
- 设置在子元素上 例div > span
- 可选值
  - baseline：父元素的基准线上，默认值
  - sub：垂直对齐文本下标
  - super：垂直对齐文本上标
  - top：元素顶部与最高对齐
  - text-top：元素顶部与父元素字体的顶部对齐
  - middle：父元素中部
  - bottom：元素底部与最低对齐
  - text-bottom：元素底部与父元素字体底端对齐
  - length数值：相对父元素基准线，正值向上
  - %：line-height的百分比，相对父元素基准线
  - inherit：从父元素继承

[MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/vertical-align)
