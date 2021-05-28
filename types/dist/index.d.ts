interface Person {
    name: string;
    getDetails(): string;
    dogName?: string;
    getDogDetails?(): string;
}
declare abstract class AbstractDogOwner implements Person {
    abstract name: string;
    abstract dogName?: string;
    abstract getDetails(): any;
    getDogDetails(): string;
}
declare class DogOwningCustomer extends AbstractDogOwner {
    readonly id: string;
    name: string;
    city: string;
    creditLimit: number;
    dogName: any;
    constructor(id: string, name: string, city: string, creditLimit: number, dogName: any);
    getDetails(): string;
}
declare let alice: DogOwningCustomer;
