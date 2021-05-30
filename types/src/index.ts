// Using Conditional Types with Type Unions

// Conditional Types can be used to filter type unions, allowing types to be easily selected
// or excluded from the set that the union contains.

// Filtering a Type Union

import { City, Person, Product, Employee } from './dataTypes';

type Filter<T, U> = T extends U ? never : T;

function FilterArray<T, U>(data: T[],
        predicate: (item) => item is U): Filter<T, U>[]{
            return data.filter(item => !predicate(item)) as any;
        }

let dataArray = [new Product("Kayak", 275), new Person("Bob", "London"),
    new Product("Lifejacket", 27.50)];

function isProduct(item: any): item is Product {
    return item instanceof Product;
}

let filteredData: Person[] = FilterArray(dataArray, isProduct);
filteredData.forEach(item => console.log(`Person: ${item.name}`));

// when conditional type provided with type union, TS compiler distributes the condition
// over each type in the union, creating what is known as a distributive conditional 
// type. This effect is applied when a conditional type is used like a type union, like this
// e.g.,
//...
// type filteredUnion = Filter<Product } Person, Product>
//...
// TS compiler applies the conditional type to each type in the union separately and then
// create a union of the result like this:...
//...
//  type filteredUnion = Filter<Product | Person, Product>
//...
//  TS compiler applies conditional type to each type in the union separately and then
// create a union of the results like this.
//...
//   type filteredUnion = Filter<Product, Product> | Filter<Person, Product>
//...
//   The Filter<T, U> conditional type evaluates to never when the first type parameter
// is the same as the second, producing this result:
//...
//   type filterdUnion = never | Person
//...
//   It isnt possible to have a union with never, so the compiler omits it from the union,
//   with the result that Filter<Product | Person, Product> is equivalent to this type.
//...
//   type filteredUnion = Person
//...
//   The conditional type filters out any type that cannot be assigned to Person and returns
// the remaining types in the Union. The FilterArray<T, U> method does the work of filtering
// an array using a predicate function and returns the FilterArray<T, U> type. result: Bob