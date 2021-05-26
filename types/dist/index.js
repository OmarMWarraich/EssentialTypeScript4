// Using the Definitive Assignment Assertion
function calculateTax(amount, format) {
    if (amount === 0) {
        return null;
    }
    const calcAmount = amount * 1.2;
    return format ? `$${calcAmount.toFixed(2)}` : calcAmount;
}
let taxValue;
eval("taxValue = calculateTax(100, false)");
if (taxValue !== null) {
    let nonNullTaxValue = taxValue;
    switch (typeof taxValue) {
        case "number":
            console.log(`Number Value: ${taxValue.toFixed(2)}`);
            break;
        case "string":
            console.log(`String Value: ${taxValue.charAt(0)}`);
            break;
    }
}
else {
    console.log("Value is not a string or a number");
}
// The definitive assessment assertion is a ! character, but it is
// applied after the name when the variable is defined, unlike the 
// non-null assertion that is applied in expressions. Just as with
// the other assertions, you are responsible for ensuring that 
// a value really is assigned. You may encounter a runtime error
// if you use an assertion but don't perform an assignment. 
