let fruits = ["apple", "banana", "mango"];

for (let fruit of fruits) {
    console.log(fruit);
    
}

// outout =  apple
//        =  banana
//        =  mango

//        এটা কীভাবে কাজ করে?

// প্রথমে

// fruit = "Apple"

// তারপর

// fruit = "Banana"

// তারপর

// fruit = "Mango"

// শেষ element হয়ে গেলে loop বন্ধ।

// ====================================================

let numbers = [10, 20, 30, 40];

for (let number of numbers) {
    console.log(number);
}

// // outout =  10
//           =  20
//           =  30
//           =  40
        
// ===============================================

let text = "JavaScript";

for (let letter of text) {
    console.log(letter);
}

// Output

// J
// a
// v
// a
// S
// c
// r
// i
// p
// t


// ==============================================


let numbers = [10, 20, 30, 40];

let sum = 0;

for (let number of numbers) {
    sum += number;
}

console.log(sum);

// Output = 100

