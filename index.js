// Write your solution in this file!

// 1. Declare customerName in global scope
var customerName = 'bob';

// 2. Modify customerName to uppercase
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// 3. Set bestCustomer in global scope
function setBestCustomer() {
  bestCustomer = 'not bob';
}

// 4. Overwrite bestCustomer
function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

// 5. Attempt to reassign constant (should throw error)
function changeLeastFavoriteCustomer() {
  const leastFavoriteCustomer = 'initial value';
  leastFavoriteCustomer = 'new value'; // This will throw an error when called
}