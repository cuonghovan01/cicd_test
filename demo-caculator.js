function calculator(testStr) {
   var testArr = testStr.split(',');
   var sum = 0;
   var i = 0, j = 0;
   var numbers = [];

   if (typeof testStr !== 'string') {
     return false;
   }
   if (testStr.trim().length === 0) {
     return 0;
   }
   if (testArr.length > 2) {
     return false;
   }


   for (i; i< testArr.length; i++) {
     var temp = testArr[i].split('\n');
     numbers = numbers.concat(temp);
   }

   for (j; j < numbers.length; j++) {
      var num;
      try {
        num = parseInt(numbers[j]);
        if (num < 0) {
          return false;
        } else if (num > 1000) {
          continue;
        }
        sum += num;
      } catch(err) {
        return false;
      }  
  }

   return sum;
}

//Testing
function whenMoreThanTwoNumbersAreUsedThenReturnException() {
  var expectedResult = false;
  var argument = "2, 3, 4";
  var sum = calculator(argument);
  return sum === expectedResult;
}

function whenTwoNumbersAreUsedThenReturnTheirSum() {
  var expectedResult = 5;
  var argument = "2, 3";
  var sum = calculator(argument);
  return sum === expectedResult;
}

function whenEmptyStringIsUsedThenReturnZero() {
  var expectedResult = 0;
  var argument = "";
  var sum = calculator(argument);
  return sum === expectedResult;
}

function whenNegativeNumbersAreUsedThenReturnException() {
  console.log('testing: whenNegativeNumbersAreUsedThenReturnException');
  var expectedResult = false;
  var argument = "-2,4";
  var sum = calculator(argument);
  return sum === expectedResult;
}

function whenNumbersAreLargerThanOneThousandThenReturnException() {
  var expectedResult = 12;
  var argument = "12,1003";
  var sum = calculator(argument);
  return sum === expectedResult;
}

function whenOneNumberHasNewLineCharacterThenReturnTheirSum() {
  var expectedResult = 6;
  var argument = "1\n2, 3";
  var sum = calculator(argument);
  return sum === expectedResult;
}

function whenStringWithMultipleDemilitersAreUsedThenReturnTheirSum() {
  var expectedResult = 6;
  var argument = "1\n;2, 3";
  var sum = calculator(argument);
  return sum === expectedResult;
}

whenMoreThanTwoNumbersAreUsedThenReturnException();
whenTwoNumbersAreUsedThenReturnTheirSum();
whenEmptyStringIsUsedThenReturnZero();
whenNegativeNumbersAreUsedThenReturnException();
whenNumbersAreLargerThanOneThousandThenReturnException();
whenOneNumberHasNewLineCharacterThenReturnTheirSum();
whenStringWithMultipleDemilitersAreUsedThenReturnTheirSum();
