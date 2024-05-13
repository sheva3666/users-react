import UserCreationPage from "./components/UserCreationPage/UserCreationPage";
import UserDetailsPage from "./components/UserDetailsPage/UserDetailsPage";
import UsersPage from "./components/UsersPage/UsersPage";

export const StaticRoutes = {
  home: "/",
  userDetails: "/:userId",
  registration: "/registration",
};

export const routes = [
  {
    path: StaticRoutes.home,
    Compoment: UsersPage,
  },
  {
    path: StaticRoutes.userDetails,
    Compoment: UserDetailsPage,
  },
  {
    path: StaticRoutes.registration,
    Compoment: UserCreationPage,
  },
];
