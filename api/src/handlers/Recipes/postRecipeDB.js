const { Recipe, Diet } = require("../../db");

const postRecipeDB = async (recipe) => {
  const { title, summary, healthScore, steps, image, diets } = recipe;

  let savedRecipe = await Recipe.create({
    title,
    image,
    summary,
    healthScore,
    steps,
  });

  const databaseDiet = await Diet.findAll({ where: { name: diets } });

  await savedRecipe.addDiet(databaseDiet);

  return savedRecipe;
};

module.exports = postRecipeDB;
