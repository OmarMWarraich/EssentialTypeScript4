"use strict";
// Using the Wrong type in src/index.ts
Object.defineProperty(exports, "__esModule", { value: true });
const product_1 = require("./product");
const cart_1 = require("./cart");
const formatters_1 = require("./formatters");
const debug_1 = require("debug");
let kayak = new product_1.SportsProduct(1, "Kayak", 275, product_1.SPORT.Watersports);
let hat = new product_1.SportsProduct(2, "Hat", 22.10, product_1.SPORT.Running, product_1.SPORT.Watersports);
let ball = new product_1.SportsProduct(3, "Soccer Ball", 19.50, product_1.SPORT.Soccer);
let cart = new cart_1.Cart("Bob");
cart.addProduct(kayak, 1);
cart.addProduct(hat, 1);
cart.addProduct(hat, 2);
formatters_1.writeMessage("Test Message");
// The compiler relies entirely on the type declaration file to describe the contents of 
// the formatters module. A declaration statement in the formatters.d.ts is required to
// make the writeMessage function visible to the compiler.
// The compiler relies entirely on the type declaration file to describe the contents of 
// the formatters module. A declaration statement in the formatters.d.ts is required to
// make the writeMessage function visible to the compiler.
formatters_1.sizeFormatter("Cart", cart.itemCount);
formatters_1.costFormatter("Cart", `${cart.totalPrice}`);
let db = debug_1.default("Example App");
db.enabled = true;
db("Message:%o", "Test message");
// The TS compiler will locate the declaration file because pure JS doesnt require the no. 
// of arguments used to invoke a function matches the no. of parameters it defines. 
// You dont have to create a deliberate error to check that the compiler has found the 
// declaration file. Instead, open a new comman propmpt, navigate to the usingjs folder,
// and run the command below.
// tsc --traceResolution
