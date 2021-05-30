// Using the Wrong type in src/index.ts


import { SportsProduct, SPORT } from './product';
import { Cart } from './cart';
import { sizeFormatter, costFormatter, writeMessage } from "./formatters";
import debug from "debug";

let kayak = new SportsProduct(1, "Kayak", 275, SPORT.Watersports);
let hat = new SportsProduct(2, "Hat", 22.10, SPORT.Running, SPORT.Watersports);
let ball = new SportsProduct(3, "Soccer Ball", 19.50, SPORT.Soccer);

let cart = new Cart("Bob");
cart.addProduct(kayak, 1);
cart.addProduct(hat, 1);
cart.addProduct(hat, 2);
writeMessage("Test Message");


// The compiler relies entirely on the type declaration file to describe the contents of 
// the formatters module. A declaration statement in the formatters.d.ts is required to
// make the writeMessage function visible to the compiler.

// The compiler relies entirely on the type declaration file to describe the contents of 
// the formatters module. A declaration statement in the formatters.d.ts is required to
// make the writeMessage function visible to the compiler.

sizeFormatter("Cart", cart.itemCount);
costFormatter("Cart", `${cart.totalPrice}`);

let db = debug("Example App");
db.enabled = true;
db("Message:%o", "Test message");

// The TS compiler will locate the declaration file because pure JS doesnt require the no. 
// of arguments used to invoke a function matches the no. of parameters it defines. 

// You dont have to create a deliberate error to check that the compiler has found the 
// declaration file. Instead, open a new comman propmpt, navigate to the usingjs folder,
// and run the command below.

// tsc --traceResolution