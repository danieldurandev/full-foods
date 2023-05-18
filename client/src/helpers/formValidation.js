export const formValidation = (recipe) => {
  const errors = {
    title: "",
    summary: "",
    step: "",
    image: "",
    diets: "",
    err: false,
  };

  if (!(recipe.title.length > 1)) {
    errors.title = "Type the name of the recipe";
    errors.err = true;
  }
  if (!(recipe.summary.length > 1)) {
    errors.summary = "Write a valid summary";
    errors.err = true;
  }
  if (!(recipe.steps.length > 0)) {
    errors.step = "Add at least one step";
    errors.err = true;
  }
  const url =
    /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/.test(
      recipe.image
    );
  if (!url) {
    errors.image = "Type a valid url";
    errors.err = true;
  }
  if (!(recipe.diets.length >= 1)) {
    errors.diets = "add at least one type of diet";
    errors.err = true;
  }
  return errors;
};
