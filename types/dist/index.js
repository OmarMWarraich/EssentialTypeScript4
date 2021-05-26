"use strict";
// Dynamic Types offer flexibility, but they can also lead 
// to problems. Here a fn with a set of statements invokn it.
function calculateTax(amount) {
    return amount * 1.2;
}
console.log(`${12} = ${calculateTax(12)}`);
console.log(`${"Hello"} = ${calculateTax("Hello")}`);
console.log(`${true} = ${calculateTax(true)}`);
// Easy to understand the function's assumption about its 
// parameter type when you can see the code next to the 
// statements that use it, but it's much harder when the
// function has been written by another programmer and is
// deep inside a complex project or package.
