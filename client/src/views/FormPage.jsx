import { useState } from "react";
import { useForm } from "../hooks/useForm";
import { useDispatch } from "react-redux";
import { stateOfCharge } from "../redux/recipes/recipesSlice";
import axios from "axios";
import { formValidation } from "../helpers/formValidation";
import { Link } from "react-router-dom";

const data = {
  title: "",
  summary: "",
  healthScore: "50",
  step: "",
  image: "",
};

const errors = {
  title: "",
  summary: "",
  step: "",
  image: "",
  diets: "",
  err: false,
};

const dietsArray = [];
const stepsArrya = [];

export const FormPage = () => {
  const dispatch = useDispatch();

  const {
    title,
    summary,
    healthScore,
    image,
    step,
    onInputChange,
    onResetForm,
  } = useForm(data);

  const [diets, setDiets] = useState(dietsArray);
  const [steps, setSteps] = useState(stepsArrya);
  const [error, setError] = useState(errors);

  const handlerCheckbox = (event) => {
    const { name, checked } = event.target;
    let typeDiets = [...diets];
    if (checked) {
      typeDiets.push(name);
    } else {
      typeDiets = typeDiets.filter((diet) => diet !== name);
    }
    setDiets(typeDiets);
  };

  const addStep = (event) => {
    event.preventDefault();
    setSteps([...steps, { step: step, number: steps.length + 1 }]);
    const newEvent = { target: { name: "step", value: "" } };
    onInputChange(newEvent);
  };

  const cleaningSteps = (event) => {
    event.preventDefault();
    setSteps([]);
  };

  const handlerSubmit = async (event) => {
    event.preventDefault();
    const recipe = {
      title,
      image,
      summary,
      healthScore,
      diets,
      steps,
    };

    const isValidated = formValidation(recipe);

    if (isValidated.err) {
      return setError(isValidated);
    }

    try {
      await axios.post("https://food-api-x3n1.onrender.com/recipes", recipe);
      dispatch(stateOfCharge());
      onResetForm();
      setDiets([]);
      setSteps([]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="formdiv">
      <div className="backflex">
        <Link to="/home">
          <button className="back btn btn-clear">Back</button>
        </Link>
      </div>
      <form className="form" onSubmit={handlerSubmit}>
        <div className="divform">
          <label className="labelform">Recipe name</label>
          <input
            className="inputform"
            type="text"
            name="title"
            value={title}
            onChange={(e) => {
              onInputChange(e);

              console.log(e.target.value);

              if (e.target.value < 1) {
                return setError({
                  title: "DEBES INGRESAR UN NOMBRE",
                  summary: "",
                  step: "",
                  image: "",
                  diets: "",
                  err: false,
                });
              } else {
                return setError({
                  title: "",
                  summary: "",
                  step: "",
                  image: "",
                  diets: "",
                  err: false,
                });
              }
            }}
          />
          {error.title && <p className="error">{error.title}</p>}
        </div>

        <div className="divform">
          <label className="labelform">Summary</label>
          <textarea
            className="inputform"
            name="summary"
            value={summary}
            onChange={onInputChange}
          ></textarea>
          {error.summary && <p className="error">{error.summary}</p>}
        </div>

        <div className="divform">
          <label className="labelform center">
            Health Score:{" "}
            <span className={healthScore > 51 ? "green" : "red"}>
              {healthScore}
            </span>
          </label>
          <input
            className="inputform"
            type="range"
            name="healthScore"
            min="0"
            max="100"
            step="1"
            value={healthScore}
            onChange={onInputChange}
          />
        </div>

        <div className="divform">
          <label className="labelform center">Steps</label>
          {steps.map((step) => (
            <p className="labelform">
              {step.number}: {step.step}
            </p>
          ))}

          <label className="labelform">Step {steps.length + 1}</label>

          <input
            className="inputstep"
            type="text"
            name="step"
            value={step}
            onChange={onInputChange}
          />
          <button className="buttonstep btn btn-add" onClick={addStep}>
            +
          </button>
          <button className="buttonstep btn btn-clear" onClick={cleaningSteps}>
            Reset
          </button>
          {error.step && <p className="error">{error.step}</p>}
        </div>

        <div className="divform">
          <label className="labelform">Image url</label>
          <input
            className="inputform"
            type="text"
            name="image"
            value={image}
            onChange={onInputChange}
          />
          {error.image && <p className="error">{error.image}</p>}
        </div>

        <div className="divform">
          <label className="labelform center">Types of diet</label>

          <div className="checkform">
            <label className="labelcheck">
              <input
                type="checkbox"
                name="paleolithic"
                onChange={handlerCheckbox}
              />
              PALEOLITHIC
            </label>

            <label className="labelcheck">
              <input
                type="checkbox"
                name="dairy free"
                onChange={handlerCheckbox}
              />
              dairy free
            </label>
            <label className="labelcheck">
              <input
                type="checkbox"
                name="lacto ovo vegetarian"
                onChange={handlerCheckbox}
              />
              lacto ovo vegetarian
            </label>

            <label className="labelcheck">
              <input
                type="checkbox"
                name="gluten free"
                onChange={handlerCheckbox}
              />
              gluten free
            </label>

            <label className="labelcheck">
              <input
                type="checkbox"
                name="whole 30"
                onChange={handlerCheckbox}
              />
              whole 30
            </label>
            <label className="labelcheck">
              <input type="checkbox" name="primal" onChange={handlerCheckbox} />
              primal
            </label>

            <label className="labelcheck">
              <input
                type="checkbox"
                name="ketogenic"
                onChange={handlerCheckbox}
              />
              ketogenic
            </label>

            <label className="labelcheck">
              <input
                type="checkbox"
                name="fodmap friendly"
                onChange={handlerCheckbox}
              />
              fodmap friendly
            </label>
            <label className="labelcheck">
              <input type="checkbox" name="vegan" onChange={handlerCheckbox} />
              VEGAN
            </label>

            <label className="labelcheck">
              <input
                type="checkbox"
                name="pescatarian"
                onChange={handlerCheckbox}
              />
              pescatarian
            </label>
          </div>
          {error.diets && <p className="error">{error.diets}</p>}
        </div>
        <div className="formdiv">
          <button className="btn btn-sub" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
