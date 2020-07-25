const router = require("express").Router();
let User = require("../models/user.model");

router.route("/").get((req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const name = req.body.name;
  const bio = req.body.bio;
  const occupation = req.body.occupation;
  const school = req.body.school;
  const city = req.body.city;
  const gender = req.body.gender;
  const sexual_orientation = req.body.sexual_orientation;
  const dob = req.body.dob;

  const newUser = new User({
    name,
    bio,
    occupation,
    school,
    city,
    gender,
    sexual_orientation,
    dob,
  });

  newUser
    .save()
    .then(() => res.json("User added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/update/:id").post((req, res) => {
  User.findById(req.params.id)
    .then((user) => {
      user.name = req.body.name;
      user.bio = req.body.bio;
      user.occupation = req.body.occupation;
      user.school = req.body.school;
      user.city = req.body.city;
      user.gender = req.body.gender;
      user.sexual_orientation = req.body.sexual_orientation;
      user.dob = req.body.dob;

      user
        .save()
        .then(() => res.json("User updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(() => res.json("User deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  User.findById(req.params.id)
    .then((user) => res.json(user))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
