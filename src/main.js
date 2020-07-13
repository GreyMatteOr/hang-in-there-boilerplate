var backFromNewPoster = document.querySelector('.show-main');
var backFromSaved = document.querySelector('.back-to-main');
var displaySavedButton = document.querySelector('.show-saved');
var inputQuote = document.querySelector('#poster-quote');
var inputTitle = document.querySelector('#poster-title');
var inputURL = document.querySelector('#poster-image-url');
var newPosterForm = document.querySelector('.poster-form');
var newPosterFormButton = document.querySelector('.show-form');
var newPosterButton = document.querySelector('.make-poster');
var posterImage = document.querySelector('.poster-img');
var posterQuote = document.querySelector('.poster-quote');
var posterTitle = document.querySelector('.poster-title');
var savedGrid = document.querySelector('.saved-posters-grid')
var savePosterButton = document.querySelector('.save-poster');
var savedSection = document.querySelector('.saved-posters');
var showRandomButton = document.querySelector('.show-random');
var wholePoster = document.querySelector('.main-poster');

var images = [
  './assets/bees.jpg',
  './assets/bridge.jpg',
  './assets/butterfly.jpg',
    './assets/cliff.jpg',
  './assets/elephant.jpg',
  './assets/flock.jpg',
  './assets/fox.jpg',
  './assets/frog.jpg',
  './assets/horse.jpg',
  './assets/lion.jpg',
  './assets/mountain.jpg',
  './assets/pier.jpg',
  './assets/puffins.jpg',
  './assets/pug.jpg',
  './assets/runner.jpg',
  './assets/squirrel.jpg',
  './assets/tiger.jpg',
  './assets/turtle.jpg'
];

var quotes = [
  'Don’t downgrade your dream just to fit your reality, upgrade your conviction to match your destiny.',
  'You are braver than you believe, stronger than you seem and smarter than you think.',
  'You are confined only by the walls you build yourself.',
  'The one who has confidence gains the confidence of others.',
  'Act as if what you do makes a difference. It does.',
  'Success is not final, failure is not fatal: it is the courage to continue that counts.',
  'Never bend your head. Always hold it high. Look the world straight in the eye.',
  'What you get by achieving your goals is not as important as what you become by achieving your goals.',
  'Believe you can and you\'re halfway there.',
  'When you have a dream, you\'ve got to grab it and never let go.',
  'I can\'t change the direction of the wind, but I can adjust my sails to always reach my destination.',
  'No matter what you\'re going through, there\'s a light at the end of the tunnel.',
  'It is our attitude at the beginning of a difficult task which, more than anything else, will affect its successful outcome.',
  'Life is like riding a bicycle. To keep your balance, you must keep moving.',
  'Just don\'t give up trying to do what you really want to do. Where there is love and inspiration, I don\'t think you can go wrong.',
  'Limit your \'always\' and your \'nevers.\'',
  'You are never too old to set another goal or to dream a new dream.',
  'Try to be a rainbow in someone else\'s cloud.',
  'You do not find the happy life. You make it.',
  'Inspiration comes from within yourself. One has to be positive. When you\'re positive, good things happen.',
  'Sometimes you will never know the value of a moment, until it becomes a memory.',
  'The most wasted of days is one without laughter.',
  'You must do the things you think you cannot do.',
  'It isn\'t where you came from. It\'s where you\'re going that counts.',
  'It is never too late to be what you might have been.',
  'Happiness often sneaks in through a door you didn\'t know you left open.',
  'We must be willing to let go of the life we planned so as to have the life that is waiting for us.',
  'Never limit yourself because of others’ limited imagination; never limit others because of your own limited imagination.',
  'Be the change that you wish to see in the world.',
  'Let us make our future now, and let us make our dreams tomorrow\'s reality.',
  'You don\'t always need a plan. Sometimes you just need to breathe, trust, let go, and see what happens.',
  'If I cannot do great things, I can do small things in a great way.',
  'Don\'t wait. The time will never be just right.',
  'With the right kind of coaching and determination you can accomplish anything.',
  'If you have good thoughts they will shine out of your face like sunbeams and you will always look lovely.',
  'No matter what people tell you, words and ideas can change the world.',
  'Each person must live their life as a model for others.',
  'A champion is defined not by their wins but by how they can recover when they fall.'
];

