// Using JavaScript Private Fields
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _dept;
class Employee {
    constructor(id, name, dept, city) {
        _dept.set(this, void 0);
        this.id = id;
        this.name = name;
        __classPrivateFieldSet(this, _dept, dept);
        this.city = city;
    }
    writeDept() {
        console.log(`${this.name} works in ${__classPrivateFieldGet(this, _dept)}`);
    }
}
_dept = new WeakMap();
;
let salesEmployee = new Employee("fvega", "Fidel Vega", "Sales", "Paris");
salesEmployee.writeDept();
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
// Private Fields are denoted with the # character.
// # advantage over keyword private is that the # character is not removed during the
// compilation process, which means that access control is enforced by JS runtime.
// Like most JS features, the private keyword is not included in the JS code produced
// by the compiler, which means that access control is not enforced in the JS code.
