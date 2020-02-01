function add(n1, n2, showResult, phrase) {
    // console.log(typeof number1);
    // if (typeof n1 !== 'number' || typeof n2 !== 'number') {
    //     throw new Error('Incorrect input!');
    // }
    var result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return result;
    }
}
// const number1 = '5';
var number1 = 5; // this is the same as 5.0. Javascript does not have the concept of int and float
var number2 = 2.8;
var printResult = true;
var resultPhrase = 'Result is: ';
// const result = add(number1, number2, printResult);
add(number1, number2, printResult, resultPhrase);
// console.log(result);
