// Using String Enums

// The default implementation of enums represents each value with 
// a number, but a compiler can also use string values for enums.

function calculateTax(amount: number): number {
    return amount * 1.2;
}

function writePrice(product: string, price: number): void {
    console.log(`Price for ${product}: $${price.toFixed(2)}`);
}

enum OtherEnum { First = 10, Two = 20 }
enum Product { Hat= OtherEnum.First + 1, Gloves = 20, Umbrella = Hat + Gloves }

let productValue: Product = 0;
let productName: string = Product[productValue];
console.log(`Value: ${productValue}, Name: ${productName}`);

enum City { London = "London", Paris = "Paris", NY = "NewYork"}
console.log(`City: ${City.London}`);

// A string values must be provided for every enum value name, but 
// the advantage of using string values is that they are easier to
// recognize during debugging or in log files.