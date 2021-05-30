"use strict";
// Removing Statement in src/index.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const product_1 = require("./product");
const cart_1 = require("./cart");
const tsFormatters_1 = require("./tsFormatters");
const chalk_1 = __importDefault(require("chalk"));
let kayak = new product_1.SportsProduct(1, "Kayak", 275, product_1.SPORT.Watersports);
let hat = new product_1.SportsProduct(2, "Hat", 22.10, product_1.SPORT.Running, product_1.SPORT.Watersports);
let ball = new product_1.SportsProduct(3, "Soccer Ball", 19.50, product_1.SPORT.Soccer);
let cart = new cart_1.Cart("Bob");
cart.addProduct(kayak, 1);
cart.addProduct(hat, 1);
cart.addProduct(hat, 2);
tsFormatters_1.sizeFormatter("Cart", cart.itemCount);
tsFormatters_1.costFormatter("Cart", `${cart.totalPrice}`);
console.log(chalk_1.default.greenBright("Formatted message"));
// console.log(chalk.notAColor("Formatted message"));
// The code will be compiled and executed, with the statement formatted by Chalk displayed
// in
