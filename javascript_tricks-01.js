// SUM ALL VALUES FROM AN ARRAY
const numbers = [1, 23, 456, 7890];
let sum = numbers.reduce((x, y) => x + y)
console.log(sum)

// SHUFFLE ELEMENTS FROM AN ARRAY
const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
console.log(list.sort(() => {
    return Math.random() - 0.5
}))

// FILTERING FOR UNIQUE VALUE
const non_unique = [1, 2, 1, 3, 2, 5, 6, 5, 6, 6, 9]
const unique_array = [...new Set(non_unique)]
console.log(unique_array)

// SWAPPING VALUES WITH ARRAY DESTRUCTURING
let a = 10, b = 20;
[a, b] = [b, a]
console.log(a + '\t' + b)

// SHORT CIRCUIT CONDITIONAL 
let val = 1;
const thiswillexecute = () => {
    console.log(`This will get executed when if the condition is true`)
}

if (val) {
    thiswillexecute();
}

// THIS CAN BE SHORTENED TO THIS
val && thiswillexecute();
