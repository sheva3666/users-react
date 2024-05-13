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
    element: <UsersPage />,
  },
  {
    path: StaticRoutes.userDetails,
    element: <UserDetailsPage />,
  },
  {
    path: StaticRoutes.registration,
    element: <UserCreationPage />,
  },
];
