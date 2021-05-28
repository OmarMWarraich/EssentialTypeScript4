import { Person, Product } from './dataTypes';

let people = [new Person("Bob Smith", "London"),
    new Person("Dora Peters", "New York")];
let products = [new Product("Running Shoes", 100), new Product("Hat", 25)];

[...people, ...products].forEach(item => console.log(`Item: ${item.name}`));

// The listing uses an import statement to declare dependencies on the Person and Product
// classes defined in the dataTypes module. 