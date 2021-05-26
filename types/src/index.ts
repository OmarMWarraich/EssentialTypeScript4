// Removing null from a Union with an Assertion

// Remember that unions present the intersection of the API of each
// individual type. The null and undefined values don't present any 
// properties or methods, which means that values for nullable type
// unions can't be used directly, even if non-null types have an 
// intersection of useful properties and methods. 

// A non-null assertion tells the compiler that a value isnt null, 
// which removes null from the type union and allows the intersection 
// if the other types to be used.

function calculateTax(amount: number, format: boolean): string | number | null {
    if (amount === 0) {
        return null;
    }
    const calcAmount = amount * 1.2;
    return format ? `$${calcAmount.toFixed(2)}` : calcAmount;
}

let taxValue: string | number = calculateTax(100, false)!;

switch (typeof taxValue) {
    case "number":
        console.log(`Number Value: ${taxValue.toFixed(2)}`);
        break;
    case "string":
        console.log(`String Value: ${taxValue.charAt(0)}`);
        break;
    default: 
        if (taxValue === null) {
            console.log("Value is null");
        } else {
            console.log(typeof taxValue);
            let value: never = taxValue;
            console.log(`Unexpected type for value: ${value}`);
        }        
}

// A non-null value is asserted by applying the ! character after 
// value. The assertion in the listing tells the compiler that the
// result from the calculateTax function will not be null, which
// allows it to be assigned to the taxValue variable, whose type
// is string | number.