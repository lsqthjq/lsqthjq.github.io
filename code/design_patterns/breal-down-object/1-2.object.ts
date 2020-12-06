/* 实现绘制图形 */

/* 抽象 */

/* 图形类别 */
import { EShapeType } from "./1-1.break_down";

/* 图形基类 */
abstract class Shape {
  abstract draw();
}

/* 点类 */
class Point extends Shape {
  x: number;
  y: number;
  constructor(x: number, y: number) {
    super();
    this.x = x;
    this.y = y;
  }

  draw() {
    // doSomething;
  }
}

/* 线类 */
class Line extends Shape {
  pointStart: Point;
  pointEnd: Point;

  constructor(pointStart: Point, pointEnd: Point) {
    super();
    this.pointStart = pointStart;
    this.pointEnd = pointEnd;
  }
  draw() {
    // doSomething;
  }
}

/* 
  矩形类
 */
class Rect extends Shape {
  lineLeft: Line;
  lineRight: Line;
  lineTop: Line;
  lineBottom: Line;

  constructor(lineLeft: Line, lineRight: Line, lineTop: Line, lineBottom: Line) {
    super();
    this.lineLeft = lineLeft;
    this.lineRight = lineRight;
    this.lineTop = lineTop;
    this.lineBottom = lineBottom;
  }
  draw() {
    // doSomething;
  }
}

/* 圆类 */
class Circle extends Shape {
  point: Point;
  r: number;

  constructor(point: Point, r: number) {
    super();
    this.point = point;
    this.r = r;
  }
  draw() {
    // doSomething;
  }
}

/* 绘制方法 */
function draw(shape: Shape) {
  shape.draw();
}

/* 执行 */
draw(new Point(1, 2));
