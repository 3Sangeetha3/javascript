// Hoisting is a concept or behavior in JavaScript where the declaration of a function, variable, or class goes to the top of the scope they were defined in. 

// => Function Hoisting :-

    printHello1();
    // hello
    function printHello1() {
    console.log("hello");
    }

    //Here, we execute printHello before the line the function was declared. And everything still works without errors. What happened here? Hoisting.

    //-> another-example:

        // printHello()
        //     // hello
        // printDillion()
        //     // ReferenceError: printDillion is not defined
        //  function printHello() {
        //  console.log('hello')

        //  function printDillion() {
        //      console.log("dillion")
        // }
        // }

        // printDillion is hoisted, but it is only lifted to the top of the scope it was declared in. In this case, it is declared in a local scope--in printHello. Therefore, it would only be accessible in the function. Let's update our code:

        printHello();
        // hello

        function printHello() {
        printDillion();
        // dillion

        console.log('hello');

        function printDillion() {
            console.log("dillion");
        }
        }

        // Now, we execute printDillion in printHello before the line where printDillion was actually declared. Since the function is hoisted to the top of the local scope, we're able to access it before the line where it was actually declared.

//=> variable hoisting :-
// You can declare variables in JavaScript with the var, let, and const variables.
// And these variable declarations would be hoisted, but behave differently.

    // -> Hoisting var variables:- default value - undefined
        console.log(name);
        // undefined
        var name = "Dillion";



    // -> Hoisting let variables:-
        // console.log(name)
        // // ReferenceError: Cannot access 'name' before initialization
        
        // let name = "Dillion"

        // "Cannot access 'name' before initialization" occurs because variables declared with let do not have a default value when hoisted. 

        // The variables are hoisted to the top of the scope they are declared in (local, global, or block), but are not accessible because they have not been initialized. 
        // This concept is also referred to as the Temporal Dead Zone.

    // -> Hoisting const variables:-
        // Just like let, variables declared with const are hoisted, but not accessible. 
        // The same concept of a temporal dead zone applies to const variables.


//=> Class Hoisting :-
    // Classes in JavaScript are also hoisted.
        // const Dog = new Animal("Bingo")
        // // ReferenceError: Cannot access 'Animal' before initialization
        
        // class Animal {
        //   constructor(name1) {
        //     this.name1 = name1;
        //   }
        // }
        
        // we cannot access that class until the line of initialization is executed.
    
    // updated code of class-hoisting;
    class Animal {
        constructor(name1) {
          this.name1 = name1;
        }
      }
      
      const Dog = new Animal("Bingo");
      
      console.log(Dog);
      console.log(Dog.name1);
      // { name: 'Bingo' }

