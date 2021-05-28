// Using Constructor Functions
let Employee = function (id, name, dept, city) {
    this.id = id;
    this.name = name;
    this.dept = dept;
    this.city = city;
};
Employee.prototype.writeDept = function () {
    console.log(`${this.name} works in ${this.dept}`);
};
let salesEmployee = new Employee("fvega", "Fidel Vega", "Sales", "Paris");
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
// The Employee constructor functon creates objects with id, name, dept and city properties
// and there is a method named writeDept defined on the Employee prototype. The data array
// is updated to contain Person and Employee objects and the function passed to the forEach
// method uses the instanceof operator to narrow the type of each object in the array.
// error TS2304: Cannot find name Employee.
// error TS4025: Exported variable data has or is using private name Employee.
// error TS 2339: Property writeDept doesnt exist on type {}
// TS treats the Employee constructor function like any other function and looks at its
// parameter and result types to describe its shape. When the Employee function is used
// with the new keyword, the compiler uses the any type for the object assigned to the
// salesEmployee variable. The result is a series of error as the compiler struggles to
// make sense of the way the constructor function is used.
// The simplest way to solve this problem is to provide the comopiler with additional 
// information about the shapes of the objects that are used. 
