// What are different ways to convert any value to a boolean?
let a = 2
console.log(!!a)

console.log(Boolean(a))

/*
Here !! is a way of converting a string or numeric value to a boolean value. 
!a is a way of converting a string or numeric value to a boolean value.
here a has a value(i.e. this makes it true). so !a will be false.
!false is true. so !!a will be true.
*/

// How does JavaScript store numbers in memory?
/*
JavaScript stores numbers in 64-bit floating-point format, which is also used by the C programming language.
or 
**double precision floating point** numbers
*/

// 
/*
NaN stands for "Not a Number" and is a value that represents an unrepresentable or 
undefined value resulting from a mathematical operation, such as dividing zero by zero. 
NaN is of type number but is not a meaningful number value. It is often used to indicate an error condition or an invalid value.

null is a value that represents the **intentional absence** of any object value. 
It is a primitive value that is often used to explicitly indicate the absence of an 
object where an object is expected. In other words, it is a deliberate non-value.

undefined is a value that represents the absence of a value or the lack of a value assignment. 
It is often used to indicate that a variable has been declared but has not been assigned a value yet.
*/


// What will be the output of the following code?
console.log(null == undefined)
console.log(null === undefined)
console.log("" == "")
console.log("" === "")
console.log([] == [])
console.log([] === [])
console.log(9 == "9")
console.log(9 === "9")
console.log(0 == false)
console.log(0 === false)
console.log(Infinity == Infinity)
console.log(Infinity === Infinity)
console.log([0] == 0)
console.log([0] === 0)
console.log()
console.log()

const data = {
    a: 1,
    b: "Amit",
    c: true,
}

newData = data
newData_new = { ...data }
newData_a = Object.assign({}, data)


// which operator can be used to detect nullish variables in javascript
/*
The nullish coalescing operator (??) is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.
eg. 
let a = null;
let b = 0;

console.log(a ?? 'default'); // prints 'default'
console.log(b ?? 'default'); // prints 0
*/

// Difference between || and ??
/*
In JavaScript, || and ?? are both operators used for checking and setting default values, but they have some important differences.

The || operator is the logical OR operator in JavaScript. It returns the value of its first operand if it is truthy, and otherwise returns the value of its second operand. The || operator checks for any truthy value, not just null or undefined. Here's an example:

let a = null;
let b = a || 'default';
console.log(b); // prints 'default'


In the above example, a is falsy (null), so the expression a || 'default' returns 'default'.

On the other hand, the ?? operator is the nullish coalescing operator in JavaScript. It returns the value of its first operand if it is not null or undefined, and otherwise returns the value of its second operand. The ?? operator checks specifically for nullish values. Here's an example:

let a = null;
let b = a ?? 'default';
console.log(b); // prints 'default'

In the above example, a is null, so the expression a ?? 'default' returns 'default'.

The main difference between || and ?? is that || checks for any truthy value, while ?? only checks for nullish values (null or undefined). This means that || can give unexpected results if you want to set a default value for variables that may have falsy values like 0, '', or false. In such cases, ?? is a better option to use.

It's also worth noting that the order of precedence for these operators is different. The ?? operator has higher precedence than ||, which means that it is evaluated first in expressions that contain both operators.
*/


// NULLISH COALESCING OPERATOR ----------------- > Important


a = undefined;
b = 10

console.log(a ??= b)

// Truncate a number using a bitwise operator
/*
To truncate a number using a bitwise operator in JavaScript, you can use the bitwise OR operator (|) as follows:

let num = 10.7;
num = num | 0;
console.log(num); // Output: 10

Here's how it works:

The first line of code sets num to the result of num | 0. The bitwise OR operator performs a bitwise 
OR operation on each pair of corresponding bits in the operands, which effectively truncates the decimal portion of the number.
When a bitwise operation is performed on a floating-point number, the number is first converted to a 32-bit 
signed integer representation. This conversion effectively removes the decimal portion of the number and keeps only the integer portion.
After the bitwise OR operation is performed, num contains the truncated integer value of the original number.

Note that this method only works for positive numbers. If you need to truncate negative numbers using a bitwise operator, you can use the bitwise AND operator (&) instead of the bitwise OR operator. Here's an example:

let num = -10.7;
num = num & 0;
console.log(num); // Output: -10

In this example, the bitwise AND operation effectively truncates the decimal portion of the number and preserves the sign of the original number.
*/




