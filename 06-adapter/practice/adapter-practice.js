const getArea = shape => {
  return shape.width * shape.height;
}

class Square {
  constructor(size) {
    this.size = size;
  }
}

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}

class Adapter {
  constructor(shape) {
    // todo: add implementation
    this.width = shape.size;
    this.height = shape.size;
  }
}

// tests
const shape = new Adapter(new Square(10));

getArea(shape); // 100
