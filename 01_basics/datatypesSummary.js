// Primitive 

//  7 types = string, number, bigInt, boolean,null , undefined, symbol

const score = 100
const scoreValue=100.2

let isLoggedIn = false
const outsideTemp=null
let userName;

const id = Symbol('213')
const anotherId=Symbol('213')

console.log(id===anotherId);

const BigNumber= BigInt(12847556548);
// console.log(typeof BigNumber)


// Reference (Non- Primitive )

// Arrays,Objects,functions

const heros=["shaktiman","naagraj","doga"]

let myObj={
    name:"Suryansh ",
    age:22,
}
function Hello(){
    console.log("Hello world")
}

Hello()

/*

Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object

*/
