const express = require("express");

const {
  createFinance,
  getAllFinance,
  deleteAllFinances,
  updateBalance,
  addActivities,
  deleteActivities,
} = require("../controllers/financeController");

const router = express.Router();

// POST a new event
router.post("/", createFinance);

router.get("/", getAllFinance);

router.delete("/", deleteAllFinances);

router.patch("/:userName", updateBalance);

router.patch("/activities/:userName", addActivities);
router.delete("/activities/:userName", deleteActivities);
module.exports = router;


