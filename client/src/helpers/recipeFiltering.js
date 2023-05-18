export const recipeFiltering = (filter, value, recipes = []) => {
  if (filter === "diets") {
    return recipes.filter((recipe) => recipe.diets.includes(value));
  }
  if (filter === "origin") {
    if (value === "true") {
      return recipes.filter((recipe) => recipe.created === true);
    } else {
      return recipes.filter((recipe) => recipe.created === false);
    }
  }
  if (filter === "health") {
    let order = [...recipes];
    if (value === "as") {
      return order.sort((a, b) => a.healthScore - b.healthScore);
    } else {
      return order.sort((a, b) => b.healthScore - a.healthScore);
    }
  }
  if (filter === "alphabetic") {
    let order = [...recipes];
    if (value === "az") {
      return order.sort((a, b) => {
        if (a.title < b.title) {
          return -1;
        }
        if (a.title > b.title) {
          return 1;
        }
      });
    } else {
      return order.reverse((a, b) => {
        if (a.title < b.title) {
          return -1;
        }
        if (a.title > b.title) {
          return 1;
        }
      });
    }
  }
};
