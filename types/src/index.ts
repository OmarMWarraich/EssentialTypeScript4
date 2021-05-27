// Overloading Function Types

// Type Unions make it possible to define a range of types for
// function parameters and results, but they don't allow the
// relationship between them to be expressed accurately.

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
if (typeof taxAmount === 'number') {
    writeValue("Tax value", taxAmount);
}

// The type annotation describes the types that the calculateTax
// function will accept, telling users that the function will 
// accept either a number or null and will return a number or null.
// The information provided by the type unions is correct but does
// not fully describe the situation. 