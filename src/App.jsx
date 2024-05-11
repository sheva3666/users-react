import { Route, Routes } from "react-router";
import UsersPage from "./components/UsersPage/UsersPage";
import UserDetailsPage from "./components/UserDetailsPage/UserDetailsPage";
import "./App.css";

const App = () => {
  return (
    <Routes>
      <Route path={"/"} element={<UsersPage />} />
      <Route path={"/:userId"} element={<UserDetailsPage />} />
    </Routes>
  );
};

export default App;
