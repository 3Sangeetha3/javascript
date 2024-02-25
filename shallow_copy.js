//A shallow copy means that certain (sub-)values are still connected to the original variable.
// If you change a shallow-copied value, it will also change the original value.

// tThis is in case of primitive types, like strings, numbers, and booleans.
const details = {
    name: 'Sangeetha',
    age: 18
};
console.log(details.name); //Sangeetha

const newDetails = details;
newDetails.name = ' Jadamal Sangeetha';

console.log(newDetails.name); // Jadamal Sangeetha
console.log(details.name); // Jadamal Sangeetha

newDetails.status = `Student`;

console.log(newDetails.status); // Student
console.log(details.status); // Student

// This is the case with objects and arrays, for example.
const obj = {
    a: 1,
    b: {
        c: 2,
    },
    c: 3
};

const newObj = obj;
newObj.a = 4;
console.log(newObj.a); // 4
console.log(obj.a); // 4

newObj.b.c = 5;
console.log(newObj.b.c); // 5
console.log(obj.b.c); // 