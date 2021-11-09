const Category = require("../Models/Category");

module.exports.addCat_post = async (req, res) => {
  const newCat = new Category(req.body);
  try {
    const savedCat = await newCat.save();
    res.status(200).json(savedCat);
  } catch (error) {
    res.status(500).json(error);
  }
};

// module.exports.removeCat_delete = (req, res) => {};

// module.exports.editCat_put = (req, res) => {};

module.exports.getAllCats_get = async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports.getCatById_get = () => {};
