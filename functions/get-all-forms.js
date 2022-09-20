const mongoose = require("mongoose");
//Form Model
require("../models/Form");
const Form = mongoose.model("Form");

export function getAllForms(req, res) {
  Form.find()
    .sort({ date: -1 })
    .then((forms) => res.json(forms))
    .catch((err) => res.status(404).json({ noformsfound: "No forms found" }));
}
