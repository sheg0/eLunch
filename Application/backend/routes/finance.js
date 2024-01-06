const express = require("express");

const {
  createFinance,
  getAllFinance,
  deleteAllFinances,
} = require("../controllers/financeController");

const router = express.Router();

// POST a new event
router.post("/", createFinance);

router.get("/", getAllFinance);

router.delete("/", deleteAllFinances);
module.exports = router;
