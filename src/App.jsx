import { Route, Routes } from "react-router";
import Header from "./components/Header/Header";
import { routes } from "./routes";
import "./App.css";

const App = () => (
  <>
    <Header />
    <Routes>
      {routes.map(({ path, Compoment }) => (
        <Route key={path} path={path} element={<Compoment />} />
      ))}
    </Routes>
  </>
);

export default App;
