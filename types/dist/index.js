// Using Intersections for Data Collection
function correlateData(peopleData, staff) {
    const defaults = { company: "None", dept: "None" };
    return peopleData.map(p => ({ ...p,
        ...staff.find(e => e.id === p.id) || { ...defaults, id: p.id } }));
}
let people = [{ id: "bsmith", name: "Bob Smith", city: "London" },
    { id: "ajones", name: "Alice Jones", city: "Paris" },
    { id: "dpeters", name: "Dora Peters", city: "New York" }];
let employees = [{ id: "bsmith", company: "Acme Co", dept: "Sales" },
    { id: "dpeters", company: "Acme Co", dept: "Development" }];
let dataItems = correlateData(people, employees);
dataItems.forEach(item => {
    console.log(`Person: ${item.id}, ${item.name}, ${item.city}`);
    console.log(`Employee: ${item.id}, ${item.name}, ${item.city}`);
});
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
