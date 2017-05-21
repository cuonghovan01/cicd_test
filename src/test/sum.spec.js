describe("Sum function", function() {
  it('should ReturnException when More Than Two Numbers Are Used', function() { 
    var argument = "2, 3, 4";
    var sum = calculator(argument);
    expect(sum).to.be.false;
  });
  it('should Return Their Sum when Two Numbers Are Used', function() { 
    var argument = "2, 3";
    var sum = calculator(argument);
    expect(sum).to.equal(5);
  });
  it('should return Zero when Empty String Is Used', function() {
    var argument = "";
    var sum = calculator(argument);
    expect(sum).to.equal(0); 
  });
  it('should return Return Exception when Negative Numbers Are Used', function() { 
    var argument = "-2,4";
    var sum = calculator(argument);
    expect(sum).to.be.false; 
  });
  it('should Return Exception when Numbers Are Larger Than One Thousand', function() { 
    var argument = "12,1003";
    var sum = calculator(argument);
    expect(sum).to.equal(12);
  });
  it('should Return Their Sum when One Number Has New Line Character', function() { 
    var argument = "1\n2, 3";
    var sum = calculator(argument);
    expect(sum).to.equal(6);
  });
});
