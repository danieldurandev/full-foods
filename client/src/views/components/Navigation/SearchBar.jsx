import { useForm } from "../../../hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import { getRecipesByName, getAllRecipes } from "../../../redux/recipes/thunks";
import { recipeFilters } from "../../../redux/recipes/recipesSlice";
import { recipeFiltering } from "../../../helpers/recipeFiltering";
import style from "./Navigation.module.css";

const form = { search: "" };

export const SearchBar = () => {
  const { search, onInputChange } = useForm(form);
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipes.recipesAll);

  const handlerSutbmit = (event) => {
    event.preventDefault();
    dispatch(getRecipesByName(search));
  };

  const filterDiets = (event) => {
    const { name, value } = event.target;
    if (value === "all") {
      return dispatch(getAllRecipes());
    }
    const filter = recipeFiltering(name, value, recipes);
    dispatch(recipeFilters(filter));
  };

  return (
    <>
      <form className={style.form} onSubmit={handlerSutbmit}>
        <input
          className={style.input}
          type="text"
          onChange={onInputChange}
          value={search}
          name="search"
          placeholder="Search for your favorite recipes"
        />
        <button className="btn btnav">SEARCH</button>
      </form>
      <select className={style.select} name="diets" onChange={filterDiets}>
        <option disabled>Type of Diets</option>
        <option value="all">All Diets</option>
        <option value="paleolithic">paleolithic</option>
        <option value="dairy free">dairy free</option>
        <option value="lacto ovo vegetarian">lacto ovo vegetarian</option>
        <option value="whole 30">whole 30</option>
        <option value="primal">primal</option>
        <option value="ketogenic">ketogenic</option>
        <option value="fodmap friendly">fodmap friendly</option>
        <option value="vegan">vegan</option>
        <option value="pescatarian">pescatarian</option>
      </select>
      <select className={style.select} name="origin" onChange={filterDiets}>
        <option disabled>Origin</option>
        <option value="all">All Origin</option>
        <option value={false}>Spoonacular</option>
        <option value={true}>Database</option>
      </select>
      <select className={style.select} name="health" onChange={filterDiets}>
        <option disabled>Health Score</option>
        <option value="as">0 to 100</option>
        <option value="de">100 to 0</option>
      </select>
      <select className={style.select} name="alphabetic" onChange={filterDiets}>
        <option disabled>Alphabetic</option>
        <option value="az">A-Z</option>
        <option value="za">Z-A</option>
      </select>
    </>
  );
};
