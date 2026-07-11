// Parameters


// Parameter	                             কাজ
// accumulator	                             আগের result জমা রাখে
// currentValue	                             বর্তমান element
// initialValue                              accumulator-এর শুরুর value


// =============================================================

let numbers = [10, 20, 30];

let sum = numbers.reduce((acc, current) => {
    return acc + current;
}, 0);

console.log(sum);


// Output = 60

// ভিতরে কী হচ্ছে?

// Step	            acc	         current	Return
// Start             	0	             -      	-
// 1	                0	             10        	10
// 2	                10	             20     	30
// 3	                30              30	        60

// ==================================================================

// সব String জোড়া লাগানো

let words = ["I", "Love", "JavaScript"];

let sentence = words.reduce((acc, word) => acc + " " + word);

console.log(sentence);

// Output = I Love JavaScript

// ===================================================================

let numbers = [5, 12, 3, 20, 8];

let max = numbers.reduce((acc, current) => {
    return current > acc ? current : acc;
});

console.log(max);

//  Output = 20

// =================================================================

// Object Array

let products = [
    {name: "Laptop", price: 50000},
    {name: "Mouse", price: 800},
    {name: "Keyboard", price: 1500}
];

let total = products.reduce((acc, product) => {
    return acc + product.price;
}, 0);

console.log(total);

// Output = 52300