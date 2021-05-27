// Working with Tuples

// Basic tuples are fixed-length arrays where each element in the
// array can have a different type. Tuples are a data structure
// that is provided by the TS compiler implemented using regular JS
// arrays in the compiled code. 

function calculateTax(amount: number): number {
    return amount * 1.2;
}

function writePrice(product: string, price: number): void {
    console.log(`Price for ${product}: $${price.toFixed(2)}`);
}

let hat: [string, number] = ["Hat", 100];
let gloves: [string, number] = ["Gloves", 75];

writePrice(hat[0], hat[1]);
writePrice(gloves[0], gloves[1]);

// Tuples are defined using square brackets containing the types for
// each element, spearated by commas. 

// Tuples must be defined with type annotations; otherwise, the 
// compiler will assume that a regular array with a type that is the
// union of each value used during initialization. Without the type
// annotation, the compiler would assume that the type of the value
// assigned to the hat variable is [string | number], which would 
// denote a variable-length array in which every element can be 
// either a string or number value.