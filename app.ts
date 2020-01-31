function add(n1: number, n2: number) {
    console.log(typeof number1);
    // if (typeof n1 !== 'number' || typeof n2 !== 'number') {
    //     throw new Error('Incorrect input!');
    // }
    return n1 + n2;
}

// const number1 = '5';
const number1 = 5; // this is the same as 5.0. Javascript does not have the concept of int and float
const number2 = 2.8;

const result = add(number1, number2);
console.log(result);
