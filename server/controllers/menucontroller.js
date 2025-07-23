const MenuItem = require("../schema/menuSchema");

const getMenu = async (req, res) => {
  try {
    const items = await MenuItem.find({ category: "drinks" });

    res.status(200).json({
      data: items,
    });
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch menu" });
  }
};
const getBrunch = async (req, res) => {
  try {
    const items = await MenuItem.find({category:'brunch'});

    res.status(200).json({
      data: items,
    });
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch menu" });
  }
};
const getFood = async (req, res) => {
  try {
    const items = await MenuItem.find({ category: 'food' });

    res.status(200).json({
      data: items,
    });
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch menu" });
  }
};


module.exports = { getMenu,getBrunch,getFood };
