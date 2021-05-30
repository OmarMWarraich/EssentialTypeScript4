"use strict";
// Using the Wrong type in src/index.ts
Object.defineProperty(exports, "__esModule", { value: true });
const product_1 = require("./product");
const cart_1 = require("./cart");
const formatters_1 = require("./formatters");
let kayak = new product_1.SportsProduct(1, "Kayak", 275, product_1.SPORT.Watersports);
let hat = new product_1.SportsProduct(2, "Hat", 22.10, product_1.SPORT.Running, product_1.SPORT.Watersports);
let ball = new product_1.SportsProduct(3, "Soccer Ball", 19.50, product_1.SPORT.Soccer);
let cart = new cart_1.Cart("Bob");
cart.addProduct(kayak, 1);
cart.addProduct(hat, 1);
cart.addProduct(hat, 2);
formatters_1.sizeFormatter("Cart", cart.itemCount);
formatters_1.costFormatter("Cart", `${cart.totalPrice}`);
// The new statement invokes the costFormatter function with two string arguments. The TS
// compiler doesnt understand this will cause a problem and cimpiles the code without
// error. But when the code is executed, the costFormatter function invokes the toFixed 
// method without checking that it has recieved a number value, causing the following
// runtime error:
// TypeError: cost.toFixed is not a function.
// issue resolution following two commits by providing the compiler with type information
// that describes the JS code so that its use can be checked during compilation. 2 approaches
// to describe types in JS code.
