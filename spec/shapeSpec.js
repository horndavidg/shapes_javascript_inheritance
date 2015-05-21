var Shape = require("../src/shape");
console.log(Shape);

var shape;
shape = new Shape(1,"red");
console.log(shape.color);

describe("Shape", function() {
  beforeEach(function() {
    shape = new Shape(1, "red");
  });

  describe("Area", function() {
    it("should be 0 for this abstract shape", function() {
      expect(shape.area()).toEqual(0);
    });
  
  it("should be 0 for this abstract shape", function() {
      shape = new Shape(2,"red");
      expect(shape.area()).toEqual(0);
    });

  xit("should be .5 for this shape", function() {
      shape = new Shape(3,"red");
      expect(shape.area()).toEqual(.5);
    });

  xit("should be .5 for this shape", function() {
      shape = new Shape(4,"red");
      expect(shape.area()).toEqual(1);
    });

  // kind of test square
  // kind of test rectangle

  });

   describe("Perimeter", function() {
    it("should be 0 for this abstract shape", function() {
      expect(shape.perimeter()).toEqual(0);
    });
     it("should be 0 for this abstract shape", function() {
      shape = new Shape(2,"red");
      expect(shape.perimeter()).toEqual(0);
    });
     it("should be 3 for this shape", function() {
      shape = new Shape(3,"red");
      expect(shape.perimeter()).toEqual(3);
    });
	it("should be 10 for this shape", function() {
      shape = new Shape(10,"red");
      expect(shape.perimeter()).toEqual(10);
    });

   });

   describe("Draw", function() {
    it("should return the number of sides for a given shape", function() {
      expect(shape.draw()).toEqual("A shape with 1 sides");
    });
	it("should return the number of sides for a given shape", function() {
      shape = new Shape(4, "blue")
      expect(shape.draw()).toEqual("A shape with 4 sides");
    });

  });


   describe("toString", function() {
    it("should return the number of sides and color given shape", function() {
      expect(shape.toString()).toEqual("[Shape sides:1, color:red ]");
    });
    it("should return the number of sides and color given shape", function() {
      shape = new Shape(22, "blue")
      expect(shape.toString()).toEqual("[Shape sides:22, color:blue ]");
    });

});

   describe("getRGB", function() {
    it("should return the RGB value of the color given", function() {
      expect(shape.getRGB()).toEqual("rgb(255,0,0)");
    });
    it("should return the RGB value of the color given", function() {
      shape = new Shape(22, "blue")
      expect(shape.getRGB()).toEqual("rgb(0,0,255)");
    });
    it("should return the RGB value of the color given", function() {
      shape = new Shape(22, "green")
      expect(shape.getRGB()).toEqual("rgb(0,255,0)");
    });
    it("should return the RGB value of the color given if R,G,B", function() {
      shape = new Shape(22, "rainbow")
      expect(shape.getRGB()).toEqual("rgb(0,0,0)");
    });
});

 
});
