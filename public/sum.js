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

