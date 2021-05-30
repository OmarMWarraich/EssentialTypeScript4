// Using Packages that Include Type Declarations

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

import { SportsProduct, SPORT } from './product';
import { Cart } from './cart';
import { sizeFormatter, costFormatter, writeMessage } from "./formatters";
import debug from "debug";
import chalk from "chalk";

let kayak = new SportsProduct(1, "Kayak", 275, SPORT.Watersports);
let hat = new SportsProduct(2, "Hat", 22.10, SPORT.Running, SPORT.Watersports);
let ball = new SportsProduct(3, "Soccer Ball", 19.50, SPORT.Soccer);

let cart = new Cart("Bob");
cart.addProduct(kayak, 1);
cart.addProduct(hat, 1);
cart.addProduct(hat, 2);

sizeFormatter("Cart", cart.itemCount);
costFormatter("Cart", `${cart.totalPrice}`);

console.log(chalk.greenBright("Formatted message"));
console.log(chalk.notAColor("Formatted message"));

// One of the features provided by the Chalk package is coloring for text written to the
// console. The first statement tells Chalk to apply the greenBright color, and the 
// second statement uses a nonexistent property. When the changes to the index.ts file
// are saved, the compiler will use the declaration file and report the following error:

// src/index.ts(20,19): error TS2339: Property 'notAColor' does not exist on type 
// 'Chalk & { supportsColor: ColorSupport; }'. 

// To enable the compiler support for importing the functionality from the Chalk package,
// add the config settings.