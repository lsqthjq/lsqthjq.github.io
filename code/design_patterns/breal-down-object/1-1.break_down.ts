/* 实现绘制图形 */

/* 分解 */

/* 图形类别 */
export enum EShapeType {
  POINT,
  LINE,
  RECT,
  CIRCLE
}

/* 点类 */
class Point {
  x: number;
  y: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
  draw() {
    // doSomething;
  }
}

/* 线类 */
class Line {
  pointStart: Point;
  pointEnd: Point;

  constructor(pointStart: Point, pointEnd: Point) {
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
class Rect {
  lineLeft: Line;
  lineRight: Line;
  lineTop: Line;
  lineBottom: Line;

  constructor(lineLeft: Line, lineRight: Line, lineTop: Line, lineBottom: Line) {
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
class Circle {
  point: Point;
  r: number;

  constructor(point: Point, r: number) {
    this.point = point;
    this.r = r;
  }
  draw() {
    // doSomething;
  }
}

/* 绘制方法 */
function draw(type: EShapeType, ...rest: any[]) {
  switch (type) {
    case EShapeType.POINT:
      /* 传入point，绘制 */
      break;
    case EShapeType.LINE:
      /* 传入line，绘制 */
      break;
    case EShapeType.RECT:
      /* 传入rect，绘制 */
      break;
    case EShapeType.CIRCLE:
      /* 传入circle，绘制 */
      break;
    default:
      break;
  }
}

/* 执行 */
draw(EShapeType.POINT, new Point(1, 2));
