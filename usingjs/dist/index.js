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
formatters_1.writeMessage("Test Message");
// The compiler relies entirely on the type declaration file to describe the contents of 
// the formatters module. A declaration statement in the formatters.d.ts is required to
// make the writeMessage function visible to the compiler.
// The compiler relies entirely on the type declaration file to describe the contents of 
// the formatters module. A declaration statement in the formatters.d.ts is required to
// make the writeMessage function visible to the compiler.
