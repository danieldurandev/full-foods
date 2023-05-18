const { getByNameFromApi, getByNameFromDB } = require("../../handlers");

// Esta controllador llama a getByNameFromApi con argumentos
const getRecipesByName = async (req, res) => {
  const { query } = req.query;
  try {
    const recipesApi = await getByNameFromApi(query);
    const recipesDB = await getByNameFromDB(query);
    // return res.status(200).json({ recipes: [...recipesDB] });
    return res.status(200).json({ recipes: [...recipesDB, ...recipesApi] });
  } catch (error) {
    return res
      .status(400)
      .json({ modulo: "getRecipesByName", error: error.message });
  }
};

module.exports = getRecipesByName;
