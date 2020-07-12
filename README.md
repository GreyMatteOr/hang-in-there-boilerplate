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

The `makeRandomPoster()` function calls on a helper function, `makePoster()`. This helper function ultimately creates a new instance of the `Poster` class, which is saved globally as `currentPoster`. It also is responsible for displaying the new `poster` to the primary template.

In order to view another random poster, the user can click on the `Make Another Random Poster` button(declared as `showRandomButton`) to invoke the `makeRandomPoster()` function.  An event listener leads the user's action to the invocation of the function.  To capture the node associated with the corresponding HTML class, we used the `querySelector()` method on the document.

## Create User Poster

If the user is on the default display page, one click on the `Make Your Own Poster` button (declared as `newPosterFormButton`) will hide the main display and instead, show the form through which the user can submit their own values for the poster's image, title, and quote.  This is accomplished by the `toggleFormDisplay()` function passed in through an event listener.  

Next, the user can insert the address of any image into the designated input box, along with one title and one quote of the user's choice.  To see the user's unique poster on the default display page, the user must click the `Show My Poster` button on the interface(declared as `newPosterButton`).  The `makeUserPoster()` function is invoked here, which is set to prevent the default `makeRandomPoster` function from running as the user intends to show the new poster.  Each of the values for the image URL, title, and quote are accessed and pushed to the respective arrays.

`makePoster()` and `toggleFormDisplay()` are invoked at the end of the `makeUserPoster` functionality, which creates a new instance of the `Poster` class, assigns those user values (image URL, title, and quote) to be displayed as `currentPoster` on the display page.  The `toggleFormDisplay` function allows the user to view the display page once again.  Now, the user has toggled the view and designed a new poster that can be configured and seen where there was initially a random poster.   

## Save Current Poster

The user can choose to save any combination of images, titles, and quotes that produce either a randomly generated poster or a user-designed poster.  To do this, the user can click on `Save This Poster,` which uses an event listener call on the `storeShownPoster` function.  This function uses an if statement to determine whether or not the values of the current poster already exist in the `savedPosters` array.  

As long as the poster that is currently displayed has not already been saved, the `storeShownPoster` function will push the `currentPoster` to the `savedPosters` array.  Each element inside of this array will be displayed when the user clicks the `Show Saved Posters` button.   

## View Saved Posters

When the user clicks on `Show Saved Posters,` all of the posters saved in the `savedPosters` array will be shown on the screen.  This is done through an event listener calling the `toggleSaveButton` function, which hides the main display and instead, shows the users the `savedSection.`  Each time this function runs, the `savedGrid` will reset so that exactly one display of each saved poster is shown to the user.  A for loop iterates over the `savedPosters` array, which leads to the display of each of the unique saved posters from the array.  Once the user has explored all of the saved posters, the `Back to Main` button will lead them back to the main display through toggling `.hidden`.


## Delete Saved Poster - ML


























































# Hang In There

A boilerplate repo.

## Set Up

1. One teammate: fork this repository
2. Go to settings and turn on GitHub Pages for this repository
3. All teammates: clone down this repository
4. `cd` into the repository
5. Run `open index.html` to view it in the browser

## Progression

### Iteration 0 - Main Page

![screenshot of main page showing poster](/readme-imgs/homepage.png)

- When the page loads, we should see a poster with a randomly selected image, title, and quote

### Iteration 1 - Switching Views

Form page:
![screenshot of form](/readme-imgs/form.png)

Saved posters page (once working with extra saved posters):
![screenshot of saved posters page](/readme-imgs/saved.png)

- When a user clicks the "Make Your Own Poster" button, we should see the form, and the main poster should be hidden
- When a user clicks the "View Saved Posters" button, we should see the saved posters area, and the main poster should be hidden
- When a user clicks the "Nevermind, take me back!" or "Back to Main" buttons, we should only see the main poster section
- In summary: Be able to switch between the three views (main poster, form, and saved posters) on the correct button clicks

_Hint: go check out the HTML and CSS files to see how the form and saved posters sections are being hidden in the first place_

## Iteration 2 - Creating a New Poster

Form being filled out:
![screenshot of form](/readme-imgs/form.png)

Once poster is saved:
![screenshot of result](/readme-imgs/form-result.png)

- On the new poster form view, users should be able to fill out the three input fields and then hit the save button
- When the save button is clicked, several things will happen:
  - Save the submitted data into the respective arrays (image URL into the images array, etc) so that future random posters can use the user-created data
  - Use the values from the inputs to create a new instance of our Poster class
  - Change back to the main poster view (hiding the form view again)
  - Display the newly created poster image, title, and quote in the main view

## Iteration 3 - Saving & Viewing Posters

Saved posters view:
![screenshot of saved posters section](/readme-imgs/saved.png)

- When a user clicks the "Save This Poster" button, the current main poster will be added to the `savedPosters` array.
- If a user clicks the "Save This Poster" more than once on a single poster, it will still only be saved once (no duplicates)
- When a user clicks the "Show Saved Posters" button, we should see the saved posters section
- All the posters in the `savedPosters` array should be displayed in the saved posters grid section

## Iteration 4 - Deleting Saved Posters

- From the saved posters view, if a user double clicks a saved poster, it will be deleted

_Hint: How will you update the data model to achieve this?_

## Optional Extensions - Gettin' fancy

Here's a list of possible extensions to implement - but **ONLY IF** your team has completed all the previous iterations **AND** have cleaned up your code to make it DRYer and more readable.

You are welcome to add your own extensions. Be sure they are thoughtful in terms of UX/UI, and that they do not break any prior functionality.

- Implement data validation and error handling into the form (disable button, provide error messages if data entered is not correct, etc)
- In the main poster view, allow users to click each piece of the poster (image, title, quote) to update just that piece with another random item from the appropriate array
- When a user single clicks a saved poster, create a modal to view it larger
- Allow users to drag and drop saved posters into whatever order they want them to appear


Project spec & rubric can be found [here](https://frontend.turing.io/projects/module-1/hang-in-there.html)
