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
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "No Such Article" });
    }

    const list = await List.findOneAndDelete({ _id: id }); // the id proptery in mongo is _id
    if (!list) {
      return res.status(404).json({ error: "No Such Article" });
    }

    res.status(200).json(list);
};

// create new article
const createArticle = async (req, res) => {
    const {
      article,
      quantity
    } = req.body;
  
    if (!article || !quantity) {
      return res.status(400).json({
        error:
          "Article: Article or Quantity is missing inside Request-body.",
      });
    }
  
    try {
      const list = await List.create({
        _id: new mongoose.Types.ObjectId(),
        article,
        quantity
      });

      res.status(200).json(list);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
};


module.exports = {
    getAllArticles,
    createArticle,
    deleteArticle,
};