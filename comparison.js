//Question 2 Explain the difference between == and === with an example.

//Answer
// == is a comparison operator (Checks for value equality)
// === is a strict comparison operator (Checks for type equality)
function comparison() {
    var a = 5;
    var b = 5;
    var c = '5';


    console.log(a == b); // true
    console.log(a === b); // true

    console.log(c == a); // true
    console.log(c === a); // false
}
comparison();
