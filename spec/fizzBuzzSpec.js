describe("FizzBuzz", function() {
  var fizzbuzz = new FizzBuzz();

  describe('knows when a number is:', function() {
    it ('divisible by 3', function() {
      expect(fizzbuzz.isDivisibleByThree(6)).toBe(true);
    });
    it ('divisible by 5', function() {
      expect(fizzbuzz.isDivisibleByFive(5)).toBe(true);
    });
  });

  describe('knows when number is NOT', function() {
    it ('divisible by 3', function() {
      expect(fizzbuzz.isDivisibleByThree(8)).toBe(false);
    });
    it ('divisible by 5', function() {
      expect(fizzbuzz.isDivisibleByFive(9)).toBe(false);
    });
  });

});
