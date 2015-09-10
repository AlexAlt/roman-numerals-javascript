var romanNumerals = function(number) {
  var numerals = [[1000,'M'], [500,'D'], [100,'C'], [50,'L'], [10,'X'], [5,'V'], [1,'I']];
  var result = [];
  var counter = number;

  while(counter > 0) {
    numerals.forEach(function(numeral) {
      while (counter - numeral[0] >= 0) {
        result.push(numeral[1]);
        counter = counter - numeral[0];
      }
    });
  }

  if (result.join("").search("IIII") >= 0) {
    var newResult = result.join("").replace("IIII","IV");
    return newResult;
  } else {
    return result.join("");
  }

};
