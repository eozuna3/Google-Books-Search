const router = require("express").Router();
const axios = require("axios");
const db = require("../../models");

router.route("/")
     .post(function (req, res) {
          db.Book
               .create(req.body)
               .then(dbBook => res.json(dbBook))
               .catch(err => res.status(422).json(err));
     });

router.route("/")
     .get(function (req, res) {
          db.Book
               .find()
               .then(dbModel => res.json(dbModel))
               .catch(err => res.status(422).json(err));
     })

router.route("/:id")
     .delete(function (req, res) {
          console.log(req.params.id)
          db.Book.findById({ _id: req.params.id })
               .then(dbModel => dbModel.remove())
               .then(dbModel => res.json(dbModel))
               .catch(err => res.status(422).json(err));
     })
     

module.exports = router;
