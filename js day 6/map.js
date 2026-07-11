let numbers = [1, 2, 3, 4];

let result = numbers.map((number) => {
    return number * 2;
});

console.log(result);

// Output =[2, 4, 6, 8]

// ===============================================================

let numbers = [1,2,3,4];

let result = numbers.map(number => number * 2);

console.log(result);

// Output = [2,4,6,8]

// ==============================================================

let numbers = [2,4,6];

let square = numbers.map(number => number ** 2);

console.log(square);

// Output =  [4,16,36]

// ===============================================================

// Welcome Message


let names = ["Rahim","Karim","Hasan"];

let message = names.map(name => "Welcome " + name);

console.log(message);

// Output =[
// "Welcome Rahim",
// "Welcome Karim",
// "Welcome Hasan"
// ]

// ============================================================

