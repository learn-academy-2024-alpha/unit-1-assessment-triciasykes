// UNIT 1 ASSESSMENT: Coding Practical Questions

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, leave comments to help us understand your thought process

// Reminder: Ensure you are in the correct directory
// Run the file with the following command: $ node code-challenges.js

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in two strings and evaluates which of the strings has more characters. Use the test variables provided.

const fruit1 = "apple"
const fruit2 = "banana"
// Expected outcome: "banana"

const fruit3 = "cherry"
const fruit4 = "kiwi"
// Expected outcome: "cherry"

const longerWord = (str1, str2) => {
  if (str1.length > str2.length) {
    return `${str1} has more characters than ${str2}`
  } else if (str2.length > str1.length) {
    return `${str2} has more characters than ${str1}`
  } else {
    return "something went wrong"
  }
}

console.log(longerWord(fruit1, fruit2)) //
console.log(longerWord(fruit3, fruit4)) //
// output:
// Explain your code:
//  - based on question, evaluate length of each string using .lenght property
//  then I used a conditional and relational operators to determine which string is longer
// returned sentence stating the longer string

// --------------------1) Create a function that takes in an array of numbers and returns the sum of all the numbers. Use the test variables provided below.

const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
// Expected output: 15
const padres1998WorldSeriesRuns = [6, 3, 5, 3]
// Expected output: 17

// Explain your code:

// --------------------2) Create a function that takes in a string and  returns the string with all the characters in reversed order. Use the test variable provided below.

const lesMiserables = "Jean Valjean"
// Expected output: "naejlaV naeJ"

const lionKing = "Simba"
// Expected output: "abmiS"

// Explain your code:

// --------------------3) Create a function that takes in an array and returns an array with only the items from the third, fourth, and fifth indexes. Use the test variable provided below.

const stockExchange = [13, 34, -4, 42, 5, -5, 10, 27, 42, 10]
// Expected output: [42, 5, -5]

const cohortList = ["Alpha", "Bravo", "Charlie", "Delta", "Echo", "Foxtrot"]
// Expected output: ["Delta", "Echo", "Foxtrot"]

// Explain your code:
