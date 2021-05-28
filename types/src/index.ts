// Using Intersections for Data Collection

// Intersections are useful when you recieve objects from one source and need to 
// introduce new functionality so they can be used elsewhere in the application or when
// objects from two data sources need to be correlated and combined.
// JS makes it easy to introduce functionality from one object into another, and 
// intersections allow the types that are used to be clearly descriced so they can be
// checked by the TS compiler.

// Correlating Data

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

dataItems.forEach(item => {
    console.log(`Person: ${item.id}, ${item.name}, ${item.city}`);
    console.log(`Employee: ${item.id}, ${item.name}, ${item.city}`);
})

// Above, the correlateData function recieves an array of Person Objects and an array of
// Employee objects and uses the id property they share to produce objects that combine
// the properties of both shape types. As each Person object is processed by the map
// method, the array find method is used to locate the Employee object with the same id
// value, and the objecct spread operator is used to create objects that match the 
// intersection shape. Since the results from the correlateData function have to define 
// all the intersection properties, default values are used where there is no matching
// Employee object.

// Type annotations are used above to make the purpose of the code easier, but the code
// would work without them. The TS compiler is adept at understanding the effect of code
// statemetns and can understand the effect of this statement is to create objects that
// conform to the shape of the type intersection.