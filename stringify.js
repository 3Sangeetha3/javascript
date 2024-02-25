//It can be very tedious to manually go through big objects and copy every nested object by hand.
//There is a way to copy everything without thinking.
//You simply stringify your object and parse it right after.
const obj = {
    a: 1,
    b: {
        c: 2,
    },
    c: 3
};

const newObj = JSON.parse(JSON.stringify(obj));
newObj.a = 4;
console.log(newObj.a); // 4
console.log(obj.a); // 1

newObj.b.c = 5;
console.log(newObj.b.c); // 5
console.log(obj.b.c); // 2