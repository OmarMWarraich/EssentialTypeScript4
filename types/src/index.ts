// Assigning Values to the INtersection of Primitives

// Creating an intersection of the types is the only way the compiler can merge the 
// properties, but it doesn't produce a useful result because there are no values that
// can be assigned to the intersection of the primtive number and string types.

type Person = {
    id: string,
    name: string,
    city: string,
    contact: number
};

type Employee = {
    id: string,
    company: string,
    dept: string,
    contact: string
};

type EmployedPerson = Person & Employee;

let typeTest = ({} as EmployedPerson).contact;

let person1: EmployedPerson = {
    id: "bsmith", name: "Bob Smith", city: "London",
    company: "Acme Co", dept: "Sales", contact: "Alice"
};

let person2: EmployedPerson = {
    id: "dpeters", name: "Dora Peters", city: "New York",
    company: "Acme Co", dept: "Development", contact: 6512346543
};

// An object has to assign a value to the contact property to conform to the shape but
// doing so creates error TS2322. type is not assignable to type 'never'. The intersection
// of number and string is an impossible type. There is no way to work around this
// problem for primitive types, and the only solution is to adjust he types used in the
// intersection so that shape types are used instead of primitves.

// Note: It might seem odd that the TS compiler allows impossible types to be defined, but
// the reason is that some of the advanced TS features, make it difficult for the compiler
// to deal with all situations consistently, and the MS dev team has chosen simplicity
// over exhaustively checking for every impossible type.