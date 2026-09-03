// ECMASCRIPT FEATUIRES(2016)
// Exponentiation Oprator
// Es7 indrtoduces a new mathematical oprator called exponentiation oprator is simillar to using Math.pow() method.Exponentiation operator is repsented by a double astrisk **. the opator can be used only with numeric value.
//  Syntax
// base_value**exponent_value

let base=12;
let exponent=2;
console.log(`using Math.pow() == ${Math.pow(base,exponent)}`);
console.log(`using es6 property astrick ** == ${base**exponent}`);

// In expresion 
//? calculate area f a circle with a radious of 5 units
let area=Math.PI*5**2;
console.log(area);

// =====================================================
// Array includes()
// ==================================================
let arr=[1,2,3,4];
console.log(arr.includes(2));

