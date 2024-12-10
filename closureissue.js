//Question 8 How can you avoid the issue of closures with var inside a loop? Provide a solution.

//Answer

//Issue
//When using var to declare variables inside a loop, 
//the variable is function-scoped rather than block-scoped. 
//This means all iterations of the loop share the same variable, 
//and closures created inside the loop capture the same variable, 
//not its value at the time the closure was created. 


// Issue Example
function createFunctions() {
    var functions = [];
    for (var i = 0; i < 3; i++) {
        functions.push(function () {
            console.log(i);
        });
    }
    return functions;
}

const funcs = createFunctions();
funcs[0](); 
funcs[1](); 
funcs[2](); 

// Solution
// Use let to declare variables inside a loop
function createFunctions1() {
    let functions = [];
    for (let i = 0; i < 3; i++) {
        functions.push(function () {
            console.log(i);
        });
    }
    return functions;
}

const funcs1 = createFunctions1();
funcs1[0]();
funcs1[1](); 
funcs1[2](); 
