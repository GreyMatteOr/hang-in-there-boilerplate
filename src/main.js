// query selector variables go here 👇

var wholePoster = document.querySelector('.main-poster');
var posterImage = document.querySelector('.poster-img');
var posterTitle = document.querySelector('.poster-title');
var posterQuote = document.querySelector('.poster-quote');
var showRandomButton = document.querySelector('.show-random');
var savePosterButton = document.querySelector('.save-poster');
var displaySavedButton = document.querySelector('.show-saved');
var savedSection = document.querySelector('.saved-posters');
var savedGrid = document.querySelector('.saved-posters-grid')
var backFromSaved = document.querySelector('.back-to-main');
var newPosterFormButton = document.querySelector('.show-form');
var newPosterForm = document.querySelector('.poster-form');
var backFromNewPoster = document.querySelector('.show-main');
var newPosterButton = document.querySelector('.make-poster');
var inputQuote = document.querySelector('#poster-quote');
var inputTitle = document.querySelector('#poster-title');
var inputURL = document.querySelector('#poster-image-url');
var lastClicked;
var hasBeenClickedBefore;

// we've provided you with some data to work with 👇
var images = [
  "./assets/bees.jpg",
  "./assets/bridge.jpg",
  "./assets/butterfly.jpg",
  "./assets/cliff.jpg",
  "./assets/elephant.jpg",
  "./assets/flock.jpg",
  "./assets/fox.jpg",
  "./assets/frog.jpg",
  "./assets/horse.jpg",
  "./assets/lion.jpg",
  "./assets/mountain.jpg",
  "./assets/pier.jpg",
  "./assets/puffins.jpg",
  "./assets/pug.jpg",
  "./assets/runner.jpg",
  "./assets/squirrel.jpg",
  "./assets/tiger.jpg",
  "./assets/turtle.jpg"
];

var titles = [
  "determination",
  "success",
  "inspiration",
  "perspiration",
  "grit",
  "empathy",
  "feelings",
  "hope",
  "believe",
  "try",
  "conviction",
  "accomplishment",
  "achievement",
  "ambition",
  "clarity",
  "challenge",
  "commitment",
  "confidence",
  "action",
  "courage",
  "focus",
  "breathe",
  "gratitude",
  "imagination",
  "kindness",
  "mindfulness",
  "knowledge",
  "opportunity",
  "passion",
  "patience",
  "practice",
  "smile",
  "trust",
  "understanding",
  "wisdom"
];
var quotes = [
  "Don’t downgrade your dream just to fit your reality, upgrade your conviction to match your destiny.",
  "You are braver than you believe, stronger than you seem and smarter than you think.",
  "You are confined only by the walls you build yourself.",
  "The one who has confidence gains the confidence of others.",
  "Act as if what you do makes a difference. It does.",
  "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  "Never bend your head. Always hold it high. Look the world straight in the eye.",
  "What you get by achieving your goals is not as important as what you become by achieving your goals.",
  "Believe you can and you're halfway there.",
  "When you have a dream, you've got to grab it and never let go.",
  "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
  "No matter what you're going through, there's a light at the end of the tunnel.",
  "It is our attitude at the beginning of a difficult task which, more than anything else, will affect its successful outcome.",
  "Life is like riding a bicycle. To keep your balance, you must keep moving.",
  "Just don't give up trying to do what you really want to do. Where there is love and inspiration, I don't think you can go wrong.",
  'Limit your "always" and your "nevers."',
  "You are never too old to set another goal or to dream a new dream.",
  "Try to be a rainbow in someone else's cloud.",
  "You do not find the happy life. You make it.",
  "Inspiration comes from within yourself. One has to be positive. When you're positive, good things happen.",
  "Sometimes you will never know the value of a moment, until it becomes a memory.",
  "The most wasted of days is one without laughter.",
  "You must do the things you think you cannot do.",
  "It isn't where you came from. It's where you're going that counts.",
  "It is never too late to be what you might have been.",
  "Happiness often sneaks in through a door you didn't know you left open.",
  "We must be willing to let go of the life we planned so as to have the life that is waiting for us.",
  "Never limit yourself because of others’ limited imagination; never limit others because of your own limited imagination.",
  "Be the change that you wish to see in the world.",
  "Let us make our future now, and let us make our dreams tomorrow's reality.",
  "You don't always need a plan. Sometimes you just need to breathe, trust, let go, and see what happens.",
  "If I cannot do great things, I can do small things in a great way.",
  "Don't wait. The time will never be just right.",
  "With the right kind of coaching and determination you can accomplish anything.",
  "If you have good thoughts they will shine out of your face like sunbeams and you will always look lovely.",
  "No matter what people tell you, words and ideas can change the world.",
  "Each person must live their life as a model for others.",
  "A champion is defined not by their wins but by how they can recover when they fall."
];

