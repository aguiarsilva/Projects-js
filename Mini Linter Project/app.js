let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

let storyWords = story.split(' ');
//console.log(storyWords.length);

let betterWords = storyWords.filter(word => ! unnecessaryWords.includes(word));

let overusedWordsIndex = betterWords.filter(word => overusedWords.includes(word));
//console.log(overusedWordsIndex.length);
//console.log(overusedWordsIndex);

let sentences = [];
storyWords.forEach(word => {
  if (word[word.length-1] === '.' || word[word.length-1] === '!') {
    sentences+=1;
  }
});

let really = 0;
let very = 0;
let basically = 0;

let count = betterWords.forEach (word => {                         {
  if ( word === 'really') {
   return really++;
} else if (word === 'very') {
  return very++;
} else if (word === 'basically')
  return basically++;
}
});

  console.log(`counter for really: ${really}`);
  console.log(`counter for very: ${very}`);
  console.log(`counter for basically: ${basically}`);

console.log(storyWords.length, sentences.length);

//console.log(betterWords.join(' '));

// First, count overused words (This was also my solution to step 4)
overusedWords.forEach(word => {
  let count = 0;
  for (let i = 0; i < betterWords.length; i++) {
    if (betterWords[i] === word) {
      count++
    };

// Second, remove overused words every other time
    if (betterWords[i] === word && count % 2 === 0) {
      betterWords.splice(i, 1);
    }
  };
  console.log(`"${word}" count: ${count}`);
});
// First, account for capitalized words and remove special characters
let formattedWords = [];
let letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
betterWords.forEach(betterWord => {
  betterWord = betterWord.toLowerCase();
  betterWord = Array.from(betterWord);
  const allLetters = betterWord.filter(element => letters.includes(element));
  betterWord = allLetters.join('');
  formattedWords.push(betterWord);
});

// Second, create an array made up of each word's frequency
let mostCommonCount = [];
formattedWords.forEach(formattedWord => {
  formattedWordCount = 0;
  for (m = 0; m < formattedWords.length; m++) {
    if(formattedWords[m] === formattedWord) {
      formattedWordCount++
    }
  }
  mostCommonCount.push(formattedWordCount);
});

// Third, match the number of the highest word frequency with the word itself
let mostCommonWordCount = Math.max(...mostCommonCount);
let mostCommonWord = betterWords[mostCommonCount.indexOf(mostCommonWordCount)];

console.log(`The most common word is "${mostCommonWord}" which appears ${mostCommonWordCount} times`);

// First, create an array of replacement words
let replacementWords = ['particularly', 'extraordinarily', 'pretty', 'so', 'almost'];
let replacementWordsCount = 0;

// Second, cycle through overused words while accounting for the first instance of each overused word that's not going to be replaced
overusedWords.forEach(word => {
  let count = 0;
  for (let i = 0; i < betterWords.length; i++) {
    if (betterWords[i] === word) {
      count++;
      if (count > 1) {
        replacementWordsCount++;
        betterWords.splice(i, 1, replacementWords[replacementWordsCount-1]);
      }
    }
  };
});

console.log(storyWords.length, sentences.length)
console.log(betterWords.join(' '));
