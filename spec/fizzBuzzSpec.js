describe("FizzBuzz", function() {
  var fizzbuzz = new FizzBuzz();

  describe('knows when a number is:', function() {
    it ('divisible by 3', function() {
      expect(fizzbuzz.isDivisibleByThree(6)).toBe(true);
    });
    it ('divisible by 5', function() {
      expect(fizzbuzz.isDivisibleByFive(5)).toBe(true);
    });
    it ('divisible by 15', function() {
      expect(fizzbuzz.isDivisibleByFifteen(15)).toBe(true);
    });
  });

  describe('knows when number is NOT', function() {
    it ('divisible by 3', function() {
      expect(fizzbuzz.isDivisibleByThree(8)).toBe(false);
    });
    it ('divisible by 5', function() {
      expect(fizzbuzz.isDivisibleByFive(9)).toBe(false);
    });
    it ('divisible by 15', function() {
      expect(fizzbuzz.isDivisibleByFifteen(13)).toBe(false);
    });
  });

  describe('when playing, says', function() {
    it('"Fizz" - if divisible by 3', function() {
      expect(fizzbuzz.says(6)).toEqual("Fizz")
    });
    it('"Buzz" - if divisible by 5', function() {
      expect(fizzbuzz.says(10)).toEqual("Buzz")
    });
    it('"FizzBuzz" - if divisible by 15', function() {
      expect(fizzbuzz.says(15)).toEqual("FizzBuzz")
    });
  });

});
