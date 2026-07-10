// let fruits = ["Apple", "Mango", "Banana", "Orange"];

// fruits.splice(1, 2);

// console.log(fruits);

// Output = ["Apple", "Orange"]

// কেন?
// Index:    0       1        2         3
//         Apple   Mango   Banana    Orange

// ==============================================

// let fruits = ["Apple", "Banana"];

// fruits.splice(1, 0, "Mango");

// console.log(fruits);

// Output = ["Apple", "Mango", "Banana"]

// এখানে

// Start = 1
// Delete = 0 (কিছুই delete করবে না)
// "Mango" add করবে।

// =================================================


// splice() কী return করে?


let fruits = ["Apple", "Mango", "Banana"];

let removed = fruits.splice(1, 1);

console.log(removed);
console.log(fruits);

// Output

// ["Mango"]

// ["Apple", "Banana"]

// অর্থাৎ splice()
// যেগুলো remove করেছে, সেগুলোর array return করে।
