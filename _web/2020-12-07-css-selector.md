---
layout: post
title: Css选择器和优先级
tags:
  - web
  - css
---

# Css选择器和优先级

## 选择器分类

- 通配符 *
- 元素选择器
- 属性选择器
  - = 值为value
  - ~ 值为value或包含attr
  - | 值为value或开头为value
  - ^ 开头为value
  - $ 结尾为value
  - ’*‘ 包含value
  - 条件I 大小写不敏感
- id选择器
- 类选择器
- 伪类选择器
- ':'
- 伪元素选择器
- '::'
- 后代选择器
- '>' 直接后代选择器
- \+ 邻接兄弟选择器
- ’-‘ 通用兄弟选择器
  
## 选择器优先级

- !important > 行内样式>ID选择器 > 类选择器 > 标签 > 通配符 > 继承 > 浏览器默认属性

- 四个级别分别为：行内选择符、ID选择符、类别选择符、元素选择符。
- 优先级的算法：
  - 每个规则对应一个初始"四位数"：0、0、0、0
  - 若是 行内选择符(元素内联)，则加1、0、0、0
  - 若是 ID选择符，则加0、1、0、0
  - 若是 类选择符/属性选择符/伪类选择符，则分别加0、0、1、0
  - 若是 元素选择符/伪元素选择符，则分别加0、0、0、1
- 计算
  - 多级别组合，对应相加，比较最高位