//Arrow functions dont work in the same way as regular function w.r.t this. Arrow functions
// dont have their own this value and inherit the closest value of this they can find when
// thay are executed.

let myObject = {
    greeting: "Hi, there",

    getWriter() {
        return (message) => 
            console.log(`${this.greeting}, ${message}`);
    }    
}

greeting = "Hello";

let writer = myObject.getWriter();
writer("It is raining today.");


let standAlone = myObject.getWriter;
let standAloneWriter = standAlone();
standAloneWriter("It is sunny today");

// The getWriter method is invoked through myObject and means that the value of this will
// be set to myObject. When the arrow function is invoked, it finds a value of this from 
// getWriter function. The result is that when the getWriter method is invoked through myObject,
// the value of this in the arrow function will be myObject, and the this.greeting expression
// in the template string will be Hi, there.

// The statements in the second set treat getWriter as a stand-alone function,, so this 
// will be set to the global object. When the arrow function is invoked, the this.greeting
// expression will be Hello.