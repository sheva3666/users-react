import { useEffect, useState } from "react";
import { fetchUsers } from "../api/api";

const useFetchUsers = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState();
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setLoading(true);
    fetchUsers(currentPage)
      .then((data) => {
        setData(data);
        setCurrentPage(data?.page);
      })
      .catch((errors) => setErrors(errors))
      .then(() =>
        setTimeout(() => {
          setLoading(false);
        }, 1000)
      );
  }, [currentPage]);

  return {
    setCurrentPage,
    allPages: data?.total_pages,
    currentPage,
    users: data?.data,
    loading,
    errors,
  };
};

export default useFetchUsers;
