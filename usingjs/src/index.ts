// Using the Wrong type in src/index.ts


import { SportsProduct, SPORT } from './product';
import { Cart } from './cart';
import { sizeFormatter, costFormatter } from "./formatters";

let kayak = new SportsProduct(1, "Kayak", 275, SPORT.Watersports);
let hat = new SportsProduct(2, "Hat", 22.10, SPORT.Running, SPORT.Watersports);
let ball = new SportsProduct(3, "Soccer Ball", 19.50, SPORT.Soccer);

let cart = new Cart("Bob");
cart.addProduct(kayak, 1);
cart.addProduct(hat, 1);
cart.addProduct(hat, 2);

sizeFormatter("Cart", cart.itemCount);
costFormatter("Cart", `${cart.totalPrice}`);

// The new statement invokes the costFormatter function with two string arguments. The TS
// compiler doesnt understand this will cause a problem and cimpiles the code without
// error. But when the code is executed, the costFormatter function invokes the toFixed 
// method without checking that it has recieved a number value, causing the following
// runtime error:

// TypeError: cost.toFixed is not a function.

// issue resolution following two commits by providing the compiler with type information
// that describes the JS code so that its use can be checked during compilation. 2 approaches
// to describe types in JS code.