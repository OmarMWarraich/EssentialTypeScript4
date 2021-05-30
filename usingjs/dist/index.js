"use strict";
// Using Packages that Include Type Declarations
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// As TS has become more popular, packages have started to include declaration files so
// that no additional downloads are required. The easiest way to see whether a project 
// includes a declaration file is to install the package and look in the node_modules
// folder. As a demo, open a new command prompt, navigate to the usingjs folder,add pkg.
// npm install chalk@4.1.0
// The Chalk package provides styles for console output. Examine the contents of the
// node_modules/chalk folder, and you will see that it contains a types folder with an
// index.d.ts file. The node_modules/chalk/package.json file contains a types property
// that tells the TypeScript compiler where to find the declaration file.
//...
//"types": "types/index.d.ts",
//...
// Adding Statements in src/index.ts
const product_1 = require("./product");
const cart_1 = require("./cart");
const formatters_1 = require("./formatters");
const chalk_1 = __importDefault(require("chalk"));
let kayak = new product_1.SportsProduct(1, "Kayak", 275, product_1.SPORT.Watersports);
let hat = new product_1.SportsProduct(2, "Hat", 22.10, product_1.SPORT.Running, product_1.SPORT.Watersports);
let ball = new product_1.SportsProduct(3, "Soccer Ball", 19.50, product_1.SPORT.Soccer);
let cart = new cart_1.Cart("Bob");
cart.addProduct(kayak, 1);
cart.addProduct(hat, 1);
cart.addProduct(hat, 2);
formatters_1.sizeFormatter("Cart", cart.itemCount);
formatters_1.costFormatter("Cart", `${cart.totalPrice}`);
console.log(chalk_1.default.greenBright("Formatted message"));
console.log(chalk_1.default.notAColor("Formatted message"));
// One of the features provided by the Chalk package is coloring for text written to the
// console. The first statement tells Chalk to apply the greenBright color, and the 
// second statement uses a nonexistent property. When the changes to the index.ts file
// are saved, the compiler will use the declaration file and report the following error:
// src/index.ts(20,19): error TS2339: Property 'notAColor' does not exist on type 
// 'Chalk & { supportsColor: ColorSupport; }'. 
// To enable the compiler support for importing the functionality from the Chalk package,
// add the config settings.
