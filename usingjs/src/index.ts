// Using the Wrong type in src/index.ts


import { SportsProduct, SPORT } from './product';
import { Cart } from './cart';
import { sizeFormatter, costFormatter, writeMessage } from "./formatters";

let kayak = new SportsProduct(1, "Kayak", 275, SPORT.Watersports);
let hat = new SportsProduct(2, "Hat", 22.10, SPORT.Running, SPORT.Watersports);
let ball = new SportsProduct(3, "Soccer Ball", 19.50, SPORT.Soccer);

let cart = new Cart("Bob");
cart.addProduct(kayak, 1);
cart.addProduct(hat, 1);
cart.addProduct(hat, 2);

sizeFormatter("Cart", cart.itemCount);
costFormatter("Cart", `${cart.totalPrice}`);
writeMessage("Test Message");


// The compiler relies entirely on the type declaration file to describe the contents of 
// the formatters module. A declaration statement in the formatters.d.ts is required to
// make the writeMessage function visible to the compiler.

// The compiler relies entirely on the type declaration file to describe the contents of 
// the formatters module. A declaration statement in the formatters.d.ts is required to
// make the writeMessage function visible to the compiler.
