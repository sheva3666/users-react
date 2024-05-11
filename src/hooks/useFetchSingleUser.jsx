import { useEffect, useState } from "react";
import { fetchSingleUser } from "../api/api";

const useFetchSingleUser = (userId) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState();

  useEffect(() => {
    setLoading(true);
    fetchSingleUser(userId)
      .then((data) => setUser(data.data))
      .catch((errors) => setErrors(errors))
      .then(() =>
        setTimeout(() => {
          setLoading(false);
        }, 2000)
      );
  }, [userId]);

  return { user, loading, errors };
};

export default useFetchSingleUser;
