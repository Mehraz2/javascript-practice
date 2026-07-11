let numbers = [10, 20, 30, 40, 50];

let result = numbers.filter(number => number > 20);

console.log(result);

// Output = [30, 40, 50]

// ========================================================

let numbers = [1,2,3,4,5,6];

let even = numbers.filter(number => number % 2 === 0);

console.log(even);

// Output = [2,4,6]

// ===========================================================

// Odd Number

let numbers = [1,2,3,4,5,6];

let odd = numbers.filter(number => number % 2 !== 0);

console.log(odd);

// Output = [1,3,5]

// =============================================================

// Object Array

let users = [
    {name: "Rahim", age: 18},
    {name: "Karim", age: 22},
    {name: "Hasan", age: 16}
];

let adults = users.filter(user => user.age >= 18);

console.log(adults);

// output = [
            // {name: "Rahim", age: 18},
            // {name: "Karim", age: 22}
            //  ]

//=================================================================

// Price Filter

let prices = [100, 500, 800, 150, 1000];

let expensive = prices.filter(price => price >= 500);

console.log(expensive);

// Output = [500, 800, 1000]

