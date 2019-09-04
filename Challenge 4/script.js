var john = {
  fullName: 'John Smith',
  mass: 85,
  height: 1.83,
  calcBMI: function(){
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  }
};

var mark = {
  fullName: 'Mark Chase',
  mass: 95,
  height: 1.92,
  calcBMI: function(){
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  }
};

john.calcBMI();
mark.calcBMI();
//console.log(john, mark);


if (john.bmi > mark.bmi) {
  console.log(john.fullName + ' has a higher BMI of ' + john.bmi);
} else if(john.bmi < mark.bmi) {
  console.log(mark.fullName + ' has a higher BMI of ' + mark.bmi);
} else {
  console.log(mark.fullName + ' and ' + john.fullName + ' has the same BMI, which is ' + john.bmi);
}

//or we can put the calcbmi inside the if's

if (john.calcBMI > mark.calcBMI) {
  console.log(john.fullName + ' has a higher BMI of ' + john.bmi);
} else if(john.bmi < mark.bmi) {
  console.log(mark.fullName + ' has a higher BMI of ' + mark.bmi);
} else {
  console.log(mark.fullName + ' and ' + john.fullName + ' has the same BMI, which is ' + john.bmi);
}
