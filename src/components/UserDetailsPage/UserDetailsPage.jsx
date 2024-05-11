import { useParams } from "react-router";
import useFetchSingleUser from "../../hooks/useFetchSingleUser";
import "./UserDetailsPage.css";
import LoadingSpinner from "../common/Loading/LoadingSpinner";

const UserDetailsPage = () => {
  const { userId } = useParams();
  const { user = {}, loading } = useFetchSingleUser(userId);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="container">
      <h4 className="name">First name: {user.first_name}</h4>
      <h4 className="name">Last name: {user.last_name}</h4>
      <img src={user.avatar} alt={user.last_name} />
      <p>Email: {user.email}</p>
    </div>
  );
};

export default UserDetailsPage;
