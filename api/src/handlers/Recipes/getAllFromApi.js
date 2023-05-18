const spoonacular = require("../../api/spoonacularApi");
const recipeMapping = require("../../helpers/recipeMapping");
require("dotenv").config();

const { API_KEY } = process.env;
//Esta funcion obtiene todas las recetas que ofrece la API
const getAllFromApi = async () => {
  try {
    const { data } = await spoonacular.get(
      `/recipes/complexSearch?apiKey=${API_KEY}&number=100&offset=${0}&addRecipeInformation=true`
    );
    const { results, offset, number, totalResults } = data;

    const recipes = recipeMapping(results);

    //Envia un arregllo de recetas
    return recipes;
  } catch (error) {
    throw new Error({ modulo: "getAllFromApi", error: error.message });
  }
};

module.exports = getAllFromApi;
