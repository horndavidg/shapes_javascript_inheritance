var Shape = require("./shape");

function Square(sideLength, color) {
  Shape.call(this, 4, color);
  this.sideLength = sideLength;
}


Square.prototype = Object.create(Shape.prototype)
Square.prototype.constructor = Square
Square.prototype.area = function () {
	return this.sideLength * this.sideLength};
Square.prototype.perimeter = function () {
	return this.sideLength * 2 + this.sideLength * 2};


module.exports = Square;
