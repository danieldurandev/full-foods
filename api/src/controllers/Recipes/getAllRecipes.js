const { getAllFromApi, getAllFromDB } = require("../../handlers");

const getAllRecipes = async (req, res) => {
  try {
    const recipesApi = await getAllFromApi();
    const recipesDb = await getAllFromDB();
    //return res.status(200).json({ recipes: [...recipesDb] });
    return res.status(200).json({ recipes: [...recipesDb, ...recipesApi] });
  } catch (error) {
    console.log(error.message);
    return res
      .status(400)
      .json({ modulo: "getAllRecipe", error: error.message });
  }
};

module.exports = getAllRecipes;
