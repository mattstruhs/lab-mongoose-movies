const express = require("express");
const router = express.Router();
const Celebrity = require("../models/celebrity");

router.get("/celebrities", (req, res, next) => {
  // get all the entries from DB
  Celebrity.find({})
    .then((celebritiesFromDB) => {
      // pass the object which have the property name celebritiesFromDB
      // this will affect how we are refering to the properties in the hbs file
      res.render("celebrities/index.hbs", { celebritiesFromDB });
    })
    .catch((err) => next(err));
});

// specific routes are matched first
router.get("/celebrities/new", (req, res, next) => {
  res.render("celebrities/new.hbs");
});

// param route has to come as the last route we are matching, otherwise we might match one of the specific routes
router.get("/celebrities/:celebId", (req, res, next) => {
  // we can always check the params(or anything else on req and res objects)
  console.log(req.params);
  //   findById is prefered when looking for an object based on id
  Celebrity.findById(req.params.celebId)
    //   Celebrity.find({ _id: id }) same as above line
    .then((celebrityFromDB) => {
      // by passing the object not wrapped in another object we can refer to the properties of that object in the hbs
      res.render("celebrities/show.hbs", celebrityFromDB);
    })
    .catch((err) => next(err));
});

// post routes can have the same routes as the get routes
router.post("/celebrities", (req, res, next) => {
  //   const { name, occupation, catchphrase } = req.body;`
  Celebrity.create(req.body)
    // ??
    .then(() => {
      res.redirect("/celebrities");
    })
    .catch((err) => next(err));
});

router.post("/celebrities/:idOfCeleb/delete", (req, res, next) => {
  console.log("req.params", req.params); // obj { idOfCeleb: dsadsadasdas421421 }
  Celebrity.findByIdAndRemove(req.params.idOfCeleb).then((responseFromDB) => {
    // responseFromDB is going to be the object we just deleted
    res.redirect("/celebrities");
  });
});

router.get("/celebrities/:id/edit", (req, res, next) => {
  Celebrity.findById(req.params.id)
    .then((celebrityFromDB) => {
      res.render("celebrities/edit.hbs", celebrityFromDB);
    })
    .catch((err) => next(err));
});

router.post("/celebrities/:id/edit", (req, res, next) => {
  console.log(req.body);
  Celebrity.findByIdAndUpdate(req.params.id, req.body).then((response) => {
    console.log("response", response);
    res.redirect("/celebrities");
  });
});

module.exports = router;
