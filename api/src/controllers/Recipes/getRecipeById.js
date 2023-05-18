const { getByIdFromDB, getByIdFromApi } = require("../../handlers");

// Esta controllador llama a getByIdFromApi con un id
const getRecipeById = async (req, res) => {
  const { idRecipe } = req.params;
  try {
    if (isNaN(idRecipe)) {
      const recipe = await getByIdFromDB(idRecipe);
      return res.status(200).json({ recipe });
    }
    const recipe = await getByIdFromApi(idRecipe);
    return res.status(200).json({
      recipe,
    });
  } catch (error) {
    console.log(error.message);
    return res.status(400).json({ modulo: "getRecipeById" });
  }
};

module.exports = getRecipeById;
