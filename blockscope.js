//Declaring a variable with const is similar to let when it comes to Block Scope.

const x = 10;
// Here x is 10
console.log(x)

{
const x = 2;
// Here x is 2
console.log(x)
}

// Here x is 10
console.log(x)