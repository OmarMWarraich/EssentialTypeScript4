let myObject = {
    greeting: "Hi, there",

    writeMessage(message) {
        console.log(`${this.greeting}, ${message}`)
    }
};

greeting = "Hello";

myObject.writeMessage("It is sunny today");

// When the function is invoked via the object, the statement that invokes the function 
// is akin to using the call method with the object as the first argument.

// Care is required because this is set differently if the function is accessed out of
// its object, which can happen if the function is assigned to a variable.
