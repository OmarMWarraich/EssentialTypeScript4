// Using the Access Control Keywords
class Employee {
    constructor(id, name, dept, city) {
        this.id = id;
        this.name = name;
        this.dept = dept;
        this.city = city;
    }
    writeDept() {
        console.log(`${this.name} works in ${this.dept}`);
    }
}
;
let salesEmployee = new Employee("fvega", "Fidel Vega", "Sales", "Paris");
console.log(`Dept value: ${salesEmployee.dept}`);
let data = [{ id: "bsmith", name: "Bob Smith", city: "London" },
    { id: "ajones", name: "Alice Jones", city: "Paris" },
    { id: "dpeters", name: "Dora Peters", city: "New York" },
    salesEmployee];
data.forEach(item => {
    if (item instanceof Employee) {
        item.writeDept();
    }
    else {
        console.log(`${item.id} ${item.name}, ${item.city}`);
    }
});
// The effect of the private keyword is to restrict access to within the Employee class,
// and the compiler generates the following error for the statement that attempts to 
// read the value of the dept property from outside the class.
// error TS2341: pvt and only accessible within class.
// The only way that the dept prop be accessed is thru the writeDept method a part of 
// Employee class allowed by the pvt keyword.
