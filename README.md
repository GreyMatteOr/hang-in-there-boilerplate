# Exploring the DOM with Motivational Posters
> A [Front-End Project](https://nicolegooden.github.io/hang-in-there-boilerplate/) by [Nicole Gooden](https://github.com/nicolegooden) and [Matthew Lane](https://github.com/GreyMatteOr)
---
## Contents
1. [Features](#features)
2. [Core Concepts](#core-concepts)
3. [Challenges](#challenges)
---

## Introduction
We are Module One students at Turing School of Software and Design, and this is our first partner project. We have used three core front-end languages -- HTML, CSS, and JavaScript -- to build a website.
Its title is *Hang in There* and it lets users create and display different motivational posters. Each poster consists of an image (stored as a URL), title, and quote, which are then displayed on a template poster. The website then helps the user to save, curate and display their collection of posters.
___

## Features
+ [Generate random posters from pre-defined data](#generate-random-poster)
+ [Create a poster from user input](#create-user-poster)
+ [Save the poster that is currently displayed](#save-current-poster)
+ [View the collection of saved posters](#view-saved-posters)
+ [Delete saved poster with consecutive double-click](#delete-saved-poster)

> [Back to the top](#exploring-the-dom-with-motivational-posters)
---

## Generate Random Poster

When the user initially opens the page, there is an auto-display of a random poster object.  A poster object includes three properties: `image`, `title`, and `quote`.  In the case of a random poster, these properties are determined at random with the help of the `makeRandomPoster()` function.  These elements are selected from arrays that store their own respective data(i.e. images, titles, and quotes).  These arrays, by default, store numerous elements to be used in the generation of the random poster.

![generate random poster giphy](http://g.recordit.co/dXvOCjWyRj.gif)

The `makeRandomPoster()` function calls on a helper function, `makePoster()`. This helper function ultimately creates a new instance of the `Poster` class, which is saved globally as `currentPoster`. It also is responsible for displaying the new `poster` to the primary template.

In order to view another random poster, the user can click on the `Show Another Random Poster` button (declared as `buttonShowRandom`) to invoke the `makeRandomPoster()` function.  An event listener invokes a function in response to the user's `'click'` action.  To capture the node associated with the corresponding HTML class, we used the `querySelector()` method on the document.

> [Back to Features](#features)

## Create User Poster

If the user is on the default display page, one click on the `Make Your Own Poster` button (declared as `buttonMakeYourOwnPoster`) will hide the main display and instead, show the form through which the user can submit their own values for the poster's image, title, and quote.  This is accomplished by the `toggleFormDisplay()` function passed in through an event listener.  

![create user poster giphy](http://g.recordit.co/j9TIWHtnXM.gif)

Next, the user can insert the address of any image into the designated input box, along with one title and one quote of the user's choice.  To see the user's unique poster on the default display page, the user must click the `Show My Poster` button on the interface (declared as `buttonShowMyPoster`).  The `makeUserPoster()` function is invoked here, which among other things, runs `event.preventDefault()`. This prevents the `saved-posters-grid` from refreshing the page and destroying all the session data (including the user's new poster). From there, each of the values for the image URL, title, and quote are accessed and pushed to their respective arrays.

`makePoster()` and `toggleFormDisplay()` are invoked at the end of the `makeUserPoster()` functionality, which creates a new instance of the `Poster` class and assigns those user values (image URL, title, and quote) to be displayed as `currentPoster` on the display page.  The `toggleFormDisplay()` function allows the user to view the display page once again.  Now, the user has toggled the view and designed a new poster that can be configured and seen where there was initially a random poster.   

> [Back to Features](#features)

## Save Current Poster

The user can choose to save any combination of images, titles, and quotes that produce either a randomly generated poster or a user-designed poster.  To do this, the user can click on the `Save This Poster` button, which uses an event listener to call on the `storeShownPoster()` function.  This function checks whether the specific poster object already exists in the `savedPosters[]` array. It is important to note that the function compares the particular point in memory where the poster is stored, not the values of its elements.

![save current poster giphy](http://g.recordit.co/KWSzAzAp2V.gif)

As long as the poster that is currently displayed has not already been saved, the `storeShownPoster()` function will push the `currentPoster` to the `savedPosters[]` array.  Each element inside of this array will be displayed when the user clicks the `Show Saved Posters` button.   

> [Back to Features](#features)

## View Saved Posters

When the user clicks on `Show Saved Posters`, all of the posters saved in the `savedPosters[]` array will be shown on the screen.  This is done through an event listener calling the `toggleSaveButton()` function, which hides the main display and instead, shows the users the `sectionSavedPosters`.  Each time this function runs, the `articleSavedGrid` will reset so that exactly one display of each saved poster is shown to the user.  A for loop iterates over the array, which then displays each of the unique posters from the array.  Once the user has explored the saved posters in the grid, the `Back to Main` button will lead them back to the main display by toggling `.hidden`.

![view saved posters giphy](https://recordit.co/WlXeM07aOj.gif)

> [Back to Features](#features)

## Delete Saved Poster

While `sectionSavedPosters` is displayed, the user can click two times consecutively on any poster to remove the poster element that is displaying from the HTML, as well as removing the corresponding `Poster` object from the `savePosters[]` array.

![delete saved poster giphy](http://g.recordit.co/1CCWjxRhdn.gif)

It achieves this through an event listener that responds any time the user clicks on any element in the `saved-posters` section. When a click is detected, the aptly named `clickTwiceThenDelete()` function is called. The event object that gets created when this happens is passed to the function as an argument. Then, the `id` property of `event.target` gets stored. This `id` always follows the following format: the string `'mini'`, `'miniIMG'`, `'miniTTL'`, or `'miniQTE'` (depending on the element it belongs to) followed by a hyphen (`'-'`) and a number string. The number here indicates the index where the corresponding `Poster` object is stored in the `savedPosters[]` array. From here, the code splits into one of two states:

 1. If the poster was not the most-recent node clicked, then store it's `IDNumber` as the `lastClicked` element.
 2. If the poster's `IDNumber` matches the one stored in `lastClicked`, then splice out the saved 'Poster' that it represents in the `savedPosters[]` array and refresh the display.

 Using this project's functionality, a user may now curate a beautiful collection of truly inspirational posters!

> [Back to Features](#features)

---
 ## Core Concepts

 1. [HTML](#html)
 2. [CSS](#css)
 3. [Interacting with DOM](#interacting-with-dom)
 4. [Capturing Nodes using querySelector](#capturing-nodes-using-the-querySelector)
 5. [Tying it all together with Events and Event Listeners](#tying-it-all-together-with-events-and-event-listeners)

> [Back to the top](#exploring-the-dom-with-motivational-posters)
 ---

#### HTML

  **HTML**, which stands for *Hyper Text Markup Language*, is the backbone of all websites and design.

  The language has a set of predefined *elements* with specific properties associated with them. Elements can range from giant titles, to paragraphs, to buttons and inputs along with [many others](https://developer.mozilla.org/en-US/docs/Web/HTML/Element). These elements are typically designated with a set of so-called *tags*, made up of an opening tag and typically a closing tag.  

  An opening tag takes the form of a identifier (like 'p', 'h1', or 'div') placed inside a pair of angle-brackets ('<' and '>'). The corresponding closing tag will be the exact same but with a forward slash ('/').  
  <br>**Example**: `<p>`, `<h1>`, and `<div>` are all opening tags with `</p>`, `</h1>`, and `</div>` as their corresponding closing tags.

  These elements can be created and filled with content, which can include text, links to other pages or images, or even other elements. Each element also has a number of [specific attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes) that control how the elements are displayed as well as certain behavior.

  After an HTML document is complete, an internet browser knows how to display it using conventions implemented inside the HTML.

> [Back to Core Concepts](#core-concepts)

#### CSS

  **CSS**, which stands for *Cascading Style Sheets*, is a complementary language to HTML that builds from the webpage structure in the HTML file. It attaches on to different elements or groups of elements and modifies their attributes.  These modifications pertain to the styling properties that are applied to the HTML elements.

  While it is possible to create styling in-line inside the HTML document, it is preferred (and generally easier) to create a separate CSS file and link to it inside the HTML.

>[Back to Core Concepts](#core-concepts)

#### Interacting with DOM

   Understanding the **Document Object Model** is fundamental to building and creating interactive websites. It converts HTML into a web page, as well as displays it in the browser window.

   *HTML* is a mostly static language - that is, once the webpage is loaded, the HTML is more or less unable to be changed; however, creating dynamic functionality and interactive UI requires some modularity to be possible. This is where the DOM becomes indispensable. The *DOM* is the interface that allows JavaScript to interact with what is being displayed without needing to modify the actual HTML code that built the website.

   The **Document Object** is organized in a *tree* hierarchy. When a website first loads, the HTML file is read from top to bottom, and each element is converted into a **DOM node**. If a DOM Node contains another element, then a new DOM node is created inside it (called a *child* of the *parent* node). This continues until the entire HTML is parsed in this way. Afterwards, access to the *Document Object* is stored in Javascript as the global variable **document**.

> [Back to Core Concepts](#core-concepts)

#### Capturing Nodes using the querySelector

  In order to interact with the DOM, it is crucial to understand how to isolate and modify certain parts of it. On the HTML side, it is usually helpful to identify which elements we will be using and give them an identifying `class`, or in the case of a single element, giving it a unique `id`.

  Then on the Javascript side, we can locate the DOM node(s) that corresponds to the desired HTML using the `document` method called `querySelector()`. We can use this to find the first element that matches a search string that is passed as an argument. For instance, we can use the search string `'p'` to isolate the first `<p>` element in the current Document Object. If we wanted to search for a `class`, we would add a preceding `'.'` character, and similarly a `'#'` character for an `id`.

  This then returns to us a *DOM node* which gives us access to that specific element on the web page.

> [Back to Core Concepts](#core-concepts)

#### Tying it all together with Events and Event Listeners

  In JavaScript, *Events* are a large collection of recognized triggers. These triggers might include:
  - the user clicking the mouse
  - the site loading
  - the cursor hovering over an HTML element
  - an input field being modified
  - [many, many more](https://developer.mozilla.org/en-US/docs/Web/Events)

Events are useful for creating website functionality that is performed **in response** to something happening on the page, especially user actions.

In order to actually implement responsive functionality, we need some way to recognize when that event occurs, and this is where *event listeners* come to the fore. Event Listeners attach themselves to a *DOM node* and have an event they are listening for and a function that will execute when that event occurs.

Listeners pass an **Event Object** into to whatever function they call as an argument. Event Objects store all of the information about the state of the page when the event occurred. This includes information such as the DOM node that triggered the event. It also includes methods that modify how the event proceeds, like `.preventDefault()`, which prevents the default behavior of certain HTML elements.

> [Back to Core Concepts](#core-concepts)

---
 ## Challenges  
> [Back to the top](#exploring-the-dom-with-motivational-posters)
---

While we have had numerous opportunities to develop our skills and deepen our understanding of the core concepts, we have tackled some challenges along the way.

1. The `clickTwiceThenDelete()` function:
    + In creating this function, there were a few pieces to sort.  First, we knew we wanted the user's experience to be as seamless as possible.  On our first attempt, we tried creating eventListeners inside of the for loop responsible for constructing and inserting the new `mini-posters` on the page. The end result of this was if user clicked twice on a specific child element of mini-poster, only that small piece would be deleted instead of the whole thing. Even if it did, delete the whole thing, we realized that meant, if the user clicked on the title first and the image after, the poster would remain on the page.  

    + Our problem-solving approach was to modify the function so it could track the last clicked element of the saved poster, which would have the same id index whether the user clicks the image, title, or quote.  As long as the user clicks on any element of the same poster twice (in a timely way), the entire saved poster is removed from the display.  We used the `.split()` method on each id to grab and track the index number of each poster's elements.  

    + Furthermore, while refactoring our code, we discovered the `dblclick` event, which would cut back the length of our `clickTwiceThenDelete()` function.  In order to do this, we removed our if/else statement from the function while keeping some necessary lines of code.  When this function was put to the test, we noticed some bugs in that the user could not click anywhere on each saved poster to delete it, and that the double click feature was not working in a predictable manner.  With the user's experience in mind, we ultimately decided to revert back to our fully functional version of `clickTwiceThenDelete()`.

1. Preventing the default display page when showing user's poster:
    + The user has the ability to create a poster of their choosing and hopes to view the poster where the random poster generates automatically.  This auto-generation occurs because of the `makeRandomPoster()` function that is invoked upon load.  During testing, we noticed a slight flash of the user poster on the display page after the `Show My Poster` button was clicked.  What could be blocking this user poster from display?

    + After a TON of digging, we finally discovered that the `<form>` element in HTML tells the browser to leave the current page and go a designated webpage whenever a button inside it is clicked. Because our `makeUserPoster()` function was only run when the `Show My Poster` button was clicked, we needed a way to prevent this behavior. Eventually, we discovered and then implemented the `.preventDefault()` method, which allows the rest of our functionality to do its job, uninterrupted.

1. The `hidden` CSS class:
    + While examining our HTML file, we noticed `.hidden` identified as a class for all of the other sections the user could view and interact with.  Within this class, the `display` property was set to a value of `none`, which meant that unless we hid the default page, the user would never be able to access the `Make Your Own Poster` form or the `Show Saved Posters` grid view.  After doing some research on `toggle()`, we decided to create a few functions that toggled `.hidden` from the class list of the target node.  When these functions are called, the two sections in question are toggled, so that while one is hidden, the other is viewable.  This feature allows the user to switch views upon button click.

> [Back to the top](#exploring-the-dom-with-motivational-posters)
___
