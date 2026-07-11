// 


// Output = Apple
//        = Banana
//        = Mango


// ===================================================================

let fruits = ["Apple", "Banana", "Mango"];

fruits.forEach((fruit, index) => {
    console.log(index, fruit);
});


// Output = Apple
//        = Banana
//        = Mango

// =============================================================

let numbers = [5, 10, 15];

numbers.forEach((value, index, array) => {
    console.log(value);
    console.log(index);
    console.log(array);
});


// output = 5
//        = 0
//        = [5,10,15]
      
//        = 10
//        = 1
//        = [5,10,15]

//        = 15
//        = 2
//        = [5,10,15]

