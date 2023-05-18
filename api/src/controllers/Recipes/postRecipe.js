const { postRecipeDB } = require("../../handlers");

const postRecipe = async (req, res) => {
  let recipe = { ...req.body };
  //Validar datos de entrada
  //Enviar datos a la base de datos
  try {
    recipe = await postRecipeDB(recipe);
    return res.status(201).json(recipe);
  } catch (error) {
    return res.status(400).json({ modulo: "postRecipe", error: error.message });
  }
};

module.exports = postRecipe;
