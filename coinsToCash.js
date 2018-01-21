let dollarAmount = 0;

const piggyBank = {
    quarters: 358,
    dimes: 29,
    nickels: 93,
    pennies: 202
}


for(key in piggyBank) {
   switch(key) {
       case "quarters":
            dollarAmount += piggyBank[key] * .25;
            break;
        case "dimes":
            dollarAmount += piggyBank[key] * .10;
            break;
        case "nickels":
            dollarAmount += piggyBank[key] * .05;
        case "pennies":
            dollarAmount += piggyBank[key] * .01;
   }
}



console.log("$" + dollarAmount.toFixed(2));  //Not sure how to restrict to 2 decimal points without converting value to a string :/
