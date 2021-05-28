// Merging Properties with same type

// Properties with the same name and same types such as the id props defined by the
// Person and Employee types in previous commit merged into the intersection without
// any changes. No issues coz any value assgnd 2 id prop will be a string and will 
// conform to the requirements of the object and intersection types.

// Merging Properties with Differnt Types

// Props with same name but different types, the compiler keeps the name but intersects 
// the type. Below, function removed and contact property added to the Person and 
// Employee types.

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

// The last statement is a useful trick for seeing what type the compiler assigns to a
// property in the intersection by looking at the declaration file created in the dist
// folder when the declaration compiler configuration option is true. The statement uses
// a type assertion to tell the compiler that an empty object conforms to the
// EmployedPerson type and assigns to the contact property to the typeTest variable.
// When the changes to the index.ts file are saved, the compiler will compile the code,
// and the index.d.ts file in the dist folder will show the type for the contact property
// in the intersection.

// The compiler created an intersection between the type of the contact property defined
// by Person and the type of the contact property defined by Employee.