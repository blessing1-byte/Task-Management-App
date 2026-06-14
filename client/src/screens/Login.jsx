import { useState } from "react";
import { useLoginUserMutation } from "../slices/userApiSlice";

const Login = () => {
  const [loggedInData, setLoggedInData] = useState({ email: "", password: "" });
  const clearInputs = () => {
    setLoggedInData({ name: "", email: "", password: "  " });
  };

  const changeHandler = (e) => {
    setLoggedInData({ ...loggedInData, [e.target.name]: e.target.value });
  };

  const [LoginUser, { data, isLoading, isError }] = useLoginUserMutation();

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await LoginUser(loggedInData).unwrap; //unwraps the data and pass it to the backend
      clearInputs();
      alert("login successfully");
    } catch (error) {
      console.log(`message : ${error.message}`);
    }
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="email"
          name="email"
          id="email"
          value={loggedInData.email}
          onChange={changeHandler}
        />
        <input
          type="password"
          name="password"
          id="password"
          value={loggedInData.password}
          onChange={changeHandler}
        />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;
