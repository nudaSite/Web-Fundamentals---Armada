// Task 1: Calculate the Total Cost of Items
let item1 = 10;
let item2 = 15;
let item3 = 12;

let totalCost = (item1 + item2 + item3);

console.log("The total cost of the items is:" + " " + "$" + totalCost);


// Task 2: Calculate the Average of Three Numbers
let num1 = 5;
let num2 = 10;
let num3 = 7;

let average =  (num1 + num2 + num3) / 3;

console.log("The average is:", average);


// Task 3: Odd or Even Checker
let num = 13;

if (num % 2 === 0) {
    console.log(num + " is an even number.");
} else {
    console.log(num + " is an odd number.");
}


// Task 4: Calculate Discounts
let price = 500;
let discount = 45;

let discountAmount = (price * discount) / 100;
let discountedPrice = (price - discountAmount);

console.log("The discounted price is:" + " " + "$" + discountedPrice);


// Bonus Task (Optional): Reverse Percentage Calculation
let finalPrice = 100;
let discountPercentage = 20;

let originalPrice = finalPrice / (1 - discountPercentage / 100);

console.log("The original price before the discount was:" + " " + "$" + originalPrice);