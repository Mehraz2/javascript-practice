pop element return=============

const fruits = ["Apple", "Banana", "Mango"];

const removed = fruits.pop();

console.log(removed);
console.log(fruits);


// output =  Mango
//         (2) ['Apple', 'Banana']

// ====================================================

const numbers = [10,20,30,40];

const removed = numbers.pop();

console.log(removed);
console.log(numbers.length);
console.log(numbers);

// output = 40
//             3
//          (3) [10, 20, 30]



// // 1

const colors = ["Red", "Blue", "Green"];

colors.pop("Green");

console.log(colors);

// output = (2) ['Red', 'Blue']

// ============================================

