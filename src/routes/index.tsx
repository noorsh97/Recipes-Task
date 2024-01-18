import { Route, Routes } from "react-router-dom";
import { Layout } from "src/layouts";
import { Home, RecipePage } from "src/pages";

const Component = () => {

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path={"/"} element={<Home />} />
        <Route path={"/recipe/:id"} element={<RecipePage />} />
      </Route>
    </Routes>
  );
};

export default Component;
