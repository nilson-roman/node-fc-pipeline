const isPrime = require('./prime')

const response = isPrime(3) === true ? "Yes" : "No"
console.log("Testing application: Is number 3 a prime number? R.: " + response);
