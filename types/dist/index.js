// Understand Mapping For Constructors and Methods
// Mapping operates only on properties. When applied to a class, a type mapping produces
// a shape type that contains properties but omits the constructor and implementation of
// methods.
class MyClass {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
//is mapped to the following type by the Mapping<T> type mapping in last commit.
{
    name: string;
    getName: () => string;
}
// Type Mapping produces shapes that can be used for object literals, implemented by
// classes, or extended by interfaces. Type Mapping does not produce a class, however.
