// Understanding Intersection Merging

// Because an intersection combines features from multiple types, an object that
// conforms to the intersection shape also conforms to each of the types in intersection.
// e.g., an object that conforms to Person & Employee can be used where the Person type
// or the Employee type is specified.

// Using Underlying Types in an Intersection

type Person = {
    id: string,
    name: string,
    city: string
};

type Employee = {
    id: string,
    company: string,
    dept: string
};

type EmployedPerson = Person & Employee;

function correlateData(peopleData: Person[], staff: Employee[]): EmployedPerson[] {
    const defaults = { company: "None", dept: "None" };
    return peopleData.map(p => ({ ...p,
        ...staff.find(e => e.id === p.id) || { ...defaults, id: p.id } }));
}

let people: Person[] = 
    [{ id: "bsmith", name: "Bob Smith", city: "London" },
     { id: "ajones", name: "Alice Jones", city: "Paris" },
     { id: "dpeters", name: "Dora Peters", city: "New York" }]

let employees: Employee[] =
    [{ id: "bsmith", company: "Acme Co", dept: "Sales"},
    { id: "dpeters", company: "Acme Co", dept: "Development" }];

let dataItems: EmployedPerson[] = correlateData(people, employees);

function writePerson(per: Person): void {
    console.log(`Person: ${per.id}, ${per.name}, ${per.city}`);
}


function writeEmployee(emp: Employee): void {
    console.log(`Employee: ${emp.id}, ${emp.company}, ${emp.dept}`);
}

dataItems.forEach(item => {
    writePerson(item);
    writeEmployee(item);
})

// The compiler matches an object to a shape by ensuring that it defines all properties
// in the shape and doesnt care about excess properties (excess when defining an object
// literal). The object that conform to the EmployedPerson type can be used in the 
// writePerson and writeEmployee functions because they conform to the types specified
// for the function's parameter.