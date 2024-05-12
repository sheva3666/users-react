import { useState } from "react";

const useHandleForm = () => {
  const [newUser, setNewUser] = useState({
    email: "",
    password: "",
  });

  const handleChangeForm = (value, key) => {
    setNewUser((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };
  const resetForm = () => {
    setNewUser((prevState) => ({
      ...prevState,
      email: "",
      password: "",
    }));
  };

  return { newUser, handleChangeForm, resetForm };
};

export default useHandleForm;
