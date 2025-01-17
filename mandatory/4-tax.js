/*
  SALES TAX
  =========
  A business requires a program that calculates how much the price of a product is including sales tax
  Sales tax is 20% of the price of the product.
*/

// I start with a function calculateSalesTax with the value sales. Inside the brackets, I use the let variables tax that equals 
// sales * 0.2 and total that equals sales + tax and then I return the total. It prints 20.

function calculateSalesTax(sales) {
  let tax = sales * 0.2;
  let total = sales + tax;
  return total;
}

let sales = 100;
function calculateSalesTax(sales) {
  let tax = sales * 0.2;
  let total = sales + tax;
  return total;
}

It prints: 20
100

// I start with a let variable sales that equal 200. Then a function calculateSalesTax with the value sales. Inside the brackets, 
// I use the let variables tax that equals sales * 0.2 and total that equals sales + tax and then I return the total. 
// It prints 40.

let sales = 200;
function calculateSalesTax(sales) {
  let tax = sales * 0.2;
  let total = sales + tax;
  return total;
}
It prints: 40
160 + 40 = 200


// I start with a let variable sales that equal 150. Then a function calculteSalesTax with the value sales. Inside the brackets 
// I use the let variables tax that equals sales * 0.2 and total that equals sales + tax and the I return total.
// It prints 30


let sales = 150;
function calculateSalesTax(sales) {
  let tax = sales * 0.2;
  let total = sales + tax;
  return total;
}
It prints: 30
30 + 120 = 150

// I start with a let variable sales that equal 500. Then a function calculateSalesTax with the value sales. Inside the brackets
// I use the let variables tax that equals sales * 0.2 and total that equals sales + tax and then return total.
// It prints 500

let sales = 500
function calculateSalesTax(sales) {
  let tax = sales * 0.2;
  let total = sales + tax;
  return total;
}
It prints: 100
400 + 100 = 500

// I start with let variable sales that equals 400. Then a function calculateSalestax with the value sales. Inside the brackets
// I use the let variable tax that equals sales * 0.2 and total that equals sales + tax and the return total.
// It prints 80.

let sales = 400;
function calculateSalesTax(sales) {
  let tax = sales * 0.2;
  let total = sales + tax;
}
It prints: 80
320 + 80 = 400;

/*
  CURRENCY FORMATTING
  ===================
  The business has informed you that prices must have 2 decimal places
  They must also start with the currency symbol
  Write a function that adds tax to a number, and then transforms the total into the format £0.00

  Remember that the prices must include the sales tax (hint: you already wrote a function for this!)
*/

function addTaxAndFormatCurrency(sales) {
return "£" + calculateSalesTax(sales).toFixed(2);
}

/* 
===================================================
======= TESTS - DO NOT MODIFY BELOW THIS LINE =====

There are some Tests in this file that will help you work out if your code is working.

To run the tests for just this one file, type `npm test -- --testPathPattern 4-tax` into your terminal
(Reminder: You must have run `npm install` one time before this will work!)
===================================================
*/

test("calculateSalesTax for £15", () => {
  expect(calculateSalesTax(15)).toEqual(18);
});

test("calculateSalesTax for £17.50", () => {
  expect(calculateSalesTax(17.5)).toEqual(21);
});

test("calculateSalesTax for £34", () => {
  expect(calculateSalesTax(34)).toEqual(40.8);
});

test("addTaxAndFormatCurrency for £15", () => {
  expect(addTaxAndFormatCurrency(15)).toEqual("£18.00");
});

test("addTaxAndFormatCurrency for £17.50", () => {
  expect(addTaxAndFormatCurrency(17.5)).toEqual("£21.00");
});

test("addTaxAndFormatCurrency for £34", () => {
  expect(addTaxAndFormatCurrency(34)).toEqual("£40.80");
});
