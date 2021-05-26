// Using a Type Guard

// For pimitive values, the typeof keyword can be used to test 
// for a specific type without needing a type assertion.

function calculateTax(amount: number, format: boolean): string | number {
    const calcAmount = amount * 1.2;
    return format ? `$${calcAmount.toFixed(2)}` : calcAmount;
}

let taxValue = calculateTax(100, false);

if (typeof taxValue === "number") {
    console.log(`Number Value" ${taxValue.toFixed(2)}`);
}   else if (typeof taxValue === "string") {
    console.log(`String Value" ${taxValue.charAt(0)}`);
}

// To test a type, the typeof keyword is applied to a value, 
// producing a  string that can be compared to the names of the
// primitive JavaScript types, such as number and boolean.

// Note: The typeof keyword can be used only with the JS 
// primitve types. A different approach needed to differentiate
// btw objects.

// The compiler is adept at recognizing type guard statements, 
// even when they are not in a conventional if...else block. 

// the next commit produces the same result but uses a switch
// statement to differentiate btw types. Within each block, the
// compiler treats taxValue as though it has been defined with
// only the type selected by the case statement.