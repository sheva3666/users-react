import { useNavigate, useParams } from "react-router";
import useFetchSingleUser from "../../hooks/useFetchSingleUser";
import LoadingSpinner from "../common/Loading/LoadingSpinner";
import useFollowedUsers from "../../hooks/useFollowedUsers";
import { StaticRoutes } from "../../routes";
import "./UserDetailsPage.css";

const UserDetailsPage = () => {
  const { userId } = useParams();
  const { user = {}, loading } = useFetchSingleUser(userId);
  const navigate = useNavigate();

  const { users, setUserToFollow, removeUserFromFollowed } = useFollowedUsers();

  const isFollowed = users.find((u) => u.id === user.id);

  console.log(isFollowed);

  if (loading) {
    return <LoadingSpinner />;
  }

  const handleClick = (e) => {
    e.preventDefault();
    if (isFollowed) {
      removeUserFromFollowed(user.id);
    } else {
      setUserToFollow(user);
      navigate(StaticRoutes.follows);
    }
  };

  return (
    <div className="container">
      <h4 className="name">First name: {user.first_name}</h4>
      <h4 className="name">Last name: {user.last_name}</h4>
      <img src={user.avatar} alt={user.last_name} />
      <p>Email: {user.email}</p>
      <button onClick={(e) => handleClick(e)}>
        {isFollowed ? "Unfollow" : "Follow"}
      </button>
    </div>
  );
};

export default UserDetailsPage;
