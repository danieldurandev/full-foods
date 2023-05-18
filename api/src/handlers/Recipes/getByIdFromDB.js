const { Recipe, Diet } = require("../../db");

//Esta funcion obtiene todas las recetas que ofrece la API
const getByIdFromDB = async (id) => {
  try {
    const recipe = await Recipe.findByPk(id, { include: { model: Diet } });

    const diets = recipe.dataValues.diets.map((diet) => diet.name);

    return { ...recipe.dataValues, diets };
  } catch (error) {
    console.log(error.message);
    throw new Error({ modulo: "getByIdFromDB", error: error.message });
  }
};

module.exports = getByIdFromDB;
