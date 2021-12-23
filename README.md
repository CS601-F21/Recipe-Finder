Project Description
===================

The idea behind this project was to make it easier for people without and 'kitchen skills or knowledge' to know what they can cook with the ingredients they already have at home. They can search for recipes based on the time taken to cook the recipes and various different tags

Tech Stack Used
===============

React.js --> React was used for building the front-end of the website. Although I had basic knowledge about html, css and javascript I had never used react before and I was completely in the dark about various different concepts such as Hooks and state management.

Redux --> Redux was used as a state management tool, initially I did not plan on using redux, but with the number of different components I had to end up using Redux to make state management much easier, or atleast thats what I thought, but setting up Redux was a challenge on it's own and understanding the process of accessing the state, making changes to it using Action Creators and Reducers took quite some time.

React Router --> Since the website is not a single page application, I redirect users to a new page for them to be able to actually be able see the step-by-step instructions of how to cook a recipe, I had to use React Router for that

Flask --> Flask was used on the server side of the program to be able to handle the requests from the front-end and send back an appropriate response after querying the database.

MongoDB --> MongoDB was used as the DB for this project, primararily because of the type of data we had, it made more sense to opt for a no-sql database. Pymongo was used alongside Flask to query the database.
