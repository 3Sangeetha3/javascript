const student = {
    fullName : "A",             //key:value pairs
    age : 18,
    cgpa : 9,
    ispass : true,
};
student.fullName = "priya";
student["age"] += 1;
console.log(student["fullName"]);           //acessing keys of the objects
console.log(student.age);