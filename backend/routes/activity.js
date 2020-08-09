const router = require("express").Router();
let Activity = require("../models/activity.model");
const isAMatch = require("./../helperFunctions");

router.route("/:id/swipe").post((req, res) => {
  /**
   * Need to get Id of user who is left swiped - callee.user_id
   * Need to get Id of user who has left swiped - caller.user_id
   * Need to get swipe type - left or right
   * let caller = GET ("/activity/req.header.user_id")
   * let callee = GET ("/activity/req.body.user_id")
   * if req.body.swipe_type === LEFT
   *  caller.left_swiped.push(callee.user_id)
   * else if(isAMatch(caller,callee))
   *        req.json(callee.user_id)
   *      else
   *        caller.right_swiped.push(callee.user_id)
   */

  let caller,
    callee = {};
  const swipe_type = req.body.swipe_type;
  Activity.findById(req.params.id)
    .then((activity1) => {
      caller = activity1;
      Activity.findById(req.body.user_id)
        .then((activity2) => {
          callee = activity2;
          if (swipe_type === "left") caller.left_swiped.push(callee.user_id);
          else if (isAMatch(caller, callee)) {
            caller.matches.push(callee.user_id);
            caller
              .save()
              .then(() => req.json(callee.user_id))
              .catch((err) => res.status(400).json("Error: " + err));
          } else caller.right_swiped.push(callee.user_id);
        })
        .catch((err) => res.status(400).json("Error: " + err));
      caller
        .save()
        .then(() => res.json("Activity updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/").get((req, res) => {
  Activity.find()
    .then((activity) => res.json(activity))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  Activity.findById(req.params.id)
    .then((activity) => res.json(activity))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
