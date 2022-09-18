const axios = require("axios");
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const notificationURI = process.env.NOTIFICATION_SERVICE_URI;

//Form Model
require("../models/Form");
const Form = mongoose.model("Form");
//Form Validation
const validateFormInput = require("../validation/form");

// @route   GET /test
// @desc    Tests forms get route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "Form get works" }));

// @route   POST /test
// @desc    Tests forms post route
// @access  Public
router.post("/test", (req, res) => {
  console.log(req.body);
  res.json({ msg: "Form post works" });
});

// @route   GET /forms
// @desc    Get forms
// @access  Public
router.get("/forms", (req, res) => {
  Form.find()
    .sort({ date: -1 })
    .then((forms) => res.json(forms))
    .catch((err) => res.status(404).json({ noformsfound: "No forms found" }));
});

// @route   POST /new-form
// @desc    Adds new form to database
// @access  Public
router.post("/new-form", (req, res) => {
  const { errors, isValid } = validateFormInput(req.body.data);
  // Check Validation
  if (!isValid) {
    // If any errors, send 400 with errors object
    return res.status(400).json(errors);
  }
  var newForm = {
    firstName: req.body.data.firstName,
    lastName: req.body.data.lastName,
    phone: req.body.data.phone,
    text: req.body.data.text,
    userID: req.body.data.userID,
    email: "najeebworkmail@gmail.com",
  };
  //create and save new form
  var form = new Form(newForm);
  form.save().then((newForm) => {
    axios
      .post(`${notificationURI}/submit`, {
        mail: newForm.email,
      })
      .then((response) => {
        console.log("email successfully sent");
      })
      .catch((error) => {
        console.log("forms-service notification api call " + error);
      });
    res.json(newForm);
  });
});

module.exports = router;
