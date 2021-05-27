// Processing Tuples

// The restrictions on the no. of elements and the element types are
// enforce entirely by the TS compiler, and, at rumtime, a tuple is
// implemented as a regular JavaScript array. means tuples can be used 
// with the standard JS array features.

function calculateTax(amount: number): number {
    return amount * 1.2;
}

function writePrice(product: string, price: number): void {
    console.log(`Price for ${product}: $${price.toFixed(2)}`);
}

let hat: [string, number] = ["Hat", 100];
let gloves: [string, number] = ["Gloves", 75];

hat.forEach((h: string | number) => {
    if (typeof h === "string") {
        console.log(`String: ${h}`);
    } else {
        console.log(`Number: ${h.toFixed(2)}`);
    }
});

// To process all the tuple values, the function passed forEach method
// must recieve string | number values, which are then narrowed with
// a type guard. 

// Since tuples are arrays, they can be destructured to access 
// individual values, which can make tuples easier to work with.