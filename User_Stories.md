# Final Project Overview: Code MD201-4

## Bites'N Bethesda

### User Stories

Maslow's Hierachy of Needs lists **food** as one of the basic physiological needs. When the call of nature beckons and hunger strikes, no one wants to be faced with the undaunting task of figuring out *where to eat*. Working through the logistics of satisfying one's hunger is difficult. As modern day *Hunter Gatherers* this can be further complicated when you have a various palettes to satisfy; i.e. a **family**.

This is where Bites'N Bethesda comes in... let's be honest; sometimes deciding where to eat can be hard. We won't promise to eliminate all the uncertainties, but our solutions are designed to make your *"Hunt"* a little bit simplier.

**Bites'n Bethesda** provides nutritious and delectable dining options in the Bethesda area; we allow our users to search our database by providing key *"cuisine options"* (i.e. Italian, Asian, Spanish, and French) to fine-tune your dining experience. To top it off, we will even throw in **recommended parking location(s)** for your selected dining location... because, yeah we thought of that too!!

## Problem Domain

To create this *"dine-out selection"* application we enlisted a team of talented development experts. The project stakeholders are as follows:

-   `Market researchers`: researches were engaged to conduct market analysis on restaurants within the Bethesda area. Their findings would then highlight \***sixteen (16) marquee restaurants** in Bethesda; the names of which would be submitted to our development team. *N.B. The analysis is re-initiated every month to provide an updated database for the application*.

-   `Videographers/Photographers`: a team of *visionaires* visited all five locations to shoot eye-catching images of the restaurants.

-   `UX/UI Designers`: a team of designers will *wireframe* the layout and user experience components of the project.

-   `Developers`: a development team was tasked with the challenge of bringing **Bites'N Bethesda** to life. They are the *brains* behind the `technical requirements` and innovations of the application.

## Technical Requirements:

~~Once the `marketing team` submits the results from their analysis the `videographers` will go out and capture the *"best views"* of each restaurant.~~

`UX/UI Designers` will generate wireframmed sketches and details which will guide the development team's formulation of `technical requirements` for the project (*see attached sketches and notes in the project assets folder*).

The application will consist of **four (4)** HTML pages with accompanying CSS and JavaScript code to style and drive the interactivity of the application. A master repository `final_bnbproject` will be created with accompanying branches: `html-content`; `css-content`; `js-content`. *User Stories* will be held on the master branch.

The **four** primary HTML pages are as follows: `index.html` `contact.html` `select.html` and `results.html`. Each HTML page will be styled by its respective CSS page: `main.css` `contact.css` `select.css` and `results.css`. The entire project will be driven by the JavaScript code created in a `select.js` and the subsequent `results.js` file.

The application will launch on a main page `index.html`. It includes an `about` section and a *tag-line*. A link is established to the **selection page** `select.html` titled `LETS BEGIN`. There are also established links in the `navbar` to the `select.html` and `contact.html` page.

The selection page will utilize a `div` with radio selections of **four cuisine options**. The users selections will invoke the display of **four restaurant logos** on each clicked cuisine selection. This is facilitated with an `eventListener` with initiates `on click`; pulls from an array and displays the *four (4) corresponding restaurant logo* **images** (*determined by the user's previously clicked cuisine selection*) on the `select.html` page. A subsequent user selection of any one of the \*four restaurant logo options will `display a result` of the restaurant image on the `result.html` page. This entire functionality is powered by the `select.js` file which utilizes `arrays`, **DOM manipulation**, `function declarations`, **For-Of loops**, **protoyping**, and `local storage` to drive the projects interactivity.

An embedded`video banner` will also be displayed on the `select.html` using the `video` tag to give the user an area overview of the Bethesda area. The Video will be *load and run automatically* *on loop* when the select page is initiated. The user will not have **access to the video controls** and the video will be displaced in the instant the user selects a **Cuisine Option**.

On the `results.html` page the Javascript code `results.js` will manipulate the DOM (*pulling the previously* **stored logo selection** *from local storage and aligning it with it's associated* **restaurant image**). The implied DOM manipulation will display the name and image of the user's **selected restaurant**. Finally, the application will reference the *nearest parking location(s)*. A `link` titled "Available Parking" will show a preview snippet from *Google maps* `on hover` (*whenever the user hovers the mouse pointer over the coded area*).

## Project Timeline

-   **Tuessday, April 2nd**: Initial HTML + CSS Demo to be submited for review and assessment

-   **Wednesda, April 3rd**: JavaScript included to project and demo conducted for review and assessment

-   **Thursday, April 4th**: Beta test for project

-   **Saturday, April 6th**: Full demo for final project with presentation elements.

N.B. To `reload` or return the application to home a `link` is established in the NAV-BAR and the **company logo** (*This is accessible on all four pages*). **Additionally, the `assets` folder will also house all restaurant images and video relevant to the project.**

-   Update - April 4, 2019: A navbar was included to each page and a `contact.html` page will be added to the project. The team is exploring the possibility of including a clever *easter egg*; details will be provided in future updates to the *User Stories* file.

-   Update - April 8, 2019: *Easter egg* inclusion was abandoned. Contact page completed and effectively linked into project.

-   Update - April 10, 2019: *Video file* `bethview_trim.mp4` will be loaded locally due to Github restrictions.
