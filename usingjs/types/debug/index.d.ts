declare interface Debug {
    (namespace: string): Debugger
}

declare interface Debugger {
    (...args: string[]): void;
    enabled: boolean;
}

declare var debug: { default: Debug };
export = debug;

// The process for describing a third-party module can be complicated, not least because the
// package authors may not have anticipated that someone would try to descrive their code
// using static types. To further complicate matters, the wide range of JS language versions
// and module formats meants that arcane incantations can be required to present TypeScript
// with descriptions that are useful and accurately represent the code in the module.

// The two interfaces above describe the most basic features of the debug package, allowing
// a simple debugger to be set up and used. The last two statements are required to represent
// the exports from the package to TypeScript.