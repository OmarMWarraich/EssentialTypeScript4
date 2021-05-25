function writeMessage(message) {
    console.log(`${this.greeting}, ${message}`);
}

greeting = "Hello";

writeMessage("It is sunny today");

// The writeMessage fn reads a prop named greeting from this.
//Value assigned names  without using the let, const, or var keyword are assigned to
// the global object. The statement that assigns the string value Hello creates a variable
// in the global scope. call fn, this is assigned the global object.