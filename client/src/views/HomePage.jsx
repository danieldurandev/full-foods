import { useEffect } from "react";
import { CardContainer } from "./components/Cards/CardContainer";
import { NavBar } from "./components/Navigation/NavBar";
import { useDispatch, useSelector } from "react-redux";
import { getAllRecipes } from "../redux/recipes/thunks";
import {
  nextPage,
  previousPage,
  selectePage,
} from "../redux/recipes/recipesSlice";

export const HomePage = () => {
  const { isLoading, totalPages } = useSelector((state) => state.recipes);
  const dispatch = useDispatch();
  useEffect(() => {
    if (isLoading) dispatch(getAllRecipes());
  }, []);

  const handlerNextPage = () => {
    dispatch(nextPage());
  };

  const handlerPreviousPage = () => {
    dispatch(previousPage());
  };

  const buttons = [];
  for (let i = 1; i <= totalPages; i++) {
    buttons.push(
      <button
        className="btn btnpage"
        key={i}
        onClick={() => {
          dispatch(selectePage(i));
        }}
      >
        {i}
      </button>
    );
  }

  if (isLoading) {
    return <div class="custom-loader"></div>;
  }

  return (
    <div className="homepage">
      <NavBar />
      <div className="navigation">
        <button className="btn btnpage" onClick={handlerPreviousPage}>
          previous
        </button>
        {buttons}
        <button className="btn btnpage" onClick={handlerNextPage}>
          next
        </button>
      </div>
      <CardContainer />
    </div>
  );
};
