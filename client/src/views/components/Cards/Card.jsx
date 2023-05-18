import React from "react";
import style from "./CardContainer.module.css";
import { Link } from "react-router-dom";

export const Card = ({ id, title, image, diets, healthScore }) => {
  return (
    <Link className="link" to={`/detail/${id}`}>
      <div className={style.card}>
        <img className={style.imagecard} src={image} alt="image" />
        <h3 className={style.titlecard}>{title}</h3>
        <h3 className={style.titlecard}>HEALTH SCORE {healthScore}</h3>
        <div className={style.dietscard}>
          <h3 className={style.dietstitle}>types of diet</h3>
          <div className={style.listcard}>
            {diets?.map((diet, index) => (
              <span className={style.itemcard} key={index}>
                {diet}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};
