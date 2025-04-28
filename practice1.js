// example 1 if else
///get user to input a number using prompt("Enter a number:"). Check if the number is a multiple of 5 or not.

// const input = prompt("Enter a number:");
// console.log("what is th input", input)
// if (input % 5 === 0) {
//     console.log("input is modula of 5");
// } else {
//     console.log("input is not multiple of 5")
// }

// example 2 nested if else
// write a code which can give grades to students according to their scores
/*
80-100 A,
70-89 B,
60-69 C,
50-59 D,
0-49 F
*/

// const input = prompt("enter your marks to see grade:");

// if (input >= 90) {
//     console.log("Congratulation!! you have A grade")
// } else if (input <= 89 && input >= 70) {
//     console.log("Grate you have B grade")
// } else if (input <= 69 && input >= 60) {
//     console.log("Good you have C grade")
// } else if (input <= 59 && input >= 50) {
//     console.log("you have scored D grade")
// } else {
//     console.log("very good you have Failed")
// }

// example 3 loop statements
// print all numbers from 0 to 100

// for (let i = 0; i <= 100; i++) {
//     if (i % 2 === 0) {
//         console.log(i, "is an even number")
//     }

// }

// using while loop
// let i = 1
// while (i <= 100) {
//     if (i % 2 === 0) {
//         console.log(i, "is an even number")
//     }
//     i++
// }

// using do-while loop
// let i = 1
// do {
//     if (i % 2 === 0) {
//         console.log(i, "is an even number")
//     }
//     i++
// } while (i <= 100);

// example 4
// Create a game where you start with any random game number. Ask the user to keep guessing the game number until the user enters correct value.

// for (let i = 1; i <= 100; i++) {
//     let input = prompt("Guess the random number:");
//     if (input === 50) {
//         console.log("hurray!!! you guess the correct number", i);
//         break;
//     }

// }
// let i=1;
// while(i<=100)

// let inputNumber = prompt("Guess number");
// while (inputNumber != 45) {
//     inputNumber = prompt("please enter again")
// }
// console.log("congratulation!!! you have guess the correct number", inputNumber)

// example 5
// prompt the user to enter their full name. Generate a username for them based on the input. Start username with @, followed by their full name and ending with the fullname length.
// eg: ananyamondal, username should be "@ananyamondal12"

// let input = prompt("Enter you name to create user name:")
// console.log(`your user name is @${input?.toLocaleLowerCase().replace(" ", "") + input.length}`)

// let heros = ["ironman", "antman", "shaktiman", "hulk"]

// for (let i = 0; i < heros?.length; i++) {
//     console.log("this is the value of item", heros[i])
// }

// for (let item of heros) {
//     console.log("this is the value", item)
// }

//example 6
//  for a given array with marks of students ->[85,97,44,37,76,60]
// find the average marks of the entire class

// let marks = [85, 97, 44, 37, 76, 60]
// let sum = 0;
// for (let mark of marks) {
//     sum += mark
// }
// for (let mark = 0; mark < marks.length; mark++) {
//     sum += marks[mark]
// }
// marks.forEach(element => {
//     sum += element
// });
// let averageMarks = (sum / marks.length)

// console.log("this is the average marks of the entire class", averageMarks, "and this is the sum", sum)

// example 7
// for a given array with prices of 5 items -> [250,645,300,900,50]
//  all items have an offer of 10% OFF on them, Change the array to store final price after
// applying offer.

// let itemPrice = [250, 645, 300, 900, 50]
// for (let item = 0; item < itemPrice.length; item++) {
//     let offer = (10 / 100) * itemPrice[item]
//     itemPrice[item] = itemPrice[item] - offer
// }
// for of will not work as we need to update all element index by index we can create an empty array and push each element
// for (let item of itemPrice) {
//     itemPrice = (item * 10) / 100
// }

// itemPrice.splice(2, 1, 1000)
// console.log("the final price after 10% discount is", itemPrice.splice(2, 1, 1000))
// itemPrice.splice(1, 0, 0.999)

// example 8
// create a function using the "function" keyword that takes a String as an argument & returns the
//  number of vowels in the string.

// const vowelsList = {
//     a: "a",
//     e: "e",
//     i: "i",
//     o: "o",
//     u: "u"
// }
// function findVowels(input) {
//     const list = []
//     for (const key of input) {
//         if (key === vowelsList[key]) {
//             list.push(key)
//         }
//     }
//     return console.log(`${input} this string has following vowels: \n${list}`)
// }

//  example 9
//  for a given array of numbers, print the square of each value using the forEach loop.

// const numberArray = [1, 2, 3, 4, 5, 6]
// // numberArray.forEach(item => console.log(`square of ${item} is ${item * item}`))
// let initialValue = 0
// const average = numberArray.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue)

// console.log(average)

//  example 10
//  we are given array of marks of students. filter out of the marks of students that scored 90+.

// const studentsMarks = [90, 98, 34, 65, 34, 62, 55, 29, 45, 96]
// const goodMarks = studentsMarks.filter(item => item >= 90 && item)
// console.log(goodMarks)

// example 11
//  take a number n as input from user. Create an array of numbers from 1 to n. use the reduce method to calculate sum of all numbers in the array. use the reduce method to calculate product of all numbers in the array.

// const userInput = prompt("Please enter numbers in array:");
// let arr = [];
// for (let i = 0; i <= userInput; i++) {
//     arr.push(i)
// }
// const sum = arr.reduce((prev, curr) => { return prev + curr })
// console.log(sum / arr.length)

// current date and time

const today = new Date();
