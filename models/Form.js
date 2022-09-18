//Form Model
const mongoose = require("mongoose");
mongoose.model("Form", {
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  maritalStatus: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
