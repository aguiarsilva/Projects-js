let raceNumber = Math.floor(Math.random() * 1000);

const registeredEarly = false;
const age = 18;

if (age > 18 && registeredEarly !== false) {
  raceNumber += 1000;
};
if (age > 18 && registeredEarly !== false) {
  console.log(`Your race will be at 9:30am, and your Race Number is ${raceNumber}`);
} else if (age > 18 && registeredEarly == false){
  console.log(`Your race will be at 11:00am, and your Race Number is ${raceNumber}`);
}
if (age < 18) {
  console.log(`Your race will be at 12:30pm, and your Race Number is ${raceNumber}`);
} else {
  console.log(`You should see the registration desk`);
}
