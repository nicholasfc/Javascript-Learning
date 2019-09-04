var tip = function(bill) {
    if (bill < 50) {
    return bill * 0.2;
  } else if (bill >= 50 && bill <= 200) {
    return bill * 0.15;
  } else {
    return bill * 0.1;
  }
}

var bills = [124, 48, 268];
var tips = [tip(124), tip(48), tip(268)];
var totalValue = [tip(124) + bills[0],
                  tip(48) + bills[1],
                  tip(268) + bills[2]];
console.log(tips, totalValue);

//Solution

function tipcalculator(bill) {
  var percentage;
  if (bill < 50) {
    percentage = .2;
  } else if (bill >= 50 && bill < 200) {
    percentage = .15;
  } else {
    percentage = .1;
  }
  return percentage * bill;
}

var bills = [124, 48, 268];
var tips = [tipcalculator(bills[0]),
            tipcalculator(bills[1]),
            tipcalculator(bills[2])];
var finalValues = [bills[0] + tips[0],
                    bills[1] + tips[1],
                    bills[2] + tips[2]];
console.log(tips, finalValues);
