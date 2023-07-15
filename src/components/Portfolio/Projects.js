const notetaker = require("../../images/notetaker1.jpg");
const recipe = require("../../images/Recipe-Bank.png");
const travel = require("../../images/AIO-App.png");
const weather = require("../../images/weather 1.jpg");
const text = require("../../images/homework19-1.jpg");
const schedule = require("../../images/workday scheduler 1.jpg");

const Projects = [
  {
    title: "Recipe Bank",
    desc: "This application was made in mind for poeple who love to share, create and store recipes. The application allows the user to create a recipe, store it in the database and share it with other users. Users are also able to comment on other poeples recipes.",
    github: " https://github.com/sanjaybenu/recipe-bank",
    deployedapp: "https://your-recipe-bank.herokuapp.com/",
    image: recipe,
  },
  {
    title: "Travel Application",
    desc: "This application is made for travellers. It is a one stop website that users are able to view the weather, local attractions, restuarent, news and also money converstion.",
    github: "https://github.com/Stuartteh1995/aio-travel-app",
    deployedapp: "https://stuartteh1995.github.io/aio-travel-app/",
    image: travel,
  },
  {
    title: "Weather Application",
    desc: "This application allows user to view the weather forcast for the next 5 days for any city in the world.",
    github: "https://github.com/Stuartteh1995/weather-forcast",
    deployedapp: "https://github.com/Stuartteh1995/weather-forcast",
    image: weather,
  },
  {
    title: "Just another text editor",
    desc: "This application allows the user to download a simple text editor app.",
    github: "https://github.com/Stuartteh1995/just-another-text-editor",
    deployedapp: "https://github.com/Stuartteh1995/just-another-text-editor",
    image: text,
  },
  {
    title: "Work day scheduler",
    desc: "This application allows the user to create and edit a work day schedule.",
    github: "https://github.com/Stuartteh1995/Work-Day-Scheduler",
    deployedapp: "https://github.com/Stuartteh1995/Work-Day-Scheduler",
    image: schedule,
  },
  {
    title: "Note taker",
    desc: "This application allows user take notes and edit it.",
    github: "https://github.com/Stuartteh1995/note-taker",
    deployedapp: "https://note-taker-stuart.herokuapp.com/",
    image: notetaker,
  },

];

export default Projects;
