"use strict";
// Using Conditional Types in Generic Classes
Object.defineProperty(exports, "__esModule", { value: true });
// Conditional types can be used to express the relationship between a method or function's
// paramter types and the results it produces. This is a more concise alternative to 
// the function type overloading.
// Use Conditional Types in Generic Classes
const dataTypes_1 = require("./dataTypes");
class Collection {
    constructor(...initialItems) {
        this.items = initialItems || [];
    }
    total(propName, format) {
        let totalValue = this.items.reduce((t, item) => t += Number(item[propName]), 0);
        return format ? `$${totalValue.toFixed()}` : totalValue;
    }
}
let data = new Collection(new dataTypes_1.Product("Kayak", 275), new dataTypes_1.Product("Life Jacket", 48.95));
let firstVal = data.total("price", true);
console.log(`Formatted value: ${firstVal}`);
let secondVal = data.total("price", false);
console.log(`Unformatted value: ${secondVal}`);
// The Collection<T> class uses an array to store objects whose type is specified by the
// generic type parameter named T. The total method defiens two generic type parameters: P,
// which specifies a property to use to create a total, and U, which specifies whether the 
// result should be formatted. The result of the total method is a conditional type, which
// is resolved using the value provided for the type parameter U.
//...
//total<P extends keyof T, U extends boolean>(propName: P, format: U): resultType<U>{}
//...
//The use of the conditional type means that the result of the total method is determined
// by the argument provided for the type paramter U. Since the compiler can infer U from
// the value provided for the argument format, the method can be invoked like this.
//...
//let firstVal: string = data.total("price", true);
//...
// When arg 4 format param is true, the conditional type resolves to set the result type
// of the total method to string. This matches the data type produced by method implementation.
//...
// return format ? `$${totalValue.toFixed()}` : totalValue as any;
//...
// When arg 4 format param is false,the conditional type resolves to set the result type
// of the total method to number.allowing the method to rtrn da unformatted value number.
//...
// return format ? `$${totalValue.toFixed()}` : totalValue as any;
