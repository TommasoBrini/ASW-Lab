exports.a = 'A';
module.exports.b = 'B';

console.log(exports === module.exports); // true
console.log(module.exports);             // { a: 'A', b: 'B' }
console.log(exports);                    // { a: 'A', b: 'B' }

exports = { c: 'C' };

console.log(exports === module.exports); // false
console.log(module.exports);             // { a: 'A', b: 'B' }
console.log(exports);                    // { c: 'C' }

