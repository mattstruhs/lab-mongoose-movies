const mongoose = require("mongoose");
const Celebrity = require("../models/celebrity");
const Movie = require('../models/movie')

const celebArray = [
  {
    name: "Robert Downey Jr",
    occupation: "actor",
    catchphrase: "Look at me, I'm Ironman",
  },
  {
    name: "Celeb2",
    occupation: "actor",
    catchphrase: "I'm not Ironman",
  },
  {
    name: "Celeb3",
    occupation: "singer",
    catchphrase: "Shalalalalala",
  },
];

const movieArray = [
  {
    title: "title1",
    genre: "genre1",
    plot: "plot1",
  },
  {
    title: "title2",
    genre: "genre2",
    plot: "plot2",
  },
  {
    title: "title4",
    genre: "genre3",
    plot: "plot3",
  },
];

// establish a connection to the db
mongoose
  .connect("mongodb://localhost/starter-code", { useNewUrlParser: true })
  .then((x) => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
    Celebrity.create(celebArray)
      .then((celebritiesFromDB) => {
        console.log(`${celebritiesFromDB.length} celebrites have been added`);
        mongoose.connection.close();
      })
      .catch((err) => console.log("err", err));
    Movie.create(movieArray)
    .then((celebritiesFromDB) => {
      console.log(`${celebritiesFromDB.length} celebrites have been added`);
      mongoose.connection.close();
    })
    .catch((err) => console.log("err", err));
  })
  .catch((err) => {
    console.error("Error connecting to mongo", err);
  });
