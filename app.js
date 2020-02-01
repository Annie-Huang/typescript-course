// const person: {
//     name: string;
//     age: number;
// } = {
// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string];  // Tuple  type
// } = {
// // const person = {
//     name: 'Maximilian',
//     age: 30,
//     hobbies: ['Sports', 'Cooking'],
//     role: [2, 'author']
// };
// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
// enum Role {ADMIN=5, READ_ONLY, AUTHOR}
// enum Role {ADMIN = 'ADMIN', READ_ONLY = 100, AUTHOR = '200'}
var person = {
    name: 'Maximilian',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
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
if (person.role === Role.AUTHOR) {
    console.log('is author');
}
