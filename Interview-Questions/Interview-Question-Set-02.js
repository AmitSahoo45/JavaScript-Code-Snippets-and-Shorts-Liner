// Differeence between == and ===
/*
== stands for type converting quality comparison 
non-strict operators make type correction/conversion based upon values of variables


=== is strict operator equality comparison
he strict operators follow the below conditions for different types,

Two strings are strictly equal when they have the same sequence 
of characters, same length, and same characters in corresponding positions.
Two numbers are strictly equal when they are numerically equal. 
i.e, Having the same number value. There are two special cases in this,
NaN is not equal to anything, including NaN.
Positive and negative zeros are equal to one another.
Two Boolean operands are strictly equal if both are true or both are false.
Two objects are strictly equal if they refer to the same Object.
Null and Undefined types are not equal with ===, but equal with ==.
 i.e, null===undefined --> false but null==undefined --> true
*/

/*
why is NaN === NaN false in js?
Answer - 
In JavaScript, the NaN (Not a Number) value represents a numeric value that is not a number. 
NaN is produced when an operation that expects a number produces an undefined or meaningless result.

The NaN value is a special numeric value that is considered unequal to any other value, 
including itself. This means that NaN === NaN is always false, even when comparing NaN to itself.

This behavior is a result of the way NaN is defined in JavaScript. 
According to the specification, NaN is not equal to any value, 
including itself, because it is meant to represent an undefined or meaningless result.

To check if a value is NaN, you can use the isNaN() function,
 which returns true if the value is NaN and false otherwise. For example:

console.log(NaN === NaN);  // false
console.log(isNaN(NaN));   // true
*/

/*
const a = { b : 'c' }; const d = a; why does a === d gives true in js? 
In JavaScript, the a === d expression evaluates to true because both a and d refer to the same object in memory.

When you declare a variable and assign it an object, the variable stores a reference to the object, rather than a copy of the object itself. This means that multiple variables can refer to the same object.

In the example you provided, a and d are both variables that store a reference to the same object, which is why a === d returns true.

Here is an example that illustrates this behavior:

const a = { b: 'c' };
const d = a;
console.log(a === d);  // true
If you want to create a new object that is a copy of an existing object,
 you can use the Object.assign() method or the spread operator (...) 
 to create a new object with the same properties as the original object. For example:

const a = { b: 'c' };
const d = Object.assign({}, a);  // or const d = { ...a };
console.log(a === d);  // false
I hope this helps clarify why a === d is true in the example you provided. 
*/

const a = { name: 'Smruti' }
const b = Object.assign({}, a)

console.log(b === a)
// false

/*
When you use the Object.assign() method to create a new object, 
a new object is created in memory and the properties of the 
source object are copied to the new object. 
The new object is a distinct object from the source object, 
even if it has the same properties.

If you want to check if two objects have the same properties, 
you can use the Object.is() method or the JSON.stringify() function. For example:

const a = { name: 'Smruti' };
const b = Object.assign({}, a);
console.log(Object.is(b, a));       // false
console.log(JSON.stringify(b) === JSON.stringify(a));  // true
*/


/*
why is null===undefined --> false but null==undefined --> true in js?

In JavaScript, the null and undefined values are used to represent
 the absence of a value or a missing value. However, they are distinct 
 values with different meanings and behaviors.

The null value represents a deliberate absence of an object value, 
while the undefined value represents an uninitialized or missing value.

The === operator is used to test for strict equality, 
which means that the operands must be of the same type 
and have the same value in order for the test to return true.

The == operator, on the other hand, is used to test for loose equality, 
which means that it performs type coercion (converting the operands to a common type) 
before checking for equality.

This is why null === undefined is false, because null and undefined are 
different values with different types. However, null == undefined is true, 
because null and undefined are considered equal after type coercion.

Here is an example that illustrates the difference between null and undefined:

console.log(null === undefined);  // false
console.log(null == undefined);   // true
*/

console.log('1 - ', typeof null === undefined) // false
console.log('2 - ', typeof null) // object
console.log('3 - ', typeof undefined) // undefined

// ---------------- Hoisting in JS ----------------

/*
In JavaScript, hoisting is the behavior of moving declarations to the top of the code before execution.
This means that declarations (including variables, functions, and classes) can be used before they are defined.

console.log(x); // Output: undefined
var x = 5;

In this code, the declaration of the variable x is moved to the top of the code by the JavaScript interpreter. 
This is why we can use x before it is defined. The value of x is undefined until it is defined later in the code.
*/

foo()
function foo() {
    console.log('Hello World')
}

// Here, the function foo is defined after it is called, but it still executes because 
// the declaration is hoisted to the top of the code.
// It is important to note that only declarations are hoisted, not assignments.

// ------------------------------------------------------------
// What is the reason to choose the name let as a keyword in js?
/*
The keyword "let" was introduced in JavaScript in order to provide block-level scoping, 
which means that a variable declared with "let" is only accessible within the block in which it was declared, 
rather than being accessible throughout the entire function or global scope. This can be useful 
for creating variables that are only needed within a specific block of code and 
reduces the risk of variable name collisions.
*/

