//Form Validation for submission
const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateFormInput(data) {
  let errors = {};

  data.firstName = !isEmpty(data.firstName) ? data.firstName : "";
  data.lastName = !isEmpty(data.lastName) ? data.lastName : "";
  data.gender = !isEmpty(data.gender) ? data.gender : "";
  data.maritalStatus = !isEmpty(data.maritalStatus) ? data.maritalStatus : "";
  data.description = !isEmpty(data.description) ? data.description : "";
  // data.email = !isEmpty(data.email) ? data.email : "";
  // // checks if email is email
  // if (!Validator.isEmail(data.email)) {
  //   errors.email = "Email is invalid";
  // }
  //checks if description field fulfills minimum length required
  if (!Validator.isLength(data.description, { min: 10, max: 10000 })) {
    errors.description = "description must be between 10 and 10000 characters";
  }
  // // checks if a field is empty
  // if (Validator.isEmpty(data.email)) {
  //   errors.email = "Email field is required";
  // }

  if (Validator.isEmpty(data.firstName)) {
    errors.firstName = "First Name is required";
  }
  if (Validator.isEmpty(data.lastName)) {
    errors.lastName = "Last Name  is required";
  }
  if (Validator.isEmpty(data.gender)) {
    errors.gender = "gender is required";
  }
  if (Validator.isEmpty(data.maritalStatus)) {
    errors.maritalStatus = "marital status is required";
  }

  if (Validator.isEmpty(data.description)) {
    errors.description = "description field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
