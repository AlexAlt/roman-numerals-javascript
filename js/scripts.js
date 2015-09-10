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

 var unformatted = result.join('');
  var formatted7 = unformatted.replace('MMMM','MMMCM');
  var formatted6 = formatted7.replace('DCCCC','CM');
  var formatted5 = formatted6.replace('CCCC','CD');
  var formatted4 = formatted5.replace('XXXX','XL');
  var formatted3 = formatted4.replace('LXL','XC');
  var formatted2 = formatted3.replace('VIIII', "IX");
  var formatted  = formatted2.replace('IIII', "IV");

  return formatted;

};
