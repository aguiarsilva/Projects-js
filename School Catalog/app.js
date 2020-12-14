//create a School Class with the properties that we will apply to the Child Classes
class School {
    constructor(name, level, numberOfStudents, testScores){
      this._name = name;
      this._level = level;
      this._numberOfStudents = numberOfStudents;
      this._testScores = testScores;
    }
    //create getters for the properties
    get name(){
      return this._name;
    }
    get level(){
      return this._level;
    }
    get numberOfStudents(){
      return this._numberOfStudents;
    }
    // create setter for numberOfStudents
    set numberOfStudents(newNumberOfStudents){
      if(typeof newNumberOfStudents === 'Number'){
        this._numberOfStudents = numberOfStudents;
      } else {
        console.log('Invalid input: numberOfStudents must be a set to a Number.');
      }
    }
    //test scores and average test scores
    get testScores(){
      return this._testScores;
    }
    addTestScore(num){
      if (typeof num === 'number' && num >= 0 && num <= 100){
        this._testScores.push(num);
      } else {
        console.log('Test scores should be a number ranging from 0 to 100');
      }
    }
    getAvgTestScores() {
      let scoreSum = this._testScores.reduce((initial, newScore) => {
        return initial+newScore;
      }, 0);
      let numOfScores = this._testScores.length;
      let avgScore = scoreSum / numOfScores;
      return avgScore.toFixed(2);
    }
    //create method quickFacts to log info to console
    quickFacts(){
      console.log(`${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`);
    }
    //create static method pickSubstituteTeacher
    static pickSubstituteTeacher(substituteTeachers){
      const subs = Math.floor(substituteTeachers.length * Math.random());
      return substituteTeachers[subs];
    }
  }
  // create PrimarySchool class
  class PrimarySchool extends School {
    constructor(name, numberOfStudents, pickupPolicy, testScores){
      super(name, 'primary', numberOfStudents, testScores);
      this._pickupPolicy = pickupPolicy;
    }
   get pickupPolicy() {
     return this._pickupPolicy;
   }
  }
  
  //Create MiddleSchool subclass
  class MiddleSchool extends School {
    constructor(name, numberOfStudents, testScores){
      super(name, 'middle', numberOfStudents, testScores);
  }
  }
  
  //create HighSchool class
  class HighSchool extends School{
    constructor(name, numberOfStudents, sportsTeams, testScores){
      super(name, 'high', numberOfStudents, testScores);
      this._sportsTeams = sportsTeams;
    }
    get sportsTeams() {
      console.log(this._sportsTeams);
    }
  }
  
  //create a school catalog class
  class SchoolCatalog {
    constructor(level){
      this._list =[];
      this._level = level;
    }
    get list(){
      return this._list;
    }
    get level(){
      return this._level;
    }
    addSchool(school){
      if(this.level === school.level) {
        this.list.push(school);
      } else {
        console.log(`Oops! You tried to add a ${school.level} school. This list accepts ${this.level} schools only.`)
      }
    }
     quickFacts (x) {
      console.log(
        `> ${x.name} has ${x.numberOfStudents} ${x.level} school students.`
      );
      if (x.level === 'high') {
        console.log(
          `  Intramural sports programs:\n  ${x.sportsTeams.join(', ')}`
        );
      }
    }
   print(){
    this.list.forEach(school => {
      this.quickFacts(school)
      
    });
  }
  }
  
  const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');
  lorraineHansbury.quickFacts();
  const sub = School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J.R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']);
  //console.log(sub);
  
  const alSmith = new HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field'], [95, 100, 75, 65, 89, 100, 90, 88, 100, 55, 0]);
  alSmith.quickFacts();
  console.log(alSmith._sportsTeams);
  console.log(alSmith.getAvgTestScores());
  //Test and Troubleshoot
  const primary = new SchoolCatalog('primary');
  const middle = new SchoolCatalog('middle');
  const high = new SchoolCatalog('high');
  high.addSchool(alSmith);
  //console.log(middle);
  primary.addSchool(lorraineHansbury);
  const jfk = new MiddleSchool('J.F.K', 485, '[89, 99, 100, 45, 50, 78, 95]');
  const washington = new PrimarySchool('George Washington', 518, "They reall don't care", [89, 95, 75, 80, 100, 100]);
  primary.addSchool(washington);
  middle.addSchool(jfk);
  //console.log(middle);
  //primary.quickFacts(lorraineHansbury);
  primary.print();