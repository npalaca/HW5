class Square {
  constructor(side) {
    this.side = side;
  }

  perimeter() {
    return this.side * 4;
  }

  area() {
    return this.side ** 2;
  }

  diagonal() {
    return Math.sqrt(2 * this.side ** 2);
  }

  describe() {
    const p = this.perimeter();
    const a = this.area();
    const d = this.diagonal();
    console.log(`Square with side ${this.side} has perimeter of ${p}, area of ${a}, and diagonal of ${d.toFixed(3)}`);
  }
}

// create three squares
const square1 = new Square(2);
const square2 = new Square(5);
const square3 = new Square(7);

// describe each square
square1.describe();
square2.describe();
square3.describe();
