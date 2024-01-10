const express = require("express");

const {
    getAllArticles,
    createArticle,
    deleteArticle,
} = require("../controllers/shoppinglistController");

const router = express.Router();

// POST a new event
router.post("/", createArticle);

router.get("/", getAllArticles);

router.delete("/:id", deleteArticle);

module.exports = router;
