let myObject = {
    greeting: "Hi, there",

    writeMessage(message) {
        console.log(`${this.greeting}, ${message}`)
    }
};

greeting = "Hello";

myObject.writeMessage("It is sunny today");

let myFunction = myObject.writeMessage;
myFunction("It is sunny today");

// Functions can be used like any other value, including assigning them to variables
// outside of the object in which they were defined. If the function is invoked through
// the variable, then this will be set to the global subject. This often causes problems when 
// functions are used as arguments to other methods or as callbacks  to handle events, 
// and the effect is that same function will behave differently based on how it is invoked.