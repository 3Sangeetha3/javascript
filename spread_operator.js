/// Spread Operator
const details = {
    name: 'Sangeetha',
    age: 18
};
console.log(details.name); //Sangeetha

const newDetails = {...details};
newDetails.name = ' Jadamal Sangeetha';

console.log(newDetails.name); // Jadamal Sangeetha
console.log(details.name); // Sangeetha

const obj = {
    a: 1,
    b: {
        c: 2,
    },
    c: 3
};

const newObj = {...obj};
newObj.a = 4;
console.log(newObj.a); // 4
console.log(obj.a); // 1

newObj.b.c = 5;
console.log(newObj.b.c); // 5
console.log(obj.b.c); // 5


