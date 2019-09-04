/*
//Calculate Average Points
var johnAverage = (89 + 120 + 103) / 3;
var markAverage = (116 + 94 + 123) / 3


//Print Winner
if (johnAverage > markAverage) {
  console.log('John won the Game.');
} else if (markAverage > johnAverage) {
  console.log('Mark won the Game.');
} else{
  console.log('It was a tie.');
}*/

//Extra: Add a 3rd Player

//Calculate Average Points
var johnAverage = (89 + 120 + 103) / 3;
var markAverage = (116 + 94 + 123) / 3;
var maryAverage = (97 + 134 + 105) / 3;


//Print Winner
if (johnAverage > markAverage && johnAverage > maryAverage) {
  console.log('John won the Game.');
} else if (markAverage > johnAverage && markAverage > maryAverage) {
  console.log('Mark won the Game.');
} else if (maryAverage > markAverage && maryAverage > johnAverage) {
  console.log('Mary won the Game.');
} else {
  console.log('It was a tie.');
}
