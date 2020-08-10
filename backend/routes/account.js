const router = require("express").Router();
let Account = require("../models/account.model");
const express = require("express");

const bcrypt = require("bcrypt");
const saltRounds = 10;

router.route("/login").post((req, res) => {
  const { email, password } = req.body;
  Account.find().then((account) => {
    let acc = account.find(
      (eachAcc) => eachAcc.email.toUpperCase() === email.toUpperCase()
    );
    if (acc) {
      bcrypt.compare(password, acc.password, function (err, result) {
        if (err) res.status(400).json("Error: " + err);
        else if (result) res.status(200).json("Login Successful");
        else res.status(400).json("Invalid password");
      });
    } else res.status(400).json("Invalid email");
  });
});

router.route("/register").post((req, res) => {
  bcrypt.genSalt(saltRounds, function (err, salt) {
    bcrypt.hash(req.body.password, salt, function (err, hash) {
      const name = req.body.name;
      const email = req.body.email;
      const password = hash;

      const newAccount = new Account({
        name,
        email,
        password,
      });

      newAccount
        .save()
        .then(() => res.json("Account added!"))
        .catch((err) => res.status(400).json("Error: " + err));
    });
  });
});

router.route("/").get((req, res) => {
  Account.find()
    .then((account) => res.json(account))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/update/:id").post((req, res) => {
  Account.findById(req.params.id)
    .then((account) => {
      account.name = req.body.name;
      account.email = req.body.email;
      bcrypt.genSalt(saltRounds, function (err, salt) {
        bcrypt.hash(req.body.password, salt, function (err, hash) {
          account.password = hash;

          account
            .save()
            .then(() => res.json("Account updated!"))
            .catch((err) => res.status(400).json("Error: " + err));
        });
      });
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
