const express = require("express");

const {
  createFinance,
  getAllFinance,
} = require("../controllers/financeController");

const router = express.Router();

// POST a new event
router.post("/", createFinance);

router.get("/", getAllFinance);
module.exports = router;
