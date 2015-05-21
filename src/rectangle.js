var Shape = require("./shape");


function Rectangle(Length, Width, color) { 
	Shape.call(this, 4, color)
	this.length = Length
	this.width = Width
}

Rectangle.prototype = Object.create(Shape.prototype)
Rectangle.prototype.constructor = Rectangle
Rectangle.prototype.area = function() {
	return this.length * this.width};
Rectangle.prototype.perimeter = function() {
	return this.length * 2 + this.width * 2};





module.exports = Rectangle;

