// Storing Data by Key Using a Map

// Objects are easy to use as basic collections, but there are some limitations, such as 
// being able to use only string values as keys. JS also provides Map, which is purpose-
// built for storing data using keys of any type.


class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    toString() {
        return `toString: Name: ${this.name}, Price: ${this.price}`;
    }
}

let data = new Map();
data.set("hat", new Product("Hat", 100));
data.set("boots", new Product("Boots",100));

[...data.keys()].forEach(key => console.log(data.get(key).toString()));

// The API provided by Map allows items to be stored and retrieved, and iterators 
// are available for the keys and values.

// Useful Map methods 

//     Name                         Description

// set(key, value)     This method stores a value with the specified key.
// get(key)            This method retrieves the value stored with the specified key.
// keys()              This method returns an iterator for the keys in the Map.
// values()            This method returns an iterator for the values in the Map.
// entries()           This method returns an iterator for the key/value pairs in the Map,
//                     each of which is presented as an array containing the key and value.
//                     This is the default iterator for Map objects.                       
