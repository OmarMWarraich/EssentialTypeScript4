// Using  a Generator

// Writing iterators can be awkward because the code has to maintain state data to keep
// track of the current position in the sequence each time the next function is invoked.
// A similar approach is to use a generator, which is a function that is invoked once 
// and uses the yield keyword to produce the values in the sequence.


class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    toString() {
        return `toString: Name: ${this.name}, Price: ${this.price}`;
    }
}

// Generator functions are dentoed with an asterik.

function* createProductIterator() {
    yield new Product("Hat", 100);
    yield new Product("Boots", 100);
    yield new Product("Umbrella", 23);
}

let iterator = createProductIterator();
let result = iterator.next();
while (!result.done) {
    console.log(result.value.toString());
    result = iterator.next();
}

// Generators are consumed in the same way as iterators. JS runtime creates the next
// function and executes the generator function until it reaches the yield keyword,
// which provides a value in the sequence. Execution of the generator function continues
// gradually each time the next function is invoked. When there are no more yield 
// statements to execuute, an object whose done property is true is created automatically.
// Generators can be used with the spread operator, allowing the sequence to be used as a 
// set of function parameters or to populate an array.