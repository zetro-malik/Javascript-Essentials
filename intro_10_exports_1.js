
// To use this, remove "type":"module" from package.json file

const object = require('./intro_10_exports_2');  // object will contain all exports
const { add, subtract } = require('./intro_10_exports_2');

const result1 = object.add(5, 3);
const result2 = subtract(10, 4);

console.log(`Result of addition: ${result1}`);
console.log(`Result of subtraction: ${result2}`);