//It is used for objects.

let Student = {
    name : "Sangeetha",
    age  : 18,
    cgpa : 8.5,
    ispass : true
};

for(let key in Student){
    console.log("key = ", key);         //prints the keys of the object
}


///If i want to print values of keys then ... 

for(key in Student){
    console.log("key = ", key, "value = ", Student[key]);
}