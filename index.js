
// const students = ["harry", "ron", "hermione", "ginevra"];
// const rollCall = [ ];

// for (const student of students) {
//   rollCall.push (student + " the wizard");
// }

// console.log (rollCall)

// function studentRollCall (student) {
//   return student + " the wizard";
// }

// const rollCall = students.map(studentRollCall);

// console.log(rollCall)


// const rollCall = students.map(student => student + " the wizard")

// // console.log(rollCall)

// const robots = [
//   { name: 'Johnny 5', modes: 5, isActivated: false, },
//   { name: 'C3PO', modes: 3, isActivated: false, },
//   { name: 'Sonny', modes: 2.5, isActivated: false, },
//   { name: 'Baymax', modes: 1.5, isActivated: false, },
// ];

    
// // const activatedRobots = robots.map( (robot) => {
// //   return Object.assign({}, robot, {
// //     modes: robot.modes * 2,
// //     isActivated: true,
// //   });
// // });

// // console.log(activatedRobots);





// function titleCased(robots) {
//     return robots.tolowerCase (function(name) robots.slice(1))}
// console.log (titleCased(robots))


// const tutorials = [
//   'what does the this keyword mean?',
//   'What is the Constructor OO pattern?',
//   'implementing Blockchain Web API',
//   'The Test Driven Development Workflow',
//   'What is NaN and how Can we Check for it',
//   'What is the difference between stopPropagation and preventDefault?',
//   'Immutable State and Pure Functions',
//   'what is the difference between == and ===?',
//   'what is the difference between event capturing and bubbling?',
//   'what is JSONP?'
// ];

// const titleCased = () => {
//   return tutorials.map(function (str) {
//     str = str.split(' ') // str is now array of multiple arrays of substrings for each word in each original element.
//     console.log (str)
//     str = str.map(word => word.charAt(0).toUpperCase() + word.slice(1)) //.map changes specified element in  str (which is the substrings we created)
//     // the specified element is a function with 'word' parameter
//       // function returns the first character(0) (using .charAt) of str into uppercase chharacters and adds (.maps) the new characters to the start of the str array.
//     return str.join(' ')  //this uses .join (' ') join the substring back into arrays of full strings.
//   })
// }

const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  return tutorials.map(function (str) {
    str = str.split(' ')
    str = str.map(word => word.charAt(0).toUpperCase() + word.slice(1))
    return str.join(' ')
  })
}