// Using  an Iterator

// Iterators are objects that return a sequence of values. An iterator defines a function
// named next that returns an object with value and done properties: the value property
// returns the next value in the sequence, and the done property is set to true when the
// sequence is complete.


class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    toString() {
        return `toString: Name: ${this.name}, Price: ${this.price}`;
    }
}

function createProductIterator() {
    const hat = new Product("Hat", 100);
    const boots = new Product("Boots", 100);
    const umbrella = new Product("Umbrella", 23);

    let lastVal;

    return {
        next() {
            switch (lastVal) {
                case undefined:
                    lastVal = hat;
                    return { value: hat, done: false };
                    case hat:
                        lastVal = boots;
                        return { value: boots, done: false };
                    case boots:
                        lastVal = umbrella;
                        return { value: umbrella, done: false };
                    case umbrella:
                        return { value: undefined, done: true };

            }
        }
    }
}

let iterator = createProductIterator();
let result = iterator.next();
while (!result.done) {
    console.log(result.value.toString());
    result = iterator.next();
}

// The createProductIterator function returns an object that defines a next function.
// Each time the next method is called, a different Product object is returned, once 
// the set of objects has been exhausted, an object whose done property is true is 
// returned to indicate the end of the data.
// A while loop is used to process the iterator data, calling next after each project
// has been processed.