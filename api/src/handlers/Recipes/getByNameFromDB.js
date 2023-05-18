const { Recipe, Diet } = require("../../db");

//Esta funcion obtiene todas las recetas que ofrece la API
const getByNameFromDB = async (query) => {
  try {
    let recipes = await Recipe.findAll({
      attributes: [
        "id",
        "title",
        "summary",
        "healthScore",
        "steps",
        "image",
        "created",
      ],
      include: { model: Diet },
    });
    return recipes
      .filter((recipe) =>
        recipe.dataValues.title.toLowerCase().includes(query.toLowerCase())
      )
      .map((recipe) => recipe.dataValues);
  } catch (error) {
    throw new Error({ modulo: "getByNameFromDB", error: error.message });
  }
};

module.exports = getByNameFromDB;
