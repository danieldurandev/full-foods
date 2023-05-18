import { Card } from "./Card";
import style from "./CardContainer.module.css";
import { useSelector } from "react-redux";
export const CardContainer = () => {
  const { recipePage } = useSelector((state) => state.recipes);
  return (
    <div className={style.container}>
      {recipePage.map((recipe) => (
        <Card key={recipe.id} {...recipe} />
      ))}
    </div>
  );
};
