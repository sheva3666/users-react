import useFetchUsers from "../../hooks/useFetchUsers";
import LoadingSpinner from "../common/Loading/LoadingSpinner";
import PagePagination from "./components/PagePagination/PagePagination";
import UserCard from "./components/UserCard/UserCard";
import "./UsersPage.css";

const UsersPage = () => {
  const {
    currentPage,
    allPages,
    users = [],
    loading,
    setCurrentPage,
  } = useFetchUsers();

  return (
    <>
      {loading ? (
        <div className="loading-container">
          <LoadingSpinner />
        </div>
      ) : (
        <div className="page-container">
          {users.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      )}
      <PagePagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        allPages={allPages}
      />
    </>
  );
};

export default UsersPage;
