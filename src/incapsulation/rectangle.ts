class Rectangle {
  private _width;
  private _height;

  constructor(width: number, height: number) {
    this._width = width;
    this._height = height;
  }

  get width() {
    return this._width;
  }

  set width(value) {
    value <= 0 ? (this._width = 1) : (this._width = value);
  }

  calcArea() {
    return this._width * this._height;
  }

  calcPerimeter() {
    return (this._width + this._height) * 2;
  }
}

const rect = new Rectangle(10, 5);

// From get
console.log(rect.width);

// Access to methods
console.log(rect.calcArea());
console.log(rect.calcPerimeter());
