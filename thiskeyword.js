//Question 3 How does the this keyword behave in different contexts? Give examples for global, function, and object contexts.

//Answer
function thiskeyword() {
    // Global Context
    console.log(this); // Window

    // Function Context
    function functionContext(name) {
        this.name = name;
        console.log(this.name); // Window
    }
    functionContext("Akhilesh");

    // Object Context
    var person = {
        name: "Akhilesh",
        fn: function () {
            console.log(this); // Object
        }
    };
    person.fn();
}
thiskeyword();