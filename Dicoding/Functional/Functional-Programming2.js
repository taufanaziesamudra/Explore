//! Array Map
// const newArray = ['Harry', 'Ron', 'Jeff', 'Thomas'].map((name) => { return `${name}!` });
// console.log(newArray);

//! Array Filter
// const truthyArray = [1, '', 'Hallo', 0, null, 'Harry', 14].filter((item) => Boolean(item));
// console.log(truthyArray);

// const students = [
//     { name: 'Harry', score: 60, },
//     { name: 'James', score: 88, },
//     { name: 'Ron', score: 90, },
//     { name: 'Bethy', score: 75, }
// ];
// const eligibleForScholarshipStudents = students.filter((student) => student.score > 85);
// console.log(eligibleForScholarshipStudents);

//! Array Reduce
// const students = [
//     { name: 'Harry', score: 60, },
//     { name: 'James', score: 88, },
//     { name: 'Ron', score: 90, },
//     { name: 'Bethy', score: 75, }
// ];
// const totalScore = students.reduce((acc, student) => acc + student.score, 0)
// console.log(totalScore)

//! Array some
// const array = [1, 2, 3, 4, 5];
// const even = array.some(element => element % 2 === 0);
// console.log(even);

//! Array find
// const students = [
//     { name: 'Harry', score: 60, },
//     { name: 'James', score: 88, },
//     { name: 'Ron', score: 90, },
//     { name: 'Bethy', score: 75, }
// ];
// const findJames = students.find(student => student.name === 'James');
// console.log(findJames);

//! Array sort
// const months = ['March', 'Jan', 'Feb', 'Dec'];
// months.sort();
// console.log(months);
// const array1 = [1, 30, 4, 1000, 101, 121];
// array1.sort();
// console.log(array1);

// const array1 = [1, 30, 4, 1000];
// const compareNumber = (a, b) => {
//     return a - b;
// };
// const sorting = array1.sort(compareNumber);
// console.log(sorting);

//! Array every
// const scores = [70, 85, 90];
// const minimumScore = 65;
// const examPassed = scores.every(score => score >= minimumScore);
// console.log(examPassed);

//! Array forEach
const names = ['Harry', 'Ron', 'Jeff', 'Thomas'];
for (let i = 0; i < names.length; i++) {
    console.log(`Hello, ${names[i]}!`);
}