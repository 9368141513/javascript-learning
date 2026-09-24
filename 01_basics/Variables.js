const account= 1234;
let accountName= "Suryansh";
var accountBalance= 10000;
accountCity = "New York";
let name;

// account = 5678; not allowed because account is a constant
accountName = "John Doe";
accountBalance = 15000;
accountCity = "Los Angeles";

/*
we do not use var keywords because of issue in block scope 
*/


console.table([account, accountName, accountBalance, accountCity,name]);


