/*As a camp counselor, you enjoy treating your campers to ice cream after a hot week.

You need to budget accordingly though, so you'd like to write a program that helps you estimate the cost depending on the number of campers that week.
First, you're going to start with what you know and you'll store this information in variables.You know that the price for a single scoop is $2.50 and the number of campers you'll be treating this week is 15.*/

let price = 2.50;
let campers = 15;

// Let's now log our newly created variables to check that they store our intended values.
console.log(price);
console.log(campers);

// We're going to need to account for tax when we estimate the total later. County sales tax is 8%, let's create a variable to store that and log it to the console.
let taxRate = 0.08;
console.log(taxRate);

// Finally, let's set up the variable for our absolute maximum budget for this week's ice cream excursion: $40.
let budget = 40;
console.log(budget);


// We can now begin performing operations on our created variables.Let's start by calculating the subtotal, based on the number of campers and the price per cone. Don't worry about adding taxes, we'll add those later.
let total = price * campers;
console.log(total);

// Let's now determine whether the total exceeds our $40 budget and store the boolean result in a variable.
let totalExceedsBudget = total > budget;
console.log(totalExceedsBudget);

// Let's display the budget result on-screen.
console.log("Total Exceeds Budget? " + totalExceedsBudget);

// Our pre - tax total is within our budget, but what if we account for the 8 % tax ?

let totalTaxed = price * campers * (1 + taxRate);

// Finally, let's use a comparison operator to check that we incorporated the 8% tax and store this boolean result in a variable.

let taxApplied = totalTaxed > budget;
console.log("Tax Applied? " + taxApplied);
