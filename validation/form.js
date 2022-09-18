//Form Validation for submission
const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateFormInput(data) {
  let errors = {};

  data.userID = !isEmpty(data.userID) ? data.userID : "";
  data.firstName = !isEmpty(data.firstName) ? data.firstName : "";
  data.lastName = !isEmpty(data.lastName) ? data.lastName : "";
  data.phone = !isEmpty(data.phone) ? data.phone : "";
  data.text = !isEmpty(data.text) ? data.text : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  // // checks if email is email
  // if (!Validator.isEmail(data.email)) {
  //   errors.email = "Email is invalid";
  // }
  //checks if text field fulfills minimum length required
  if (!Validator.isLength(data.text, { min: 10, max: 10000 })) {
    errors.text = "Text must be between 10 and 10000 characters";
  }
  //checks if a field is empty
  // if (Validator.isEmpty(data.email)) {
  //   errors.email = "Email field is required";
  // }
  if (Validator.isEmpty(data.userID)) {
    errors.userID = "Please login/re-login to the application";
  }
  if (Validator.isEmpty(data.firstName)) {
    errors.firstName = "First Name is required";
  }
  if (Validator.isEmpty(data.lastName)) {
    errors.lastName = "Last Name  is required";
  }
  if (Validator.isEmpty(data.phone)) {
    errors.phone = "Phone is required";
  }

  if (Validator.isEmpty(data.text)) {
    errors.text = "Text field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
