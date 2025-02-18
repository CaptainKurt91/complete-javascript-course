/* let javascriptIsFun = true
console.log(javascriptIsFun)

// let, const and var
const language = "German";
let age = 30;
console.log(age);
age = 31;
console.log(age);
const birthYear = 1990;
const country = "Germany"
const continent = "Europe"
let populationGermany = 83000000000;
const splitPop = populationGermany / 2;
console.log(splitPop);

const popGrowth = populationGermany ++;
console.log(popGrowth);

const finladPop = 6000000;
console.log(finladPop > populationGermany);

const averagePop = 33000000000
let greaterThanAveragePop = populationGermany > averagePop
console.log(greaterThanAveragePop)

const description = country + " is in " + continent + ", and its " + populationGermany + " people speak " + language
console.log(description)
 */

// Code Challenge 1
/* const markHeight = 1.88;
const markWeight = 95;
const BMIMark = markWeight / markHeight ** 2;
console.log(BMIMark);

const johnHeight = 1.76;
const johnWeight = 85;
const BMIJohn = johnWeight / johnHeight ** 2;
console.log(BMIJohn);

const markHigherBMI = BMIMark > BMIJohn;
console.log(markHigherBMI);

if (BMIMark > BMIJohn) {
 console.log(`Marks BMI (${BMIMark}) is higher then Johns BMI (${BMIJohn})`)
} else {
  console.log(`Johns BMI (${BMIJohn}) is higher then Marks BMI (${BMIMark})`)
} */

// Template literals
/* const firstName = "Kurt"
const job = "Web Developer"
const birthYear =  1991
const year = 2022
const kurtNew = `I'm ${firstName},
a ${year - birthYear} year old ${job}` ;
console.log(kurtNew)
 */

// if / else staments

/* const age = 15;


if (age >= 18) {
  console.log( "You can start driving");
} else {
  const yearsLeft = 18 - age
  console.log (`You can't drive yet, wait another ${yearsLeft} years`)
} */

/* // Type Conversion
const inputYear = '1991'
console.log(Number(inputYear), inputYear)

// Type Coercion
console.log ('9' - '5', // 4
'19' - '13' + '17', // '617'
'19' - '13' + 17, // 23
'123' > 57, // true
'123' < 57, // false
5 + 6 + '4' + 9 - 4 - 2); // 1143
 */


////////////////////////////////////
// Truthy and Falsy Values

// 5 falsy values: 0, '', undefined, null, NaN
/* console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));


const money = 0
if (money) {
  console.log("Rich boy")
} else {
  console.log ("poor boy")
}
 */

/* const age = 18;
if (age === 18) console.log ("Adult"); // True strict

if (age === "18") console.log ("Adult") // False loose
 */

/* const favNumber = prompt("Enter number:")
console.log(favNumber)

if (favNumber == 10) {
  console.log(`Is true beause of the loose equality operator (==)`)
}

if (favNumber === 10){
  console.log("Won't return true because of the strict equality operator (===)")
} else {
  console.log((typeof favNumber), "And the input from the user is a string")
}
 */

// Coding challenge #3

/* const dolphinAverage = (97 + 112 + 101)/3
const koalasAverage = (109 + 95 + 123)/3

if(dolphinAverage === koalasAverage ) {
  console.log("It's a draw!")
} else if(dolphinAverage > koalasAverage && dolphinAverage >= 100) {
  console.log("Dolphins wins")
} else if(koalasAverage > dolphinAverage && koalasAverage >= 100){
  console.log("Kolas wins")
}
 */

// Switch case logic
// The 'break' moves the code to the next condition
/* const day = 'wednesday'

switch (day) {
  case 'monday':
    console.log('monday')
  break;
  case 'tuesday':
    console.log('tuesday')
    break;
  case 'wednesday':
  case 'thursday':
    console.log('wednesday and thursday')
    break;
  case 'friday':
    console.log('friday')
    break;
  case 'saturday':
  case 'sunday':
    console.log('Enjoy The weekend ')
    break;
  default:
    console.log('Not a week day')
  break;
} */

// Same as above but as an if-else statements

/* if(day === 'monday'){
  console.log('monday')
}else if(day === 'tuesday'){
  console.log('tuesday')
}else if(day === 'wednesday' || 'thursday'){
  console.log('wednesday and thursday')
} */


// challenge from codewars

/* const numbers = [1, 2, 3]
let sum = 0
numbers.forEach((number) => {
  let squared = number ** 2;
  console.log(squared);
  sum += squared;
  console.log(sum);
});
 */

// Code Challenge: Make number negavtive
// My Solution:

/* function makeNegative(num) {
  if(num > 0){
  return -num;
  } else if(num < 0) {
  return num;
  } else if(num === 0){
  return 0;
  }
}
 */

// My Soultion refactored

/* function makeNegative(num) {
 return num < 0 ? num : -num;
}
 */

// Conditinal (Ternay) Operator

/* const age = 10
age >= 18 ? console.log('Drunk') : console.log('Sober');

const drink = age >= 18 ? 'Drunk' : 'Sober';
console.log(drink)

console.log(`I am ${age >= 18 ? 'Drunk' : 'Sober'}`);
 */

// Coding Challenge #4
/* const bill = 301
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20
console.log(`The bill was $${bill} the tip was $${tip}, and the total value is $${bill + tip}`) */
