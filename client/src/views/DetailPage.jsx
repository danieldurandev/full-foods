import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export const DetailPage = () => {
  const [recipe, setRecipe] = useState({});

  const location = useLocation();

  const getRecipe = async () => {
    let { data } = await axios.get(
      `http://localhost:3001/recipes/${location.pathname.substring(8)}`
    );
    setRecipe({ ...data.recipe });
  };

  useEffect(() => {
    getRecipe();
  }, []);

  if (!recipe?.id) {
    return <div class="custom-loader"></div>;
  }

  return (
    <>
      <div className="formdiv">
        <div className="backflex">
          <Link to="/home">
            <button className="back btn btn-clear">Back</button>
          </Link>
        </div>
        <div className="detail">
          <img className="imagedetail" src={recipe?.image} />
          <h3 className="textdetail">ID: {recipe?.id}</h3>
          <h3 className="textdetail">{recipe?.title}</h3>
          <div className="boxdetail">
            <h3>Summary:</h3>
            <p>{recipe?.summary}</p>
          </div>
          <h3 className="textdetail">Healt Score: {recipe?.healthScore}</h3>
          <div className="boxdetail">
            <h3>Steps:</h3>
            {recipe?.steps?.map((step) => (
              <p key={step.number}>
                {step.number}: {step.step}
              </p>
            ))}
          </div>

          <div className="boxdetail">
            <h3 className="boxtextdetail">Type of diets</h3>
            <li className="listdetail">
              {recipe?.diets?.map((diet, i) => (
                <ul className="itemdetail" key={i}>
                  {diet}
                </ul>
              ))}
            </li>
          </div>
        </div>
      </div>
    </>
  );
};
