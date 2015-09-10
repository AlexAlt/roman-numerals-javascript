describe('romanNumerals', function() {
  it('adds the value of all the symbols for numbers less than 5', function() {
    expect(romanNumerals(2)).to.equal("II");
  });

  it('adds the value of all the symbols for numbers less than 10', function() {
    expect(romanNumerals(7)).to.equal("VII");
  });

  it('adds the value of all the symbols for numbers less than 20', function() {
    expect(romanNumerals(12)).to.equal("XII");
  });

    it('adds the value of all the symbols for numbers in the twenties', function() {
      expect(romanNumerals(25)).to.equal("XXV");
    });

    it('adds the value of all the symbols for numbers in the thirties', function() {
      expect(romanNumerals(33)).to.equal("XXXIII");
    });

    it('handles cases for 4', function() {
      expect(romanNumerals(4)).to.equal("IV");
      expect(romanNumerals(14)).to.equal("XIV");
    });

    it('handles cases for 9', function() {
      expect(romanNumerals(9)).to.equal("IX");
      expect(romanNumerals(19)).to.equal("XIX");
    });

    it('adds the value of all the symbols for numbers in the hundreds', function() {
      expect(romanNumerals(110)).to.equal("CX");
    });

    it('handles special cases', function() {
      expect(romanNumerals(99)).to.equal("XCIX");
    });

});
