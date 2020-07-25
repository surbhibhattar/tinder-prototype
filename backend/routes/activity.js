const router = require("express").Router();
let Activity = require("../models/activity.model");

router.route("/").get((req, res) => {
  Activity.find()
    .then((activity) => res.json(activity))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const user_id = req.body.user_id;
  const left_swiped = req.body.left_swiped;
  const right_swiped = req.body.right_swiped;
  const matches = req.body.matches;

  const newActivity = new Activity({
    user_id,
    left_swiped,
    right_swiped,
    matches,
  });

  newActivity
    .save()
    .then(() => res.json("Activity added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/update/:id").post((req, res) => {
  Activity.findById(req.params.id)
    .then((activity) => {
      activity.user_id = req.body.user_id;
      activity.left_swiped = req.body.left_swiped;
      activity.right_swiped = req.body.right_swiped;
      activity.matches = req.body.matches;

      activity
        .save()
        .then(() => res.json("Activity updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  Activity.findByIdAndDelete(req.params.id)
    .then(() => res.json("Activity deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  Activity.findById(req.params.id)
    .then((activity) => res.json(activity))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
