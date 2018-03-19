const uniqid = require('uniqid');

console.log(uniqid());
console.log(uniqid().substr(0, 5));
console.log(uniqid().substr(5, 5));