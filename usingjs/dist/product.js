"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SportsProduct = exports.SPORT = exports.Product = void 0;
class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
        // no statements required
    }
}
exports.Product = Product;
var SPORT;
(function (SPORT) {
    SPORT[SPORT["Running"] = 0] = "Running";
    SPORT[SPORT["Soccer"] = 1] = "Soccer";
    SPORT[SPORT["Watersports"] = 2] = "Watersports";
    SPORT[SPORT["Other"] = 3] = "Other";
})(SPORT = exports.SPORT || (exports.SPORT = {}));
class SportsProduct extends Product {
    constructor(id, name, price, ...sportArray) {
        super(id, name, price);
        this.id = id;
        this.name = name;
        this.price = price;
        this._sports = sportArray;
    }
    usedForSport(s) {
        return this._sports.includes(s);
    }
    get sports() {
        return this._sports;
    }
}
exports.SportsProduct = SportsProduct;
// A Product class defined extended by the SportsProduct class adding features specific
// to sporting good. 
