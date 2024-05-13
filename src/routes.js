import FollowedUsersPage from "./components/FollowedUsersPage/FollowedUsersPage";
import UserCreationPage from "./components/UserCreationPage/UserCreationPage";
import UserDetailsPage from "./components/UserDetailsPage/UserDetailsPage";
import UsersPage from "./components/UsersPage/UsersPage";

export const StaticRoutes = {
  home: "/",
  userDetails: "/:userId",
  registration: "/registration",
  follows: "/follows",
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
  {
    path: StaticRoutes.follows,
    Compoment: FollowedUsersPage,
  },
];
