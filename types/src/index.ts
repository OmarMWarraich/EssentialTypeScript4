// Overloading Function Types

function calculateTax(amount: number): number;
function calculateTax(amount: null): null;
function calculateTax(amount: number | null): number | null
    {
        if (amount != null) {
            return amount * 1.2;
        }
        return null;
    } 

function writeValue(label: string, value: number): void {
    console.log(`${label}: ${value}`);
}

let taxAmount: number | null = calculateTax(100);
// if (typeof taxAmount === 'number') {
    writeValue("Tax value", taxAmount);
// }

// Each type overload defines a combination of types supported by
// the function, describing a mapping between the parameters and the
// result they produce.

// The Type Overloads replace the function definition as the type
// information used by the TypeScript compiler, which means that
// only those combinations of types can be used. 

// When the function is invoked, the compiler can determine the
// result type based on the type of the arguments provided, 
// allowing the taxAmount variable to be defined as a number and 
// removing the need for the type guard to pass on the result to
// the writeValue function. 

// The compiler knows that taxAmount can only be a number and 
// doesn't require the type to be narrowed.