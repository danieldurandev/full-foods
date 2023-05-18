import { Routes, Route } from "react-router-dom";
import { DetailPage, FormPage, HomePage, LandingPage } from "../views";

export const AppRouter = () => {
  return (
    <Routes>
      <Route exact path="/" element={<LandingPage />} />
      <Route exact path="/home" element={<HomePage />} />
      <Route exact path="/form" element={<FormPage />} />
      <Route exact path="/detail/*" element={<DetailPage />} />
    </Routes>
  );
};
