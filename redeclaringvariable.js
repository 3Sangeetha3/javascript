//Variables defined with let cannot be redeclared.

let x = "sangeetha";

//let x = 0;
// SyntaxError: 'x' has already been declared
console.log(x)

//---------------------------------------------------------------------

//Redeclaring a variable using the var keyword can impose problems.
//Redeclaring a variable inside a block will also redeclare the variable outside the block:

var a = 10;
//Here a is 10
console.log(a)
{
    var a = 2;
    //here is 2
    console.log(a)
}
//here a is 2
console.log(a)

//---------------------------------------------------------------------------

//Redeclaring a variable using the let keyword can solve this problem.
//Redeclaring a variable inside a block will not redeclare the variable outside the block:

let p = 20;
// Here p is 20
console.log(p)
{
let p = 88;
// Here p is 88
console.log(p)
}
// Here p is 20
console.log(p)