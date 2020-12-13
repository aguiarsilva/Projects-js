class Media {
    constructor(title){
      this._title = title;
      this._isCheckedOut = false;
      this._ratings = [];
    }
    get title(){
      return this._title;
    }
    get isCheckedOut (){
      return this._isCheckedOut;
    }
    get ratings(){
      return this._ratings;
    }
    set isCheckedOut(newStatus){
      this._isCheckedOut = newStatus;
    }
    toggleCheckOutStatus() {
      this._isCheckedOut = !this._isCheckedOut;
      return this._isCheckedOut;
      }
    getAverageRating(){
      let ratingsSum = this._ratings.reduce((currentSum, rating) => currentSum + rating, 0);
      const lengthOfArray = this._ratings.length;
      let averageRatings = ratingsSum/lengthOfArray;
      return averageRatings;
    }
    addRating(rating){
      if(rating > 5 || rating === 0){
        return `Rating must be between 1 and 5`;
      }
      this.ratings.push(rating);
    } 
  }
  
  class Book extends Media {
    constructor(author, title, pages){
      super(title);
      this._author = author;
      this._pages = pages;
    }
    get author() {
      return this._author;
    } 
  
    get pages() {
      return this._pages;
    }
  }
  
  class Movie extends Media {
    constructor(director, title, runTime, movieCast){
      super(title);
      this._director = director;
      this._runTime = runTime;
      this._movieCast = movieCast;
    }
    get director(){
      return this._director;
    }
  
    get runTime (){
      return this._runTime;
    }
    get movieCast(){
      return this._movieCast;
    }
  }
  
  class Cd extends Media {
    constructor(title, singer, songTitles){
      super(title);
      this._singer = singer;
      this._songTitles = [];
    }
    get singer(){
      return this._singer;
    }
  
    get songTitles(){
      return this._songTitles;
    }
  shuffle(){
    const songs = this._songTitles;
    for(var i = 0; i< songs.length; i--){
      const j = Math.floor(Math.random() * (i +1));
      [songs[i], songs[j] = songs[j], songs[i]];
    }
    return songs;
  } 
  }
  
  class Catalog {
      constructor(mediaList){
      this._MyCatalog = [mediaList];
     }
    
  get mediaList() {
       return this._mediaList;
    }
    
  set mediaList(newMedialist)  {
     this._MyCatalog.push(newMedialist);
     }
  }
  
  const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything',544);
  console.log(historyOfEverything.isCheckedOut);historyOfEverything.toggleCheckOutStatus();console.log(historyOfEverything.isCheckedOut);
  historyOfEverything.addRating(4);
  historyOfEverything.addRating(5);
  historyOfEverything.addRating(5);
  console.log(historyOfEverything.getAverageRating());
  
  const speed = new Movie('Jan de Bont', 'Speed', 116);
  speed.toggleCheckOutStatus();
  console.log(speed.isCheckedOut);
  speed.addRating(1);
  speed.addRating(1);
  speed.addRating(5);
  console.log(speed.getAverageRating());
  
  const Test = new Catalog();
  Test.mediaList = historyOfEverything;
  Test.mediaList = speed;
  console.log(Test)