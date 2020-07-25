const router = require("express").Router();
let Account = require("../models/account.model");

router.route("/").get((req, res) => {
  Account.find()
    .then((account) => res.json(account))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const newAccount = new Account({
    email,
    password,
  });

  newAccount
    .save()
    .then(() => res.json("Account added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/update/:id").post((req, res) => {
  Account.findById(req.params.id)
    .then((account) => {
      account.email = req.body.email;
      account.password = req.body.password;

      account
        .save()
        .then(() => res.json("Account updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  Account.findByIdAndDelete(req.params.id)
    .then(() => res.json("Account deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  Account.findById(req.params.id)
    .then((user) => res.json(user))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
