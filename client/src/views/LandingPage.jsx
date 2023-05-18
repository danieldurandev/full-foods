import { Link } from "react-router-dom";
import style from "./LandingPage.module.css";
export const LandingPage = () => {
  return (
    <>
      <div className={style.container}>
        <div className={style.box}>
          <h1 className={style.title}>
            Discover all kinds of delicious recipes
          </h1>
          <Link to="/home">
            <button className="btn btnlp">HOME</button>
          </Link>
        </div>
      </div>
    </>
  );
};
