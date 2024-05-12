import { useState } from "react";
import { createUser } from "../../api/api";
import useHandleForm from "../../hooks/useHandleForm";
import "./UserCreationPage.css";

const UserCreationPage = () => {
  const [registeredUserMessage, setRegisteredUserMessage] = useState(null);
  const { newUser, handleChangeForm, resetForm } = useHandleForm();

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      createUser(newUser)
        .then((data) =>
          setRegisteredUserMessage(
            `User with given id => ${data?.id} successfully registered.`
          )
        )
        .then(() => resetForm());
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {registeredUserMessage && <h4>{registeredUserMessage}</h4>}
      <form className="form" action="">
        <input
          className="form_input"
          value={newUser.email}
          onChange={(e) => handleChangeForm(e.target.value, "email")}
          type="email"
          name="Email"
          placeholder="Email"
          id=""
        />
        <input
          className="form_input"
          value={newUser.password}
          onChange={(e) => handleChangeForm(e.target.value, "password")}
          type="password"
          placeholder="Password"
        />
        <button
          onClick={(e) => handleSubmit(e)}
          className="form_button"
          type="submit"
        >
          Register
        </button>
      </form>
    </>
  );
};

export default UserCreationPage;
