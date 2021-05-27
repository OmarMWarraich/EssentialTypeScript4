// Allow a Null Parameter Value


function calculateTax(amount: number | null , discount: number = 0, ...extraFees:number[]) {
    if (amount != null) {
    return (amount * 1.2) - (discount)
        + extraFees.reduce((total, val) => total + val, 0);
    }
}


let taxValue = calculateTax(null, 0);
console.log(`Tax value: ${taxValue}`);

// A Type Guard is required to prevent the null value from being
// used with the multiplication operator. This can feel like an
// arduoud process when you start using TypeScript, but restricting
// nullable parameters can flush out problems that would othewise 
// produce unexpected results at runtime.