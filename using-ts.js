var button = document.querySelector("button");
var input1 = document.getElementById("num1"); // This means it will never yield null;
var input2 = document.getElementById("num2");
function add(num1, num2) {
    return num1 + num2;
}
button.addEventListener('click', function () {
    // Everything coming in from input into javascript is default as a string.
    console.log(add(+input1.value, +input2.value));
});
