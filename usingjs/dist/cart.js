"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cart = void 0;
class CartItem {
    constructor(product, quantity) {
        this.product = product;
        this.quantity = quantity;
        // no statements required
    }
    get totalPrice() {
        return this.quantity * this.product.price;
    }
}
class Cart {
    constructor(customerName) {
        this.customerName = customerName;
        this.items = new Map();
        // no statements required
    }
    addProduct(product, quantity) {
        if (this.items.has(product.id)) {
            let item = this.items.get(product.id);
            item.quantity += quantity;
            return item.quantity;
        }
        else {
            this.items.set(product.id, new CartItem(product, quantity));
            return quantity;
        }
    }
    get totalPrice() {
        return [...this.items.values()].reduce((total, item) => total += item.totalPrice, 0);
    }
    get itemCount() {
        return [...this.items.values()].reduce((total, item) => total += item.quantity, 0);
    }
}
exports.Cart = Cart;
// This file defines the Cart class which tracks a customer;s selection of Sports Product
// objects using a Map. 
