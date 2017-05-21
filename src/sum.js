function calculator(testStr) {
  const testArr = testStr.split(',');
  let sum = 0;
  let i = 0;
  let j = 0;
  let numbers = [];

  if (typeof testStr !== 'string') {
    return false;
  }
  if (testStr.trim().length === 0) {
    return 0;
  }
  if (testArr.length > 2) {
    return false;
  }


  for (i; i < testArr.length; i += 1) {
    const temp = testArr[i].split('\n');
    numbers = numbers.concat(temp);
  }

  for (j; j < numbers.length; j += 1) {
    let num;
    try {
      num = parseInt(numbers[j], 10);
      if (num < 0) {
        return false;
      } else if (num < 1000) {
        sum += num;
      }
    } catch (err) {
      return false;
    }
  }

  return sum;
}

calculator('2,3');
