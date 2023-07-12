# (Old) ConDucktor Blog

## About

Hello. Welcome to the world's most barebones blogging webapp.

This project started 3 months ago as part of my coding bootcamp's homework assignments,<br>
but I was forced to abandon it as it was assigned concurrently with one of our major projects.

Now I've returned in the middle of our final project to fill in the pieces and turn in a minimum viable product.

Here it is with no CSS in sight (more on that later).

## The App

The blog was assigned as a test of our MCV skills, so that's how it's structured.

A MySQL relational database is used to store all data.

There are models for users, posts, and comments.

User routes are used to create user accounts, logging in, and signing out.
Passwords are hashed with bcrypt.

Post and comment routes are used to create and view posts and their respective comments.

I used handlebars for the views, which aren't too exciting:

 ![They look like this](./public/assets/screenshot.png)

## Challenges

Quite a bit of time passed from the start of this project to its completion.

I simply don't use some of the required libraries anymore (like Handlebars).<br>
It was challenging to return to subjects our coursework had left behind.<br>
I was on the right track 3 months ago, but it was helpful to have course-provided<br>
code on hand to fill in the gaps.

From a coding standpoint, I encountered two major issues:

<ol>
  <li>I couldn't get the app to work using HTTPS, so I was forced to use HTTP.</li>
  <li>My bcrypt hooks were incorrectly configured, preventing signup and live testing.</li>
</ol>	

## Future Development

I want to ditch the Handlebars and integrate this app with my React protfolio.

Fortunately, there's no CSS to discard or cry over, so switching to Tailwind shouldn't be too hard.

## Acknowledgements

As stated above, some code (particularly Handlebars views) was leveraged from coursework. The repo in question is linked [here](https://nu.bootcampcontent.com/NU-Coding-Bootcamp/NU-VIRT-FSF-PT-01-2023-U-LOLC/-/tree/main/00-homework-solutions/14-Main).

Special thanks to [Reid Madock](https://github.com/reidmadock) for figuring out the bcrypt webhook issue.
