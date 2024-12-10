//Question 1 How does var, let, and const differ in terms of scope and hoisting? Provide an example.

//Answer

function varletconst() {
    
    // Scope Example
    if (true) {
        var varVariable = "I am var"; // Function-scoped
        let letVariable = "I am let"; // Block-scoped
        const constVariable = "I am const"; // Block-scoped
    }

    console.log(varVariable+" Can be accessed in the function scope");
    try {
        console.log(letVariable);
    } catch (e) {
        console.log(" Cannot be accessed in the function scope");
    }
    try {
        console.log(constVariable);
    } catch (e) {
        console.log(" Cannot be accessed in the function scope");
    }

    // Hoisting Example
    console.log(varHoisted + "var is hoisted");
    try {
        console.log(letHoisted); 
    } catch (e) {
        console.log(" Cannot access 'letHoisted' before initialization");
    }
    try {
        console.log(constHoisted); 
    } catch (e) {
        console.log("Cannot access 'constHoisted' before initialization");
    }

    var varHoisted = "var is hoisted";
    let letHoisted = "let is hoisted but not initialized";
    const constHoisted = "const is hoisted but not initialized";

    // Reassignment Example
    var varReassign = "var can be reassigned";
    var varReassign = "var can also be re-declared"; 
    try {
        letReassign = "let cannot be reassigned";
    } catch (e) {
        console.log("let cannot be reassigned");
    }
    try {
        constReassign = "const cannot be reassigned";
    } catch (e) {
        console.log("const cannot be reassigned");
    }
}
varletconst();
