//Question 5 How does a closure work in JavaScript? Demonstrate with a program.

//Answer
function outerFunction(outerVariable) {
    return function innerFunction(innerVariable) {
        console.log(`Outer Variable: ${outerVariable}`);
        console.log(`Inner Variable: ${innerVariable}`);
    };
}

const closureFunc = outerFunction("outside");
closureFunc("inside");
