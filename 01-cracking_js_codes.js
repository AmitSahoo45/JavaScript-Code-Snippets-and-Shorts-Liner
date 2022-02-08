const obj = {
    foo: 1,
    bar: {
        val: 2
    },
    baz: [3, 4, 5],
    qux: {
        aux: [1, 2, 3],
        pro: {
            que: 2
        }
    }
};

const copy = {};

Object.assign(copy, obj);
obj.foo = 33;
obj.bar.val = 44;
obj.baz = [5, 6, 7];
obj.qux.aux = [4, 5, 6];
obj.qux.pro.que = 7;

console.log(copy);
// Output = { foo: 1, bar: { val: 44 } }
// Reason -
// Object.assign(target, source);
// copies all the properties from the source to the target. It only performs a shallow copy (means both the old and new reference variable point to the same object in memory.)
// This means that any object reference in the source object, in this case, the object { val: 2 } is retained as such in the target object.
// Same goes with obj.qux.aux, obj.qux.pro.que


const arr = [1, 2, 3, [4, 5, 6], [[7, 8, 9], 10, 11]];
console.log(arr.flat());
// Output = [ 1, 2, 3, 4, 5, 6, [ 7, 8, 9 ], 10, 11 ]
console.log(arr.flat(2));
// Output = [ 1, 2, 3, 4,  5, 6, 7, 8, 9, 10, 11 ]
// The flat method creates a new array by checking
// for any sub arrays and flattening them out to their
// elements.
// For eg:
// [1, 2, 3, [4, 5]].flat() returns [1, 2, 3, 4, 5]
// flat(depth) returns a flattened array with the given depth.
// The depth parameter is optional and defaults to 1.

const arr1 = [1, 2, 3, NaN];
console.log(arr1.indexOf(NaN));
// Output = -1
// The indexOf method returns the index of the first element in the array that matches the given value.
// If no element is found, it returns -1.
// If the value is NaN, the indexOf method returns -1.
// If the value is null, the indexOf method returns -1.
// If the value is undefined, the indexOf method returns -1.
// indexOf internally uses === (strict equality) to compare elements.
// but in JS Nan === Nan returns false.
// so -1 is returned to indicate that the value is not found.
// === means equal value and equal type.


const generateCounter = () => {
    let ctr = 0;

    return function () {
        return ctr++;
    }
}

const a = generateCounter();
const b = generateCounter();

console.log(a(), a());
console.log(b(), b());
// output :- 
// 0 1
// 0 1
// each time generateCounter is called, the counter is incremented.
// Its initial value is 0
// The counter is incremented by 1 each time the function is called.
// a and b have their own count variable in the closure


const ovs = {
    foo: 1,
    bar: 2,
}

const enteries = Object.entries(ovs)
    .map(e => [e[0], e[1] * 2])
    .map(e => [e[1], e[0] + 2]);

console.log(Object.fromEntries(enteries));



let x = 3, y = 2, z = 8;
[x, y, z] = [y, x]
console.log(x, y, z)
// Output = 2 3 undefined
// This uses array destructuring assignment where LHS of the array is assigned to the RHS of the array
// hence z was not defined in RHS hence it showed undefined.

const msg = `Hello Programmer`;
const sub = msg.substring(5, 0);
const sub1 = msg.substring(0, 5)
console.log(sub);
// Output = Hello
// The substring method returns the part of the string between the start and end indexes,
// or to the end of the string.
// IMPORTANT //
// When index is greater than the end index, the two are swapped
// so it returns the same for both the cases 


const user = {
    names: 'foo',
    printName(){
        console.log(this.names);
    }
}

const method = user.printName()
method();

// This will throw error : - Cannot access property name of undefined
// Reason -
// this.value inside the method will be present only if the method is called directly called
// (i.e. user.printName() will give output "foo" and not the method itself)) 
// when it is assigned to a variable and then the variable is called, we lose the context 
// so the vaue of this is going to be undefined
// so to make it validate, we have to bind the method so that it will explicitly sets the value user to this
// i.e. const method = user.printName.bind(user) will give output - foo
