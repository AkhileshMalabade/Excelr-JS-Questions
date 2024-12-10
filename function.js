//Question 4 What is the difference between a function declaration and a function expression? Provide examples for each.

//Answer

// Function Declaration is a statement that defines a function
// Function Expression is an expression that returns a function

// Function Declaration
function functionDeclaration() {
    console.log("I am a function declaration");
}

// Function Expression
var functionExpression = function () {
    return "I am a function expression";
};

functionDeclaration(); // I am a function declaration
console.log(functionExpression); // I am a function expression