const List = require("../models/shoppinglistModel");
const mongoose = require("mongoose");

// get all articles
const getAllArticles = async (req, res) => {
  const list = await List.find({}).sort({ createdAt: -1 });
  res.status(200).json(list);
};

// delete a article
const deleteArticle = async (req, res) => {
  const { id } = req.params;

  const list = await List.findOneAndDelete({ id }); // the id proptery in mongo is _id
  if (!list) {
    return res.status(404).json({ error: "No Such Article" });
  }

  res.status(200).json(list);
};

// create new article
const createArticle = async (req, res) => {
  const { id, article, quantity, status } = req.body;

  if (!article || !quantity || !status) {
    return res.status(400).json({
      error: "Article: Article or Quantity is missing inside Request-body.",
    });
  }

  try {
    const list = await List.create({
      _id: new mongoose.Types.ObjectId(),
      id,
      article,
      quantity,
      status,
    });

    res.status(200).json(list);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const updateArticle = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body; // Get the status from the request body

  try {
    const list = await List.findOne({ id });

    if (!list) {
      return res.status(404).json({ error: "No Such List" });
    }

    // Update the status directly
    list.status = status;

    const updatedList = await list.save();

    res.status(200).json(updatedList);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  getAllArticles,
  createArticle,
  deleteArticle,
  updateArticle,
};
