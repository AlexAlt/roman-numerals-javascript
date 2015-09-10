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

});
