// Defining an Abstract Interface Implementation.
class AbstractDogOwner {
    getDogDetails() {
        if (this.dogName) {
            return `${this.name} has a dog called ${this.dogName}`;
        }
    }
}
class DogOwningCustomer extends AbstractDogOwner {
    constructor(id, name, city, creditLimit, dogName) {
        super();
        this.id = id;
        this.name = name;
        this.city = city;
        this.creditLimit = creditLimit;
        this.dogName = dogName;
    }
    getDetails() {
        return `${this.name} has ${this.creditLimit} limit`;
    }
}
let alice = new DogOwningCustomer("ajones", "Alice Jones", "London", 500, "Fido");
if (alice.getDogDetails) {
    console.log(alice.getDogDetails());
}
// AbstractDogOwner provides a partial implementation of the Person interface but 
// declares the interface features that it doesnt implement as abstract, which forces
// subclasses to implement them. There is one subclass that extends AbstractDogOwner,
// which inherits the getDogDetails method from the abstract class.
