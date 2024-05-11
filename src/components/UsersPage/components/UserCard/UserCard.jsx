/* eslint-disable react/prop-types */
import { useNavigate } from "react-router";
import "./UserCard.css";

const UserCard = ({ user }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/${user.id}`);
  };
  return (
    <div onClick={handleClick} className="user-card">
      <h2>
        Name: {user.first_name} {user.last_name}
      </h2>
      <img src={user.avatar} alt={user.first_name} />
      <p>Email: {user.email}</p>
    </div>
  );
};

export default UserCard;
