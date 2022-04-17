class Point {
  coordinatesX: string;
  coordinatesY: string;

  constructor(coordinatesX: string, coordinatesY: string) {
    this.coordinatesX = coordinatesX;
    this.coordinatesY = coordinatesY;
  }
}

class Rectangle {
  startingPoint: number;
  length: number;
  height: number;

  constructor(startingPoint: number, length: number, height: number) {
    this.startingPoint = startingPoint;
    this.length = length;
    this.height = height;
  }

  getArea() {
    return this.length * this.height;
  }
}
