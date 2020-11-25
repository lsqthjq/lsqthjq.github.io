# Markdown 拓展语法 {#title-home}

并非所有的Markdown应用程序都支持拓展语法元素。需要检查自己的应用程序所使用的轻量标记语言是否支持您要使用的拓展语法元素。如果没有，可以使用其它方法在Markdown处理器中中启用拓展。

[TOC]

## 围栏代码块

使用 \`\`\` 或 \~\~\~ 把代码包起来，可以形成代码块，同时在第一行 \`\`\` 或 \~\~\~ 之后可与指定语言，高亮语法。

~~~markdown
  ```markdown
  code
  ```
~~~

```markdown
  ~~~markdown
  code
  ~~~
```

> 英文输入 \` 中文输入 \~

## 删除线

使用 两个\~\~包起来

    ~~删除~~

~~删除~~

## 任务列表

形如一下格式， 以减号 + 方括号开头：

    - [x] task1. // 已完成
    - [X] 大写X  // 大小写x都可以，大写不能使用下面的快捷键
    - [ ] task2. 

```markdown
- [x] task1. // 已完成
- [X] 大写X  // 大小写x都可以，大写不能使用下面的快捷键
- [ ] task2. 
```

- [x] task1. // 已完成
- [X] 大写X  // 大小写x都可以，大写不能使用下面的快捷键
- [ ] task2. 

> 可以使用 `Markdown All in one` 快速取消或选定完成。 `Alt + c`,可能会提示你选择格式化程序。

> 在`Markdown Preview Enhanced` 预览发现一个bug，使用空格或tab形成的代码块会直接转成html  
> 试了vscode自带的并不会。  
> 使用`围栏代码块`也可以正常显示。这也是拓展语法的一个。

## 表格

> 这里我使用的是vscode上的`Markdown Preview Enhanced`插件。使用拓展语法需要在设置中打开 `enableExtendedTableSyntax` 选项。

形如一下格式：

```
| Foo   | Bar   |
| ----- | ----- |
| hello | world |
```

| Foo   | Bar   |
| ----- | ----- |
| hello | world |

> 可以使用 `Markdown All in one` 来格式化表格代码。 `Alt + Shift + F`,可能会提示你选择格式化程序。

## Emoji & Font-Awesome

> 只适用于 markdown-it parser 而不适用于 pandoc parser。 默认下是启用的。可以在插件设置里禁用此功能。

使用冒号包起来就行了

常用符号

~~~markdown
|     | a                | b                    | c              | d          | e              | f                          |
| --- | ---------------- | -------------------- | -------------- | ---------- | -------------- | -------------------------- |
| 1   | :punch:          | :notebook:           | :e-mail:       | :smile:    | :movie_camera: | :camera:                   |
| 2   | :fa-car:         | :telephone_receiver: | :phone:        | :heart:    | :alarm_clock:  | :loop:                     |
| 3   | :+1:             | :books:              | :email:        | :-1:       | :bulb:         | :hammer:                   |
| 4   | :rocket:         | :book:               | :envelope:     | :sunny:    | :mag_right:    | :chart_with_upwards_trend: |
| 5   | :cloud:          | :bar_chart:          | :wind_chime:   | :hibiscus: | :paperclip:    | :ghost:                    |
| 6   | :bug:            | :date:               | :balloon:      | :beers:    | :guitar:       | :headphones:               |
| 7   | :rice:           | :guitar:             | :mortar_board: | :house:    | :mount_fuji:   | :office:                   |
| 8   | :rocket:         | :school:             | :cupid:        | :notes:    | :shit:         | :feet:                     |
| 9   | :speech_balloon: |
~~~

|     | a                | b                    | c              | d          | e              | f                          |
| --- | ---------------- | -------------------- | -------------- | ---------- | -------------- | -------------------------- |
| 1   | :punch:          | :notebook:           | :e-mail:       | :smile:    | :movie_camera: | :camera:                   |
| 2   | :fa-car:         | :telephone_receiver: | :phone:        | :heart:    | :alarm_clock:  | :loop:                     |
| 3   | :+1:             | :books:              | :email:        | :-1:       | :bulb:         | :hammer:                   |
| 4   | :rocket:         | :book:               | :envelope:     | :sunny:    | :mag_right:    | :chart_with_upwards_trend: |
| 5   | :cloud:          | :bar_chart:          | :wind_chime:   | :hibiscus: | :paperclip:    | :ghost:                    |
| 6   | :bug:            | :date:               | :balloon:      | :beers:    | :guitar:       | :headphones:               |
| 7   | :rice:           | :guitar:             | :mortar_board: | :house:    | :mount_fuji:   | :office:                   |
| 8   | :rocket:         | :school:             | :cupid:        | :notes:    | :shit:         | :feet:                     |
| 9   | :speech_balloon: |

[更多emoji](https://www.webfx.com/tools/emoji-cheat-sheet/)

[Font-Awesom](https://fontawesome.com/)

## 上标

使用\^\^包起来

~~~markdown
foo^bar^
~~~

foo^bar^

## 下标

使用\~\~包起来

~~~markdown
H~2~O
~~~

H~2~O

## 脚注

类似链接参考式语法，不过在标记前加\^is maintained by the W3C.

~~~markdown
Content [^1]

[^1]: hahahahahaha
~~~

Content [^1]

[^1]: hahahahahaha

> 脚注会在文本最后显示

## 缩略

使用~~下划线~~**星号**加方括号，类似参考式链接

~~~markdown
_[HTML]: Hyper Text Markup Language // 无效
*[HTML]: Hyper Text Markup Language
The HTML is good;
~~~

*[HTML]: Hyper Text Markup Language
The HTML is good;

> 不知道为什么失效了= = 

## 标记

    ==Markd==

==markd==

## 内容目录

使用`[TOC]`

## 标题编号

标题的自定义id，方便定位跳转

    ### 这是一个标题 {#title-1}

    [TO ids](#title-1) 跳转标题

### 这是一个标题 {#title-1}

[TOP](#title-home) 跳转标题

> [返回首页](/index.html)