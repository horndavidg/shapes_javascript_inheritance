function Shape(sides, color) {
  this.sides = sides;
  this.color = color;
}

Shape.prototype.area = function() {
  if (this.sides <= 2) {
		return 0;
	} else if (this.sides == 3) {
  		return .5;
  } else if (this.sides == 4) {
  		return 1;
  } 

  // square formula
  // rectangle formule

};

Shape.prototype.perimeter = function() {
 if (this.sides <= 2) {
		return 0;
  } else if (this.sides >= 3) {
  		return this.sides;
  } else {
  	return "Not a Shape Silly!";
  }
};

Shape.prototype.draw = function() {
   return "A shape with " + this.sides + " sides";
};


Shape.prototype.toString = function() {
  return "[Shape sides:" + this.sides + ", color:" + this.color +" ]"
};


Shape.prototype.getRGB = function() {
 	
 	var result = "rgb(";
 		if(this.color == "red"){
 			result += "255,0,0)"
 		} else if (this.color == "blue"){
 			result += "0,0,255)"
 		} else if (this.color == "green"){
 			result += "0,255,0)"
		} else {
 			result += "0,0,0)"
 		}

  return result;
}

module.exports = Shape;


// Steps
// 1. Look at the source files for shape.js, square.js, rectangle.js. The shape.js file will have all the functions that need to be implemented. Do not write code yet!
// 
// 2. Write your tests first. Implement tests for shape, square and rectangle.
// 
// 3. Once your tests are written, start implementing the functions in shape, square and rectangle.
// Square and rectangle should inherit from shape.
// The getRGB function should only be written once.
