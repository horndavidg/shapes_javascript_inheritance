var Square = require("../src/square");

var square;

describe("Square", function() {
  beforeEach(function() {
    square = new Square(2, "red");
  });

  describe("Area", function() {
    it("should be 4 for a square", function() {
      expect(square.area()).toEqual(4);
    });
   it("should be 25 for a square", function() {
      square = new Square(5, "red");
      expect(square.area()).toEqual(25);
    });
  });

  
  describe("Perimeter", function() {
    it("should be 8 for a square with side length 2", function() {
      expect(square.perimeter()).toEqual(8);
    });
    it("should be 20 for a square with side length 5", function() {
       square = new Square(5, "red");
      expect(square.perimeter()).toEqual(20);
    });
  });

  
});
