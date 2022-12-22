const obj1 = {
    name: "Amit",
    university: "KIIT"
}

const obj2 = {
    name: "Amit",
    university: "KIIT"
}

console.log(obj1 == obj2); // false
console.log(obj1 === obj2); // false
/*
Reason - 
    == checks for value equality
    === checks for value and type equality

    In this case, both the objects are different, so the result is false for both.
    Both the objects are stored in different memory locations.
*/