// Using Nullable Types

// There is a hole in the TS static type sys: the JS null & undefined types.
// The null type can only be assigned the null value and is used to
// represent sth that doesnt exist or is invalid. The undefined value
// can only be assigned the undefined value and is used when a 
// variable has been defined but not yet assigned a value.

// The problem is that, by default, TS treats null and undefined as
// legal values for all types. The reason for this is convenience
// because a lot of JS code that may be required for integration
// into an application uses these values as part of its normal operation
// but it does lead to inconsitencies in type checking.

function calculateTax(amount: number, format: boolean): string | number {
    if (amount === 0) {
        return null;
    }
    const calcAmount = amount * 1.2;
    return format ? `$${calcAmount.toFixed(2)}` : calcAmount;
}

let taxValue: string | number = calculateTax(0, false);

switch (typeof taxValue) {
    case "number":
        console.log(`Number Value: ${taxValue.toFixed(2)}`);
        break;
    case "string":
        console.log(`String Value: ${taxValue.charAt(0)}`);
        break;
    default: 
        let value: never = taxValue;
        console.log(`Unexpected type for value: ${value}`);
}

let newResult: unknown = calculateTax(200, false);
let myNumber: number = newResult as number;
console.log(`Number value: ${myNumber.toFixed(2)}`);

// Unlike the previous commit, the unknown value is really a number 
// so the code doesnt generate a runtime error.