import { sum } from "./calc";
let printMessage = (msg) => console.log(`Message: ${msg}`);
let message = ("Hello, TypeScript");
printMessage(message);
let total = sum(100, 200, 300);
console.log(`Total: ${total}`);
