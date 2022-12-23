// different ways to declare an obejct

// 1.Object coonstructor - 
var ob1 = new Object()

// 2. Using function constructor & this method
function Person(name, age) {
    this.name = name;
    this.age = age;
}
const person1 = new Person("Amit", 21)
console.log(person1)

// 3. using object literal syntax
const person2 = {
    name: "John",
    age: 21
}

// 4. using object create method
const person3 = Object.create({ name: 'Amit', age: 21 })

// 5. using function construct with prototype
function Bat() { }
Bat.prototype.name = 'Nike'
const Nike = new Bat()

// 6. ES6 Pattern 
class FootBall {
    constructor(ballName, worldCup) {
        this.ballName = ballName
        this.worldCup = worldCup
    }
}

const Jabulani = new FootBall('Jabulani', '2022 FIFA World Cup Qatar')
console.log(Jabulani)

// What is prototype chaining 
/*
Prototype chaining is used to build new types of objects based on existing ones. 
It is similar to inheritance in a class based language.

The prototype on object instance is available through Object.getPrototypeOf(object) 
or **proto** property whereas prototype on constructors 
function is available through Object.prototype.
*/

const WorldCupBall = Object.getPrototypeOf(Jabulani)

console.log(WorldCupBall)

// What is the difference between Call, Apply and Bind
function Christmas(greetings) {
    console.log(greetings + " " + this.name)
}

const naming = { name: "Smruti" }

Christmas.call(naming, "Merry Christmas")

function greet(greeting) {
    console.log(greeting + ', ' + this.name);
}

const person = { name: 'John' };
greet.apply(person, ['Hello']);  // Output: "Hello, John"
const greetJohn = greet.bind(person, 'Hello');
greetJohn();  // Output: "Hello, John"

// Slice VS Splice
const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(arr.slice(0, 3))
console.log(arr.slice(3))
console.log(arr.slice(-3))
console.log(arr.slice(-4,-1))

/*
How do you compare Object and Map in js
In JavaScript, Object and Map are two different data structures 
that can be used to store and manage data. 
Both Object and Map have their own strengths and use cases, 
and the choice between them depends on the specific requirements of your application.

Here is a summary of the main differences between Object and Map:

Keys: Object uses strings or symbols as keys, while Map can use any value (including objects) as a key.

Iteration: Object does not have a built-in way to 
iterate over its keys or values, while Map provides several 
methods for iterating over its keys, values, and entries (key-value pairs).

Memory usage: Map uses more memory than Object, 
as it stores both the key and the value for each element.

Performance: In general, Map has better performance than 
Object for operations such as inserting, deleting, and looking up elements. 
However, the performance difference may not be significant in most cases, 
especially for small objects.

Here is an example of how to use Object and Map in JavaScript:

Copy code
const obj = {
  key1: 'value1',
  key2: 'value2'
};

console.log(obj.key1);  // "value1"

const map = new Map();
map.set('key1', 'value1');
map.set('key2', 'value2');

console.log(map.get('key1')

*/
