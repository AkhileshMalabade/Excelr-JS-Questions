//Question 9 Explain the difference between map() and forEach() with examples.

//Answer

// map() is used to create a new array by transforming each element in an existing array
// forEach() is used to iterate over an existing array
function map() {
    const numbers = [1, 2, 3, 4, 5];
    const doubled = numbers.map(function (num) {
        return num * 2;
    });
    console.log(doubled); 
}
map();

function forEach() {
    const numbers = [1, 2, 3, 4, 5];
    numbers.forEach(function (num) {
        console.log(num);
    });
}
forEach();