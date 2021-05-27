// Mixing Value Types in a Literal Value Type

// A literal value type can be made up of any combination of values
// that can be expressed literally, including enums.

function calculatePrice(quantity: 1 | 2, price: number): number {
    return quantity * price;
}

let total = calculatePrice(2, 19.99);
console.log(`Price: ${total}`);

function getRandomValue(): 1 | 2 | 3 | 4 {
    return Math.floor(Math.random() *4) + 1 as 1 | 2 | 3 | 4;
} 

enum City { London = "LON", Paris = "PAR", Chicago = "CHI" }

function getMixedValue(): 1 | "Hello" | true | City.London {
    switch (getRandomValue()) {
        case 1: 
            return 1;
        case 2: 
            return "Hello";
        case 3:
            return true;
        case 4: 
            return City.London;     
    }
}

console.log(`Value: ${getMixedValue()}`);

// The getRandomValue function returns one of four values, which are
// used by the getMixedValue function to produce its result. The 
// getMixedValue function shows how a literal value type can combine 
// values that would usually be considered separate types, using a 
// number value, a string value, a boolean value, and an enum value.