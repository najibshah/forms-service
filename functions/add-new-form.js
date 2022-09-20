const axios = require("axios");
const { default: accessEnv } = require("../src/helpers/accessEnv");
const notificationURI = accessEnv("NOTIFICATION_SERVICE_URI");
//Form Model
const mongoose = require("mongoose");
require("../models/Form");
const Form = mongoose.model("Form");
//Form Validation
const validateFormInput = require("../validation/form");

export function addForm(req, res) {
  const { errors, isValid } = validateFormInput(req.body.data);
  // Check Validation
  if (!isValid) {
    // If any errors, send 400 with errors object
    return res.status(400).json(errors);
  }

  const newForm = {
    firstName: req.body.data.firstName,
    lastName: req.body.data.lastName,
    gender: req.body.data.gender,
    maritalStatus: req.body.data.maritalStatus,
    description: req.body.data.description,
    email: "najeebworkmail@gmail.com",
  };
  //create and save new form
  const form = new Form(newForm);
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
}
