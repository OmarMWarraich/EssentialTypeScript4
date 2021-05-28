// Defining Optional Interface Properties and Methods

// Adding an optional property to an interface allows classes that implement the interface
// to provide the property without making it a requirement.

interface Person {
    name: string;
    getDetails(): string;

    dogName?: string;
    getDogDetails?(): string;

}
    

class Employee implements Person {
    constructor(public readonly id: string, public name: string, 
        private dept: string, public city: string) {
            //no statements required
        }
    getDetails() {
        return `${this.name} works in ${this.dept}`;
    }
}

class Customer implements Person {

    constructor(public readonly id: string, public name: string, 
        public city: string, public creditLimit: number, public dogName) {        
        }
    getDetails() {
        return `${this.name} has ${this.creditLimit} limit`;
    }
    getDogDetails() {
        return `${this.name} has a dog named ${this.dogName}`
    }
}


let alice = new Customer("ajones", "Alice Jones", "London", 500, "Fido");
let data: Person[] = [new Employee("fvega", "Fidel Vega", "Sales", "Paris"), alice];
data.forEach(item => {
    console.log(item.getDetails());
    if (item.getDogDetails) {
        console.log(item.getDogDetails());
    }
});

// Declaring an optional property on an interface is done using the question mark 
// character after the name.

// Defining optional interface members

// Optional interface features can be defined through the interdace type without causing
// compiler errors, but you must check to ensure that you do not recieve undefined Values
// since objects may have been created from classes that have not implemented them.

