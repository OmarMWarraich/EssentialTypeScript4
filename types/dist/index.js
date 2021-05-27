// Disable Implicit Returns
// JS has an unusually relaced approach to function results, such
// that a function will return undefined for any path through the
// funtion's code that doesnt reach a statement with the return 
// keyword, which is known as the implicit return feature.
// The Type Guard used to filter out null values means that there 
// is a path through the function's code that doesnt reach a 
// return statement and so the function will return a number if 
// the amount parameter isnt null and will return undefined if 
// the amount parameter is null. 
function calculateTax(amount, discount = 0, ...extraFees) {
    if (amount != null) {
        return (amount * 1.2) - (discount)
            + extraFees.reduce((total, val) => total + val, 0);
    }
}
let taxValue = calculateTax(null, 0);
console.log(`Tax value: ${taxValue}`);
// When the noImplicitReturns setting is true, the compiler will
// report an error when there are paths through functions that dont 
// explicitly produce a result with the result keyword or throw an
// error. Save the change to the tsconfig.json file.
