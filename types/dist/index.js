// Merging Properties with same type
let typeTest = {}.contact;
// The last statement is a useful trick for seeing what type the compiler assigns to a
// property in the intersection by looking at the declaration file created in the dist
// folder when the declaration compiler configuration option is true. The statement uses
// a type assertion to tell the compiler that an empty object conforms to the
// EmployedPerson type and assigns to the contact property to the typeTest variable.
// When the changes to the index.ts file are saved, the compiler will compile the code,
// and the index.d.ts file in the dist folder will show the type for the contact property
// in the intersection.
// The compiler created an intersection between the type of the contact property defined
// by Person and the type of the contact property defined by Employee.
