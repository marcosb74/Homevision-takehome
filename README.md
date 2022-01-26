<p align="center">
 <img src="https://assets.website-files.com/605bb511622896024b160957/60afecbad76dc0756328b3a3_HomeVisionLogo_Black_MedRes.png" alt="Homevision logo"></a>
</p>

<h3 align="center">Homevision takehome challenge - Frontend  </h3>


---

<p align = "center">💡 This documentation contains all the details for the frontend challenge from Homevision </p>


## Table of Contents

- [Introduction](#introduction)
- [Technologies used](#tech_used)
- [Live version](#live)
- [Commands](#cmds)

## Introduction <a name = "introduction"></a>

This is the resolution of the frontend challenge provided by Homevision. The application allows the user to explore an "infinite" list of houses, there are edge cases contemplated such as, what happens if the user reaches the bottom of the list, or if the server fails an specific amount of times in a row. This webapp is also visible on mobile and has a live version.

## Technologies used <a name = "tech_used"></a>

**Project Details:**

This project was developed in React v17.0.2 and Typescript v4.5. The project uses Eslint/Prettier, I have used the Airbnb template as a base of my project configuration.

Libraries used:

- Axios-retry/Axios, in order to make HTTP requests and handle amount of request and time between requets.
- react-bootstrap, handles some of the css, such as the navbar and provides some components like alerts.
- react-intersection-observer, used to handle when the user reaches the bottom of the website, once triggered it will display more houses on screen
- react-spinners, a spinner that is displayed everytime a request is being proccesed.
- Eslint/Prettier, to standarize the format of the project 
- 
**In addition to this list, all necessary @types have been imported.**


**Hosting Details:**
- The project was deployed on Netlify.

## Live version: <a name = "live"></a>

  - [Live version!](https://homevision-challenge.netlify.app/)


## Commands <a name = "cmds"></a>


```
npm install -  to install the project
```
```
npm run start -  to  initialize the project locally
```
