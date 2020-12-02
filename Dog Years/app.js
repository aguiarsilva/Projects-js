// variable set to persons age
const myAge = 41;

// variable for the early years of a dog
let earlyYears = 2;

// multiply the earlyYears value by 10.5 and save to the variable earlyYears
earlyYears = earlyYears*10.5;

//the first two years are accounted on earlyYears and must be subtracted from person´s age;
let laterYears = myAge - 2;

//The later Years must be multiplied by 4;
laterYears *= 4;

//console.log(`${earlyYears}, ${laterYears}`);

//Add early and later Years to a new variable
let myAgeInDogYears = earlyYears + laterYears;

//Provide a string with person´s name and store in variable;
let myName = 'Bruno'.toLowerCase();

//log to console with the age information in human and dog years
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);