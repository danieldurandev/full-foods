const spoonacular = require("../../api/spoonacularApi");
const recipeMapping = require("../../helpers/recipeMapping");
require("dotenv").config();

const { API_KEY } = process.env;
const getByIdFromApi = async (id) => {
  try {
    const { data } = await spoonacular.get(
      `/recipes/${id}/information?apiKey=${API_KEY}`
    );
    let recipe = recipeMapping([data]);
    return recipe[0];
  } catch (error) {
    throw new Error({ modulo: "getByIdFromApi", error: error.message });
  }
};

module.exports = getByIdFromApi;
