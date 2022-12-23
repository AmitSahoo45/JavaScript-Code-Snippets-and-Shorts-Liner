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
 the absence of a value or a missing value. However, they are distinct values with different meanings and behaviors.

The null value represents a deliberate absence of an object value, 
while the undefined value represents an uninitialized or missing value.

The === operator is used to test for strict equality, 
which means that the operands must be of the same type and have the same value in order for the test to return true.

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