const fruits = ["banana", "mango"];

fruits.unshift("apple");

console.log(fruits);

// // // // // output =  (3) ['apple', 'banana', 'mango']


// // // // // =================================================

const numbers = [30,40];

numbers.unshift(10,20);

console.log(numbers);

// // // // output =  (4) [10, 20, 30, 40]

// // // // ====================================================

const students = [];

students.unshift("MEhraz");

console.log(students);

// // // output =  ['MEhraz']


// // // ===================================================

const colors = ["Blue"];

colors.unshift("Red");

console.log(colors);

// // output =  (2) ['Red', 'Blue']

// // ========= unshift can return ? ===============

const fruits = ["banana"];

const result = fruits.unshift("apple");

console.log(result);
console.log(fruits);

// // output =  2
// //       (2) ['apple', 'banana']

// // কেন 2?

// // কারণ unshift() নতুন array return করে না, বরং নতুন length return করে।

// // এটা push()-এর মতোই।


// // =====================================

