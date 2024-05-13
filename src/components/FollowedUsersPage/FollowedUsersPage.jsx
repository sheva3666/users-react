import useFollowedUsers from "../../hooks/useFollowedUsers";
import UserCard from "../UsersPage/components/UserCard/UserCard";
import "./FollowedUsersPage.css";

const FollowedUsersPage = () => {
  const { users } = useFollowedUsers();

  return (
    <div className="page-container">
      {!users.length ? (
        <h2>No users followed yet.</h2>
      ) : (
        users.map((user) => <UserCard key={user.id} user={user} />)
      )}
    </div>
  );
};

export default FollowedUsersPage;
