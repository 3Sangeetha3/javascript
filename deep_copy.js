// Description: Deep copy of an object.
// The deep copy creates a new object and copies all the values from the original object to the new object.
// This means that the new object is completely independent of the original object.
// This is the case with objects and arrays.
//To make a deep copy of nested objects, you would have to consider that. One way to prevent that is manually copying all nested objects.
const obj = {
    a: 1,
    b: {
        c: 2,
    },
    c: 3
};

const newObj = {...obj , b: {...obj.b}};
newObj.a = 4;
console.log(newObj.a); // 4
console.log(obj.a); // 1

newObj.b.c = 5;
console.log(newObj.b.c); // 5
console.log(obj.b.c); // 2