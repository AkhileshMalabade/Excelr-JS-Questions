//Question 7 How does setTimeout work with asynchronous code? Demonstrate with a code snippet.

//Answer

//This will print asynchronously (after the timeout)
setTimeout(function () {
    console.log("This is asynchronous code");
}, 1000);


//This will print synchronously (before the timeout)
console.log("This is synchronous code");    