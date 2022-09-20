const express = require("express");
const router = express.Router();
const { addForm, getAllForms } = require("../functions");

// @route   GET /test
// @desc    Tests forms get route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "Form get works" }));

// @route   POST /test
// @desc    Tests forms post route
// @access  Public
router.post("/test", (req, res) => res.json({ msg: "Form post works" }));

// @route   GET /forms
// @desc    Get forms
// @access  Public
router.get("/forms", (req, res) => getAllForms(req, res));

// @route   POST /new-form
// @desc    Adds new form to database
// @access  Public
router.post("/new-form", (req, res) => addForm(req, res));

module.exports = router;
