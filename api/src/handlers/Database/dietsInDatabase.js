const { Diet } = require("../../db");
const getAllFromApi = require("../Recipes/getAllFromApi");

const dietsInDatabase = async () => {
  const recipes = await getAllFromApi();

  const diets = new Set();

  recipes.forEach((recipe) => {
    recipe.diets?.forEach((diet) => {
      diets.add(diet);
    });
  });

  const dietPromises = [];
  for (diet of diets) {
    dietPromises.push(Diet.findOrCreate({ where: { name: diet } }));
  }

  try {
    await Promise.all(dietPromises);
    console.log("Dietas cargadas correctamente en la base de datos");
  } catch (error) {
    console.log({ modulo: "dietsInDatabase", error: error.message });
  }
};

module.exports = dietsInDatabase;