var titles = [
  'determination',
  'success',
  'inspiration',
  'perspiration',
  'grit',
  'empathy',
  'feelings',
  'hope',
  'believe',
  'try',
  'conviction',
  'accomplishment',
  'achievement',
  'ambition',
  'clarity',
  'challenge',
  'commitment',
  'confidence',
  'action',
  'courage',
  'focus',
  'breathe',
  'gratitude',
  'imagination',
  'kindness',
  'mindfulness',
  'knowledge',
  'opportunity',
  'passion',
  'patience',
  'practice',
  'smile',
  'trust',
  'understanding',
  'wisdom'
];

var savedPosters = [];
var currentPoster;
var lastClicked;

backFromNewPoster.addEventListener('click', toggleFormDisplay);
backFromSaved.addEventListener('click', goBackFromDisplaySaved);
displaySavedButton.addEventListener('click', toggleSaveButton);
newPosterFormButton.addEventListener('click', toggleFormDisplay);
newPosterButton.addEventListener('click', makeUserPoster);
savedGrid.addEventListener('click', clickTwiceThenDelete);
savePosterButton.addEventListener('click', storeShownPoster);
showRandomButton.addEventListener('click', makeRandomPoster);

;function clickTwiceThenDelete(event) {
  var id = event.target.id.split('-');
  if (lastClicked === id[1]) {
    savedPosters.splice(id[1], 1);
    var deleteMe = document.querySelector(`#mini-${id[1]}`);
    savedGrid.removeChild(deleteMe);
    lastClicked = false;
  } else {
    lastClicked = id[1];
  }
};

;function displaySavedGrid() {
  savedGrid.innerHTML = '';
  for (var i = 0; i < savedPosters.length; i++) {
    var newHTML =
      `<article class='mini-poster' id='mini-${i}'>
        <img class='poster-img' id='miniIMG-${i}' src='${savedPosters[i].imageURL}' alt='This is a motivational picture about ${savedPosters[i].title}.'>
        <h2 class='poster-title' id='miniTTL-${i}'>${savedPosters[i].title}</h2>
        <h4 class='poster-quote' id='miniQTE-${i}'>${savedPosters[i].quote}</h4>
      </article>`;
    savedGrid.innerHTML += newHTML;
  }
};

;function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

;function goBackFromDisplaySaved() {
  wholePoster.classList.toggle('hidden');
  savedSection.classList.toggle('hidden');
};

;function makePoster(imgURL, title, quote) {
  var newPoster = new Poster(imgURL, title, quote);
  currentPoster = newPoster;
  posterImage.src = currentPoster.imageURL;
  posterImage.alt = `This is a motivational picture about ${currentPoster.title}.`;
  posterTitle.innerText = currentPoster.title;
  posterQuote.innerText = currentPoster.quote;
};

;function makeRandomPoster() {
  var newURL = images[getRandomIndex(images)];
  var newTitle = titles[getRandomIndex(titles)];
  var newQuote = quotes[getRandomIndex(quotes)];
  makePoster(newURL, newTitle, newQuote);
};

;function makeUserPoster(event) {
  var newURL = inputURL.value;
  var newTitle = inputTitle.value;
  var newQuote = inputQuote.value;
  event.preventDefault();
  images.push(newURL);
  titles.push(newTitle);
  quotes.push(newQuote);
  makePoster(newURL, newTitle, newQuote);
  toggleFormDisplay();
};

;function storeShownPoster() {
  if (currentPoster !== savedPosters[savedPosters.length - 1]) {
    savedPosters.push(currentPoster);
  }
};

;function toggleFormDisplay() {
  wholePoster.classList.toggle('hidden');
  newPosterForm.classList.toggle('hidden');
};

;function toggleSaveButton() {
  wholePoster.classList.toggle('hidden');
  savedSection.classList.toggle('hidden');
  displaySavedGrid();
};

makeRandomPoster();
