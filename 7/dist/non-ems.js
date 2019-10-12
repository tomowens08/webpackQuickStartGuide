module.exports = {
 sayHello: () => {
 console.log('Hello World');
 }
 };

function sayHello() {
 import('./non-esm.js').then(module => {
 module.default.sayHello();
 });
 }