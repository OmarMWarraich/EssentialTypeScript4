let myObject = {
    greeting: "Hi, there",

    writeMessage(message) {
        console.log(`${this.greeting}, ${message}`)
    }
};

myObject.writeMessage = myObject.writeMessage.bind(myObject);

greeting = "Hello";

myObject.writeMessage("It is sunny today");

let myFunction = myObject.writeMessage;
myFunction("It is sunny today");

// The bind method returns a new function that will have a persistent value for this when
// it is invoked. The function returned by the bind method is used to replace the original
// method, wnsuring consistency when the writeMessage is invoked. Using bind is awkward
// because the reference to the object isn't available until after it has been created,
// which leads to a two-step process of creating the object and then calling bind to 
// replace each of the methods for which a consitent this value is required.