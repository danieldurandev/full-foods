const { Recipe, Diet } = require("../../db");

//Esta funcion obtiene todas las recetas que ofrece la API
const getAllFromDB = async () => {
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
    return recipes.map((recipe) => {
      const diets = recipe.diets.map((diet) => diet.name);
      return { ...recipe.dataValues, diets };
    });
  } catch (error) {
    throw new Error({ error, modulo: "getAllFromDB" });
  }
};

module.exports = getAllFromDB;
