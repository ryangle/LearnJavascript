# CSS 学习

## 如何引用、LESS(vs code easy less)、使用live server 插件可以自动刷新

## 选择器

  全部选择 *
  标签选择 tag
  ID选择 #id
  类选择 .class
  属性选择[]
  伪类选择器

  选择器的权重

## less 预处理器

## 字体的使用

* 组合定义和倾斜风格
* 阴影
* 文本溢出与空白处理 text-overflow:ellipsis
* 文本缩进与对齐
* 排版模式

## 盒子模型

## 边线

* 圆角的绘制
* 轮廓线

## 元素

* 元素的隐藏，display：none;会丢失空间位置
visibility:hidden;不会丢失空间占位
* 自动撑满可用空间。
* 背景裁切



## 页面布局

1. 文档流
  默认布局，从上到下，从左到右，遇块换行。
2. 浮动层
  给元素的float属性赋值后，就脱离了文档流进行左右浮动，紧贴着父元素（默认为body文本区域）的左右边框。
  而此浮动元素在文档流空出的位置，由后续的(非浮动)元素填充上去：块级元素直接填充上去，若跟浮动元素的范围发生重叠，浮动元素覆盖块级元素。内联元素：有空隙就插入。
  left ：元素向左浮动。
  right ：元素向右浮动。
  none ：默认值。
  inherit ：从父元素继承float属性。
3. 块级元素

## 定位机制

1. 普通流，块级元素从上到下依次排列，行内元素在一行中水平布置。
2. 相对定位，定位元素的位置相对于它在普通流中的位置进行移动。使用相对定位的元素不管它是否移动，仍要占据它原来的位置。
3. 绝对定位，脱离普通流，可以覆盖页面上的其他元素。

4. 使用清除浮动的空元素来使父级元素感知到内部浮动元素的高度，从而实现高度自适应。也可以使用伪元素实现。
5. 伪类、伪元素

## BFC 机制

Block Formatting Context

  1.内部的Box会在垂直方向上一个接一个的放置。
  2.垂直方向上的距离由margin决定
  3.bfc的区域不会与float的元素区域重叠。
  4.计算bfc的高度时，浮动元素也参与计算
  5.bfc就是页面上的一个独立容器，容器里面的子元素不会影响外面元素。

## 继承

可继承的属性有：
azimuth, border-collapse, border-spacing,
caption-side, color, cursor, direction, elevation,
empty-cells, font-family, font-size, font-style,
font-variant, font-weight, font, letter-spacing,
line-height, list-style-image, list-style-position,
list-style-type, list-style, orphans, pitch-range,
pitch, quotes, richness, speak-header, speaknumeral,
speak-punctuation, speak, speechrate,
stress, text-align, text-indent, texttransform,
visibility, voice-family, volume, whitespace,
widows, word-spacing
