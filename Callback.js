//Question 6 Explain the concept of callback functions. Write an example.

//Answer

//Callback Functions
//Callback functions are functions that are passed as arguments to other functions and are executed at a later time.

//Example
function callbackFunction(callback) {
    console.log("This is the callback function");
    callback();
}

callbackFunction(function () {
    console.log("This is the function that is passed as an argument to the callback function");
}); 