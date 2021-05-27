// Using Enums

// An enum allows a collection of values to be used by name, which
// makes code easier to read and ensures that a fixed set of values
// is used consistently. Like Tuples, enums are a feature that is
// provided by the TS compiler.

function calculateTax(amount: number): number {
    return amount * 1.2;
}

function writePrice(product: string, price: number): void {
    console.log(`Price for ${product}: $${price.toFixed(2)}`);
}

enum Product { Hat, Gloves, Umbrella }

let products: [Product, number][] = [[Product.Hat, 100], [Product.Gloves, 75]];

products.forEach((prod: [Product, number]) => {
    switch(prod[0]) {
        case Product.Hat:
            writePrice("Hat", calculateTax(prod[1]));
            break;
        case Product.Gloves:
            writePrice("Gloves", calculateTax(prod[1]));
            break;
        case Product.Umbrella:
            writePrice("Umbrella", calculateTax(prod[1]));
            break;
    }
});

// An enum is deined using the enum keywrd, followed by a name, 
// followed by a list of values in curly braces.

// The enum values are accessed in the form <enum>.<value> so that
// the Hat value defined by the Product enum is accessed as 
// Product.Hat

// An enum is used like any other type.