var savedPosters = [];
var currentPoster;

// event listeners go here 👇

showRandomButton.addEventListener('click', makeRandomPoster);
newPosterFormButton.addEventListener('click', toggleFormDisplay);
displaySavedButton.addEventListener('click', toggleSaveButton);
backFromNewPoster.addEventListener('click', toggleFormDisplay);
backFromSaved.addEventListener('click', goBackFromDisplaySaved);
newPosterButton.addEventListener('click', makeUserPoster);
savePosterButton.addEventListener('click', storeShownPoster);
savedGrid.addEventListener('click', clickTwiceThenDelete);
//var savePosterButton = document.querySelector('.save-poster');

// functions and event handlers go here 👇
// (we've provided one for you to get you started)!

// create makeRandomPoster() should access 1 random element from each of the 3 global arrays: images, titles, and quotes
// we will do so using the invocation of getRandomIndex() per array
// create a new instance of the Poster class using this data, via makePoster()
// as a side effect, it will store this instance as our current poster that is being displayed

function clickTwiceThenDelete(event) {
  var id = event.target.id.split('-');
  var index = id[1];
  if (lastClicked === index) {
    savedPosters.splice(index, 1);
    savedGrid.innerHTML = '';
    for (var i = 0; i < savedPosters.length; i++) {
      var newHTML =
        `<article class="mini-poster" id="mini-${i}">
          <img class="poster-img" id="miniIMG-${i}" src="${savedPosters[i].imageURL}" alt="This is a motivational picture about ${savedPosters[i].title}.">
          <h2 class="poster-title" id="miniTTL-${i}">${savedPosters[i].title}</h2>
          <h4 class="poster-quote" id="miniQTE-${i}">${savedPosters[i].quote}</h4>
        </article>`;
      savedGrid.innerHTML += newHTML;
      lastClicked = false;
    }
  } else {
    lastClicked = index;
  }
};

function storeShownPoster() {
  if (!savedPosters.includes(currentPoster)) {
    savedPosters.push(currentPoster);
  }
};
//to refactor: try if (!savedPosters[savedPosters.length -1] === currentPoster)then push

function makeRandomPoster() {
  var newURL = images[getRandomIndex(images)];
  var newTitle = titles[getRandomIndex(titles)];
  var newQuote = quotes[getRandomIndex(quotes)];
  makePoster(newURL, newTitle, newQuote);
};

function makeUserPoster(event) {
  event.preventDefault();
  var newURL = inputURL.value;
  var newTitle = inputTitle.value;
  var newQuote = inputQuote.value;
  images.push(newURL);
  titles.push(newTitle);
  quotes.push(newQuote);
  makePoster(newURL, newTitle, newQuote);
  toggleFormDisplay();
};

function makePoster(imgURL, title, quote) {
  var newPoster = new Poster(imgURL, title, quote);
  currentPoster = newPoster;
  posterImage.src = currentPoster.imageURL;
  posterImage.alt = `This is a motivational picture about ${currentPoster.title}.`;
  posterTitle.innerText = currentPoster.title;
  posterQuote.innerText = currentPoster.quote;
  // return newPoster;
};

function toggleFormDisplay() {
  wholePoster.classList.toggle('hidden');
  newPosterForm.classList.toggle('hidden');
};

function toggleSaveButton() {
  wholePoster.classList.toggle('hidden');
  savedSection.classList.toggle('hidden');
  savedGrid.innerHTML = '';
  for (var i = 0; i < savedPosters.length; i++) {
    var newHTML =
      `<article class="mini-poster" id="mini-${i}">
        <img class="poster-img" id="miniIMG-${i}" src="${savedPosters[i].imageURL}" alt="This is a motivational picture about ${savedPosters[i].title}.">
        <h2 class="poster-title" id="miniTTL-${i}">${savedPosters[i].title}</h2>
        <h4 class="poster-quote" id="miniQTE-${i}">${savedPosters[i].quote}</h4>
      </article>`;
    savedGrid.innerHTML += newHTML;
  };
};

function goBackFromDisplaySaved() {
  wholePoster.classList.toggle('hidden');
  savedSection.classList.toggle('hidden');
};

// makePoster() should take 3 arguments.
// The poster class was provided in poster.js for us and we instantiate it using the arguments that get passed in.
// The new instance also gets assigned the global variable currentPoster.

// getRandomIndex() takes an array as an argument and returns a random positive number representing an index it might have.
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

makeRandomPoster();
