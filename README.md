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


 ## Challenges

While we have had numerous opportunities to develop our skills and deepen our understanding of the core concepts, we have tackled some challenges along the way.

1. The `clickTwiceThenDelete` function:
    + In creating this function, there were a few pieces to sort.  First, we knew we wanted the user's experience to be as seamless as possible.  Through our first attempt at this functionality, the user would have had to click on the same element of the saved poster two consecutive times in order for it to be removed from the display.  If the user clicked on the title of the saved poster once, he or she would have to click on the title a second time for it to be deleted.  If the user clicked on the title first and the image after, the poster would remain on the page.  

    + Our problem-solving approach was to modify the function so it could track the last clicked element of the saved poster, which would have the same id index whether the user clicks the image, title, or quote.  As long as the user clicks on any element of the same poster twice (in a timely way), the entire saved poster is removed from the display.  We used the `.split` method on each id to grab and track the index number of each poster's elements.  

    + Furthermore, while refactoring our code, we discovered the `dblclick` event, which would cut back the length of our `clickTwiceThenDelete` function.  In order to do this, we removed our `if/else statement` from the function while keeping some necessary lines of code.  When this function was put to the test, we noticed some bugs in that the user could not click anywhere on each saved poster to delete it, and that the double click feature was not working in a predictable manner.  With the user's experience in mind, we ultimately decided to revert back to our fully functional version of `clickTwiceThenDelete`.

1. Preventing the default display page when showing user's poster:
    + The user has the ability to create a poster of their choosing and hopes to view the poster where the random poster generates automatically.  This auto-generation occurs because of the `makeRandomPoster` function that is invoked upon load.  During testing, we noticed a slight flash of the user poster on the display page after the `Show My Poster` button was clicked.  What could be blocking this user poster from display?

    + We revisited our `makeUserPoster` function and realized we needed to use the `.preventDefault()` method to avoid showing the user another random poster.  This method acts on the event, then the user's image URL, title, and quote get pushed to the arrays that contain the collection of similar elements for poster generation.  Finally, the `makePoster` function is invoked with the user's input values, and the user's poster is displayed on the main view.  The `.preventDefault()` method allows the rest of our functionality to do its job, uninterrupted.

1. The `hidden` CSS class:
    + While examining our HTML file, we noticed `.hidden` identified as a class for all of the other sections the user could view and interact with.  Within this class, the `display` property was set to a value of `none`, which meant that unless we hid the default page, the user would never be able to access the `Make Your Own Poster` form or the `Show Saved Posters` grid view.  After doing some research on `toggle`, we decided to create a few functions that toggled `.hidden` from the class list of the target node.  When these functions are called, the two sections in question are toggled, so that while one is hidden, the other is viewable.  This feature allows the user to switch views upon button click. 
