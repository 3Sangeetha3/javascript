// For-of loop :- It is used to apply loops on strings, arrays and other iterable objects.
// we use for-of loop if we want to apply loop on each and every character of the string. 
// we don't need to initialize the iterator of the for-of loop like 'i' in the for loop or check any condition and stopping condition.

let str = "Javascript";
let size = 0;
for(let i of str)
{
    console.log("i =", i);
    size++;
}
console.log("Size is", size);
