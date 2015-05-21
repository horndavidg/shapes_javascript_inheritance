var Rectangle = require("../src/rectangle");

var rectangle;

describe("Rectangle", function() {
  beforeEach(function() {
    rectangle = new Rectangle(4,6, "blue");
  });

  describe("Area", function() {
    it("should be 24 for a rectangle with sides of 4 and 6", function() {
      expect(rectangle.area()).toEqual(24);
    });
  it("should be 30 for a rectangle with sides of 3 and 10", function() {
      rectangle = new Rectangle(3,10, "red");      
      expect(rectangle.area()).toEqual(30);
    });
  });

  
  describe("Perimeter", function() {
    it("should be 20 for a square with side lengths 4,6", function() {
      expect(rectangle.perimeter()).toEqual(20);
    });
   it("should be 40 for a square with side lengths 14,6", function() {
      rectangle = new Rectangle(6,14, "red"); 
      expect(rectangle.perimeter()).toEqual(40);
    });

  });

});
