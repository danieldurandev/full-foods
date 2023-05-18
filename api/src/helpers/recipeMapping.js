const recipeMapping = (recipes = []) => {
  return recipes.map((recipe) => {
    const {
      id,
      title,
      summary,
      healthScore,
      image,
      diets,
      analyzedInstructions,
    } = recipe;
    const steps =
      analyzedInstructions.length === 0
        ? []
        : analyzedInstructions[0].steps.map((elem) => {
            return { step: elem.step, number: elem.number };
          });

    return {
      id,
      title,
      summary: summary.replace(/<[^>]*>/g, ""),
      healthScore,
      image,
      diets,
      steps,
      created: false,
    };
  });
};

module.exports = recipeMapping;
