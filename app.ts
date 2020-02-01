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

enum Role {ADMIN, READ_ONLY, AUTHOR}
// enum Role {ADMIN=5, READ_ONLY, AUTHOR}
// enum Role {ADMIN = 'ADMIN', READ_ONLY = 100, AUTHOR = '200'}

const person = {
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
let favouriteActivities: string[];
favouriteActivities = ['Sports'];

console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
    // console.log(hobby.map()); // get compile error because hobby is not an array. it is a string
}

if (person.role === Role.AUTHOR) {
    console.log('is author');
}

