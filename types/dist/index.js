// Adding a Type Alias
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
    if ("dept" in item) {
        item.writeDept();
    }
    else {
        console.log(`${item.id} ${item.name}, ${item.city}`);
    }
});
// TS compiler may not understand the significance of the constructor function, but it 
// can match the objects it creates by shape. Above a shape type that  corresponds to those
// created by the constructor function, including the method that is accessed through the 
// prototype. 
