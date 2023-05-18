import { Link } from "react-router-dom";
import { SearchBar } from "./SearchBar";
import style from "./Navigation.module.css";

export const NavBar = () => {
  return (
    <nav className={style.navbar}>
      <SearchBar />
      <Link to="/form">
        <button className="btn btnav">CREATE</button>
      </Link>
      <Link to="/">
        <button className="btn btnav-exit">EXIT</button>
      </Link>
    </nav>
  );
};
