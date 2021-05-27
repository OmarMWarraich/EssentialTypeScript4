// Return a Result

function calculateTax(amount: number | null , discount: number = 0, ...extraFees:number[]) {
    if (amount != null) {
    return (amount * 1.2) - (discount)
        + extraFees.reduce((total, val) => total + val, 0);
    } else {
        return undefined;
    }
}


let taxValue = calculateTax(null, 0);
console.log(`Tax value: ${taxValue}`);

// Disabling implicit return ensures that functions have to be 
// explicit about the results they produce. 