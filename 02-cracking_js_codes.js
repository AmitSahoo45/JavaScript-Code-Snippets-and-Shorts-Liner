class Foo {
    name = 'Foo';
    constructor() {
        console.log(this.name);
    }
}

class Bar extends Foo {
    name = 'Bar';
    constructor() {
        super();
        console.log(this.name);
    }
}

new Foo();
new Bar();

// Output: Foo Foo
// Thats an unexpected result. This happens because of the order of fields initalization.
// The parent class is initialized first,(and its constructor is called) during which the value of name is set to 'Foo' in both cases. 
// But if we add the below statements 
// constructor() {
//     super();
//     console.log(this.name);
// }
// this it will first Foo Foo Bar


const arra = new Array(3)
    // .fill(10)
    // .map((index, value) => { return (value + ' ' + index) });
    // .map((value) => { return value + 3 })
    .map(() => 0)
console.log(arra);
// new Array(n) creates an array of n elements, filled with 0.
// The important thing is that there values are not null nor undefined, but are rather empty
// Mapping on empty slots in the array does not have any sort of effect but rather prints empty
// [ <3 empty items> ]
// but if we fill the array with an initial values then it will map according to the parameters provided

const newArr = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4]

const counts = newArr.reduce((counts, item) => {
    if (counts[item])
        counts[item]++;
    else {
        counts[item] = 1;
    }
    return counts
}, {});

console.log(counts);


const tableShow = [
    { names: 'Amit', age: 19, branch: 'CSE', year: '2' },
    { names: 'Smruti', age: 20, branch: 'CSE', year: '2' },
    { names: 'DibyaJyoti', age: 19, branch: 'Civil', year: '2' },
    { names: 'Yubraj', age: 19, branch: 'Electrical', year: '2' },
]

console.table(tableShow);
// This will show the data in table format

