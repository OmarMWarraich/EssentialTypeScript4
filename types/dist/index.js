// Defining Void Functions
// Functions that do not produce results are declared using the
// void type.
function calculateTax(amount, discount = 0, ...extraFees) {
    return (amount * 1.2) - (discount)
        + extraFees.reduce((total, val) => total + val, 0);
}
function writeValue(label, value) {
    console.log(`${label}: ${value}`);
}
writeValue("Tax value", calculateTax(100, 0));
// The writeValue function doesn't return a result and has been
// annotated with the void type. Using void ensure that the
// compiler will warn you if the result keyword is used or if the
// function is used to assign a value.
