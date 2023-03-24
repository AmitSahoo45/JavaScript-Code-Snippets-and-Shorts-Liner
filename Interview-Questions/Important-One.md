#### 1.  What are MAX_SAFE_INTEGER and MIN_SAFE_INTEGER? How are these different from Infinity and -Infinity?
MAX_SAFE_INTEGER and MIN_SAFE_INTEGER are constants in JavaScript that represent the maximum and minimum safe 
integer values that can be represented in the language without losing precision.

MAX_SAFE_INTEGER has a value of 9007199254740991, which is the largest integer that can be represented 
in JavaScript without losing precision when used in arithmetic operations. 
Similarly, MIN_SAFE_INTEGER has a value of -9007199254740991, which is the smallest integer 
that can be represented in JavaScript without losing precision.

On the other hand, Infinity and -Infinity are values in JavaScript that 
represent positive and negative infinity, respectively. These values are used to 
indicate that a calculation or operation has exceeded the maximum or minimum 
representable values in JavaScript. For example, if you try to divide a number by zero, 
the result will be Infinity or -Infinity depending on the sign of the number being divided.

Unlike MAX_SAFE_INTEGER and MIN_SAFE_INTEGER, Infinity and -Infinity are not specific 
integer values and are not subject to the same limitations on precision. 
They are special values that represent the limit of what can be represented in JavaScript.

#### 2. How does JavaScript store numbers in memory?
JavaScript stores numbers in **64-bit floating-point format**, which is also used by the C programming language.
or 
**double precision floating point** numbers