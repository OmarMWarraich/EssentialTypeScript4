// Declaration files also referred to as the type definition files, provide a way to 
// describe JS code to the TS file without having to change the source code file. Type 
// declaration files have the d.ts extension, and the name of the file corresponds to 
// the JS file. To create a declaration file for the formatters.js file, a file named 
// formatters.d.ts must be created.
// Add a file named formatters.d.ts to the src folder with the contents as below.

export declare function sizeFormatter(thing: string, count: number): void;
export declare function costFormatter(thing: string, cost: number | string ): void;

// The contents of a type declaration file mirror those of the code file it describes.
// Each statement contains the declare keyword, which tells the compiler that the
// statement describes the types defined elsewehere. 

// Type declaration files take precedence over JSDoc comments when both are used to
// describe JS code.

// When a type declaration file is used, it must describe all the features defined in the
// corresponding JS file that is used by the application because thhat is the only source
// of information used by the TS compiler, which no longer examines the JS file. For the 
// example project, this means that the type declaration above must describe the sizeFormatter
// and costFormatter fns being in src/index.ts. Any feature not described in the type
// declaration file will not be visible to the TS compiler.

// Demo. next commit changes the writeMessage function in the formatters.js file so that
// is exported for use in the rest of the application.