const button = document.querySelector("button");
const input1 = document.getElementById("num1")! as HTMLInputElement;    // This means it will never yield null;
const input2 = document.getElementById("num2")! as HTMLInputElement;

function add(num1: number, num2: number) {
    return num1 + num2;
}

button.addEventListener('click', function () {
    // Everything coming in from input into javascript is default as a string.
    console.log(add(+input1.value, +input2.value));
});
