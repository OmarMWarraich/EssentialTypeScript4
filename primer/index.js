function writeMessage(message) {
    console.log(`${this.greeting}, ${message}`);
}

greeting = "Hello";

writeMessage("It is sunny today");
writeMessage.call(global, "It is sunny today");

// The writeMessage fn reads a prop named greeting from this.
//Value assigned names  without using the let, const, or var keyword are assigned to
// the global object. The statement that assigns the string value Hello creates a variable
// in the global scope. call fn, this is assigned the global object.

// The new statement uses the call method directly and sets the this value to the global
// object, with the same result as the conventional function call before it.