// ------------------------------------------------------------
// Difference between var, let and const
/*

Therefore, 
  
  var:
    -can be declared outside any function to be used inside any function
    -can be declared inside any function or any other {} which are of only if or
    if-else or switch etc. and can be used anywhere inside the function
    -can be changed again and again anywhere

  let:
    -can be declared outside any function to be used inside any function
    -if declared inside any function or any other {} which are of only if or if-else or switch etc. 
    and can't be used anywhere inside the function and can be only used inside statement
    - can be changed again and again only inside the statement in which they are made in

    const:
    -can be declared outside any function to be used inside any function
    -can be declared inside any function or any other {} which are of only if or if-else or 
    switch etc. and can be used anywhere inside the function
    -cannot be changed again and agan anywhere, if tried to, will result in an error

    var has function scope. (this variable can be accssed from anywhere inside function)
    let & const has block scope.(this variable can not be accessed out of block. 
    means outside of if else but inside of a function it can not be accessed. 
    only inside that block we can access this variable)
*/

// --------------------------------------------------------------------------------------------------------------------
// How do you redeclare variables in switch block without an error

// let counter = 1;
// switch (x) {
//     case 0:
//         let name;
//         break;

//     case 1:
//         let name; // SyntaxError for redeclaration.
//         break;
// }

/*
let counter = 1;
switch (x) {
  case 0: {
    let name;
    break;
  }
  case 1: {
    let name; // No SyntaxError for redeclaration.
    break;
  }
}
*/

// ---------------------------
// What is memoization
/*
Memoization is a programming technique which attempts to increase a function’s performance 
by caching its previously computed results. Each time a memoized function is called, 
its parameters are used to index the cache. 
If the data is present, then it can be returned, without executing the entire function. 
Otherwise the function is executed and then the result is added to the cache. 
Let's take an example of adding function with memoization,
*/

const memoizAddition = () => {
    let cache = {};
    return (value) => {
        if (value in cache) {
            console.log("Fetching from cache");
            return cache[value]; // Here, cache.value cannot be used as property name starts with the number which is not a valid JavaScript  identifier. Hence, can only be accessed using the square bracket notation.
        } else {
            console.log("Calculating result");
            let result = value + 20;
            cache[value] = result;
            return result;
        }
    };
};
// returned function from memoizAddition
const addition = memoizAddition();
console.log(addition(20)); //output: 40 calculated
console.log(addition(20)); //output: 40 cached

// ---------------------------

// What are classes in ES6
class Bike {
    constructor(color, model) {
        this.color = color;
        this.model = model;
    }

    getDetails() {
        return this.model + " bike has a " + this.color + " color";
    }
}

let bike = new Bike("red", "Honda");
console.log(bike.getDetails());

class Singer {
    constructor(name, age, hood) {
        this.name = name
        this.age = age
        this.hood = hood
    }

    getSingerDetails() {
        return 'Singer Name - ' + this.name + '\nSinger age - ' + this.age + '\nSinger hood - ' + this.hood
    }
}

const Snoop = new Singer('Snoop Dogg', 54, "NYC")
console.log(Snoop.getSingerDetails())

// What are closures in JavaScript
/*
A closure is the combination of a function and the lexical environment within which that function was declared.
i.e, It is an inner function that has access to the outer or enclosing function’s variables. The closure has three scope chains
Its like function inside a function

Own scope where variables defined between its curly brackets
Outer function’s variables
Global variables

function Welcome(name) {
  var greetingInfo = function (message) {
    console.log(message + " " + name);
  };
  return greetingInfo;
}
var myFunction = Welcome("John");
myFunction("Welcome "); //Output: Welcome John
myFunction("Hello Mr."); //output: Hello Mr.John

As per the above code, the inner function(i.e, greetingInfo) has access to the 
variables in the outer function scope(i.e, Welcome) even after the outer function has returned.
*/

function Football(team) {
    function Name(Name) {
        return (team + ' ' + Name)
    }
    return Name('Messi')
}

const Messi = Football('Barcelona', 'Messi')
console.log(Messi)

/*What are modules
Modules refer to small units of independent, reusable code and also act as the foundation of many JavaScript design patterns.
Most of the JavaScript modules export an object literal, a function, or a constructor

Reason to use modules
Maintainability
Reusability
Namespacing
*/

/*
What is scope in javascript

In JavaScript, a scope refers to the current context of code execution. It determines the accessibility (visibility) 
of variables and functions in the current context. There are two types of scopes in JavaScript: global scope and local scope.

Global scope: Variables and functions declared outside of any function are in the global scope. 
They are visible and accessible from anywhere in your code, including inside functions.

Local scope: Variables and functions declared inside a function are in the local scope. 
They are only visible and accessible within the function and are not accessible from outside the function.

JavaScript uses a lexical scoping system, which means that the scope of a variable is determined by its position in the code. 
In other words, the scope of a variable is determined by where it is defined, not where it is used.

For example, in the following code, the variable x is defined in the global scope, 
so it is visible and accessible from within the showName function:

let x = 'global';
function showName() {
  console.log(x);  // Output: 'global'
}
showName();

On the other hand, if x is defined inside the showName function, it will be in the local scope and 
not accessible from outside the function:

function showName() {
  let x = 'local';
  console.log(x);  // Output: 'local'
}

showName();
console.log(x);  // Output: ReferenceError: x is not defined
*/


