import useFetchUsers from "../../hooks/useFetchUsers";
import LoadingSpinner from "../common/Loading/LoadingSpinner";
import UserCard from "./components/UserCard/UserCard";
import "./UsersPage.css";

const UsersPage = () => {
  const { users = [], loading } = useFetchUsers();

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="container">
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UsersPage;
