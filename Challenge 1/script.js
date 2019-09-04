//Mass & Height variables
var johnHeight = 1.80;
var johnMass = 80;
var markHeight = 1.87;
var markMass = 92;

//Calculatting BMI. BMI = Mass / Height^2
var johnBmi = johnMass / (johnHeight*johnHeight);
var markBmi = markMass / (markHeight*markHeight);
console.log(johnBmi, markBmi);

//Check if Mark BMI is higher than John
var higherBmi = markBmi > johnBmi;
console.log('Is Mark\'s Bmi higher than John\'s?' + ' ' + higherBmi);

//rewriting with if/else

if (markBmi > johnBmi) {
  console.log('Mark\'s BMI is higher than John\'s.');
} else {
    console.log('John\'s BMI is higher than Mark\'s.');
}
