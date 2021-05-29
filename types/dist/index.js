"use strict";
// Changine Mapping Names and Types
Object.defineProperty(exports, "__esModule", { value: true });
let p = { name: "Kayak", price: 275 };
console.log(`Mapped type: ${p.name}, ${p.price}`);
let q = { name: "Kayak", price: "apples" };
console.log(`Changed type # 1: ${q.name}, ${q.price}`);
// The as keyword is combined with an expression that defines the property name. In this 
// case a template string is used to modify the existing name, with the result that is
//  =>  type ChangeNames {nameProperty: string;, priceProperty: number;}
let r = { nameProperty: "Kayak", priceProperty: 12 };
console.log(`Changed type # 2: ${r.nameProperty}, ${r.priceProperty}`);
