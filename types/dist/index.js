// Merging Methods
let person = {
    id: "bsmith", name: "Bob Smith", city: "London",
    company: "Acme Co", dept: "Sales",
    getContact(field) {
        return typeof field === "string" ? "Alice" : 6512346543;
    }
};
let typeTest = person.getContact;
let stringParamTypeTest = person.getContact("Alice");
let numberParamTypeTest = person.getContact("123");
console.log(`Contact: ${person.getContact("Alice")}`);
console.log(`Contact: ${person.getContact(12)}`);
// The compiler will merge the functions by creating an intersection of their signatures
// which can produce impossible types or functions that cannot be usefully implemented.
// Above, the getContact methods in the Person and Employee types are intersected.
