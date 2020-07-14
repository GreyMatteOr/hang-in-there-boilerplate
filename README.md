---
# Exploring the DOM with Motivational Posters
> A [Front-End Project](https://nicolegooden.github.io/hang-in-there-boilerplate/) by [Nicole Gooden](https://github.com/nicolegooden) and [Matthew Lane](https://github.com/GreyMatteOr)

___

## Introduction
We are Module One students at Turing School of Software and Design, and this is our first partner project.  We have used three core front-end languages -- HTML, CSS, and JavaScript -- to build a website.
Its title is *Hang in There* and it lets users create different motivational posters.  Each poster consists of an image (stored as a URL), title, and quote, which are then  displayed on a template poster.  Upon first load, the initial state of the website is a randomized poster.

#### Features to note:
+ [Generate random posters from pre-defined data](#generate-random-poster)
+ [Create a poster from user input](#create-user-poster)
+ [Save the poster that is currently displayed](#save-current-poster)
+ [View the collection of saved posters](#view-saved-posters)
+ [Delete saved poster with consecutive double-click](#delete-saved-poster)

Our website allows the user to choose between designing their own poster and enjoying randomly-generated posters provided by the developers.
___

## Generate Random Poster

When the user initially opens the page, there is an auto-display of a random poster object.  A poster object includes three properties: `image`, `title`, and `quote`.  In the case of a random poster, these properties are determined at random with the help of the `makeRandomPoster()` function.  These elements are selected from arrays that store their own respective data(i.e. images, titles, and quotes).  These arrays, by default, store numerous elements to be used in the generation of the random poster.

![generate random poster giphy](http://g.recordit.co/dXvOCjWyRj.gif)

The `makeRandomPoster()` function calls on a helper function, `makePoster()`. This helper function ultimately creates a new instance of the `Poster` class, which is saved globally as `currentPoster`. It also is responsible for displaying the new `poster` to the primary template.

In order to view another random poster, the user can click on the `Show Another Random Poster` button(declared as `buttonShowRandom`) to invoke the `makeRandomPoster()` function.  An event listener leads the user's action to the invocation of the function.  To capture the node associated with the corresponding HTML class, we used the `querySelector()` method on the document.

## Create User Poster

If the user is on the default display page, one click on the `Make Your Own Poster` button (declared as `buttonMakeYourOwnPoster`) will hide the main display and instead, show the form through which the user can submit their own values for the poster's image, title, and quote.  This is accomplished by the `toggleFormDisplay()` function passed in through an event listener.  

![create user poster giphy](http://g.recordit.co/j9TIWHtnXM.gif)

Next, the user can insert the address of any image into the designated input box, along with one title and one quote of the user's choice.  To see the user's unique poster on the default display page, the user must click the `Show My Poster` button on the interface(declared as `buttonShowMyPoster`).  The `makeUserPoster()` function is invoked here, which is set to prevent the default `makeRandomPoster` function from running as the user intends to show the new poster.  Each of the values for the image URL, title, and quote are accessed and pushed to their respective arrays.

`makePoster()` and `toggleFormDisplay()` are invoked at the end of the `makeUserPoster` functionality, which creates a new instance of the `Poster` class, assigns those user values (image URL, title, and quote) to be displayed as `currentPoster` on the display page.  The `toggleFormDisplay` function allows the user to view the display page once again.  Now, the user has toggled the view and designed a new poster that can be configured and seen where there was initially a random poster.   

## Save Current Poster

The user can choose to save any combination of images, titles, and quotes that produce either a randomly generated poster or a user-designed poster.  To do this, the user can click on the `Save This Poster` button, which uses an event listener to call on the `storeShownPoster` function.  This function uses an if statement to determine whether or not the values of the current poster already exist in the `savedPosters` array.  

![save current poster giphy](http://g.recordit.co/KWSzAzAp2V.gif)

As long as the poster that is currently displayed has not already been saved, the `storeShownPoster` function will push the `currentPoster` to the `savedPosters` array.  Each element inside of this array will be displayed when the user clicks the `Show Saved Posters` button.   

## View Saved Posters

When the user clicks on `Show Saved Posters`, all of the posters saved in the `savedPosters` array will be shown on the screen.  This is done through an event listener calling the `toggleSaveButton` function, which hides the main display and instead, shows the users the `sectionSavedPosters`.  Each time this function runs, the `articleSavedGrid` will reset so that exactly one display of each saved poster is shown to the user.  A for loop iterates over the `savedPosters` array, which leads to the display of each of the unique saved posters from the array.  Once the user has explored all of the saved posters, the `Back to Main` button will lead them back to the main display through toggling `.hidden`.

![view saved posters giphy](https://recordit.co/WlXeM07aOj.gif)

## Delete Saved Poster

While the `sectionSavedPosters` is displayed, the user can click two times consecutively on any poster to remove the poster element that is displaying from the HTML, as well as removing the corresponding `Poster` object from the `savePosters` array.

![delete saved poster giphy](http://g.recordit.co/1CCWjxRhdn.gif)

It achieves this through an event listener that responds any time the user clicks on any element in the `saved-posters` section. When a click is detected, the aptly named `clickTwiceThenDelete` function is called. The event object that gets created when this happens is passed to the function as an argument, and using that, the unique `id` of the element that was clicked gets stored. This `id` always follows the following format: the string `'mini'`, `'miniIMG'`, `'miniTTL'`, or `'miniQTE'` (depending on the element it belongs to) followed by a hyphen (`'-'`) and a number string. The number here indicates the index where the corresponding `Poster` object is stored in the `savedPosters` array. From here, the code splits into one of 2 states:

 1. If the poster was not the most-recent thing clicked, then store it's `IDNumber` as the `lastClicked` element.
 2. If the poster's `IDNumber` matches the one stored in `lastClicked`, then splice out the saved 'Poster' that it represents in the `savedPosters` array and refresh the display.

 Using this functionality, a user may now curate a beautiful collection of truly inspiring posters!

 ## Core Concepts - ML


 ## Challenges - NG
