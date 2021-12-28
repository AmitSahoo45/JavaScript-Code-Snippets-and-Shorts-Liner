// 1.
// Checking No. of Occurrences of an element in an array 
// If the array is Multi-diemensional, flatten the array and return it

function countOccurrences(array, value) {
    return array.reduce((a, v) => (v === value ? a + 1 : a + 0), 0);
}

// 2.
// Find difference between two dates
const date1 = new Date("2/12/2021");
const date2 = new Date("2/12/2002");
const difference = Math.abs((date2 - date1) / (1000 * 60 * 60 * 24));
console.log(difference + " : Days");

// 3.
// Finding the Factorial of a number
function findFactorial(num) {
    if (num < 0)
        return "Error!!!";
    else if (num === 0)
        return 1;
    return (num * findFactorial(num - 1));
}

// 4.
// Converting RGB to Hex Color
const convertRGBToHex = (r, g, b) => ((r << 16) + (g << 8) + b).toString(16).padStart(6, '0');
let hex = convertRGBToHex(255, 0, 0);
console.log("Hex Color : " + hex);

// 5.
// Looping Over Objects properties and Values
let details = {
    fname: "Amit Kumar",
    lname: "Sahoo",
    age: 19,
    city: "Bhubaneswar",
    state: "Odisha"
}

for (let key in details) {
    console.log(key + " : " + details[key]);
}


// 6.
// Reverse a String a Number
const str = "Pronto Peter";
let reverse = [...str].reverse().join("");
console.log(reverse);

// 7.
// Check if Date is valid
const isValidDate = (...val) => !Number.isNaN(new Date(...val).valueOf());
isValidDate("December 28 , 2021 09:35:00");

// 8.
// Find day of the year
const dayOfYear = (date) => Math.floor(date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24;
dayOfYear(new Date());

// 9.
// Copy to Clipboard
const clipboard = (text) => navigator.clipboard.writeText(text);
clipboard("Pronto Sebastian");


// 10.
// Clear All Cookies
const clearAllCookies = document.cookie.split(';').forEach(cookie =>
    document.cookie = cookie.replace(/^+/, '').replace(/=.*/, `=;expires= ${new Date(0).toUTCString()};path=/`));

// 11.
// Random Hex Generator
const randomHex = () => `#${(Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0"))}`

// 12.
// Check if a Number is Even or Odd
const isEven = num => num % 2 === 0;

// 13.
// Get Selected Text
const getSelectedText = () => window.getSelection().toString();

// 14.
// Showed Unsaved Changes Alert
window.addEventListener('beforeunload', event => {
    event.preventDefault();
    event.returnValue = '';
})


// 15.
// Flashing Title Notifications
let showingAlert = false;
const interval = setInterval(() => {
    document.title = showingAlert ? 'Message' : '(x) Unread Messages';

    showingAlert = !showingAlert;
}, 1000);





