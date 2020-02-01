// console.log('Sending...');

// we allow variable to not assigned to a type when it is declared.
let logged;

// We will not allow parameter to be not assigned to a type when it's declared:
// function sendAnalytics(data) {
function sendAnalytics(data: string) {
    console.log(data);
    logged = true;
    console.log(logged);
}

sendAnalytics('The data');
