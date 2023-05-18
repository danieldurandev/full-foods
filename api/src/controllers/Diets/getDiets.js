const { getDietsFromDB } = require("../../handlers");

const getDiets = async (req, res) => {
  const diets = await getDietsFromDB();
  res.status(200).json(diets);
};

module.exports = getDiets;
