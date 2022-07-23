// TODO Fure Functional
//! 1
// const names = ['Henry', 'Ron', 'Jeff', 'Thomas', 'Taufan']
// const newNamesWithExcMark = []
// for (let i = 0; i < names.length; i++) {
//     newNamesWithExcMark.push(`${names[i]}!`)
// }
// console.log(newNamesWithExcMark)

//! 2
// const names = ['Henry', 'Ron', 'Jeff', 'Thomas',];
// const newNamesWithExcMark = names.map((name) => `${name}!`);
// console.log(newNamesWithExcMark)

//! 3
// let PI = 3.14
// const hitungLuasLingkaran = (jariJari) => {
//     return PI * (jariJari * jariJari)
// }
// console.log(hitungLuasLingkaran(4))
// PI = 5
// console.log(hitungLuasLingkaran(4))

//! 4
// const createPersonWithAge = (age, person) => {
//     person.age = age
//     return person
// }
// const person = {
//     name: 'Bobo'
// }
// const newPerson = createPersonWithAge(18, person)
// console.log({ person, newPerson })

// TODO Immutability
//! 1
// const names = ['Harry', 'Rob', 'Jeff', 'Thomas']
// const newNamesWithExcMark = names.map((name) => `${name}!`)
// console.log({ names, newNamesWithExcMark })

//! 2
// const user = {
//     firstname: 'Harry',
//     lastName: 'Proootrer'
// }
// const renameLastNameUser = (newLastName, user) => {
//     user.lastName = newLastName
// }
// renameLastNameUser('Potter', user)
// console.log(user)

//! 3
// const user = {
//     firstname: 'Harry',
//     lastName: 'Proootrer'
// }
// const createUserWithNewLastName = (newLastName, user) => {
//     return { ...user, lastName: newLastName }
// }
// const newUser = createUserWithNewLastName('Potter', user)
// console.log(newUser)

// TODO Rekursif
//! 1
// const countDown = start => {
//     do {
//       console.log(start);
//       start -=1;
//     }
//     while(start > 0);
//   };
//   countDown(10);

//!2
// const countDown = start => {
//     console.log(start);
//     if (start > 0) countDown(start - 1);
// };
// countDown(10);

// TODO High Order Function
//! 1
// const hello = () => {
//     console.log('Hello!')
// };
// const say = (someFunction) => {
//     someFunction();
// }
// const sayHello = () => {
//     return () => {
//         console.log('Hello!');
//     }
// }
// hello();
// say(hello);
// sayHello()();

//! 2
const names = ['Harry', 'Ron', 'Jeff', 'Taufan']
const arrayMap = (arr, action) => {
    const loopTrough = (arr, action, newArray = [], index = 0) => {
        const item = arr[index]
        if (!item) return newArray
        return loopTrough(arr, action, [...newArray, action(arr[index])], index + 1)
    }
    return loopTrough(arr, action)
}
const newNames = arrayMap(names, (name) => `${name}!`)
console.log({ names, newNames })