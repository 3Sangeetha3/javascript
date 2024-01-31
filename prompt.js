//prompt is a temporary method to take input from the user in the browser

let n = prompt("Enter a number: ");
// if(n%5 === 0)
// {
//     console.log(n, "is a multiple of 5");
// }
// else{
//     console.log(n, "not a multiple of 5");
// }

if(n>=80 && n<= 100)
{
    console.log("A grade");
}
else if(n>=70 && n<= 89)
{
    console.log("B garde");
}
else if(n>=60 && n<= 69)
{
    console.log("C garde");
}
else if(n>=50 && n<= 59)
{
    console.log("D garde");
}
else{
    console.log("F grade");
}