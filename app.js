// const person: {
//     name: string;
//     age: number;
// } = {
var person = {
    // const person = {
    name: 'Maximilian',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: [2, 'author']
};
// You can see the following does not throw error
// person.role.push('admin');
// person.role[1] = 10;
// person.role = [0, 'admin', 'user'];
// let favouriteActivities: any[];
// favouriteActivities = ['Sports',1];
var favouriteActivities;
favouriteActivities = ['Sports'];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
    // console.log(hobby.map()); // get compile error because hobby is not an array. it is a string
}
