// Defining an Abstract Interface Implementation.

// Abstract classes can be used to implement some or all of the features described by an
// interface. This can reduce code duplication when some of the classes that implement an
// interface would do so in the same way using the same code.

interface Person {
    name: string;
    getDetails(): string;

    dogName?: string;
    getDogDetails?(): string;

}
    
abstract class AbstractDogOwner implements Person {

    abstract name: string;
    abstract dogName?: string;

    abstract getDetails();

    getDogDetails() {
        if (this.dogName) {
            return `${this.name} has a dog called ${this.dogName}`;
        }
    }

}

class DogOwningCustomer extends AbstractDogOwner {

    constructor(public readonly id: string, public name: string,
            public city: string, public creditLimit: number, public dogName) {
                super();
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