const express = require("express");

const {
  getAllArticles,
  createArticle,
  deleteArticle,
  updateArticle,
} = require("../controllers/shoppinglistController");

const router = express.Router();

// POST a new event
router.post("/", createArticle);

router.get("/", getAllArticles);

router.delete("/:id", deleteArticle);

router.patch("/:id", updateArticle);

module.exports = router;
