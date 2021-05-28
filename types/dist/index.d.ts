import { City, Person, Employee } from './dataTypes';
declare class DataCollection<T extends {
    name: string;
}> {
    private items;
    constructor(initalItems: T[]);
    collate<U>(targetData: U[], itemProp: string, targetProp: string): (T & U)[];
}
export declare let peopleData: DataCollection<Person>;
export declare let collatedData: (Person & City)[];
export declare let empData: (Person & Employee)[];
export {};
