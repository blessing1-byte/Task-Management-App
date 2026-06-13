import { useState } from "react";
import { useRegisterUserMutation } from "../slices/userApiSlice";
const SignUp = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const clearInputs = () => {
    setUserData({ name: "", email: "", password: "  " });
  };
  const [registerUser, { data, isLoading, isError }] =
    useRegisterUserMutation();

  const changeHandler = (e) => {
    //set it in the userData
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      //unwrap the new data from store
      await registerUser(userData).unwrap();
      clearInputs();
    } catch (error) {
      console.log(`error: ${error.message}`);
    }
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          name="name"
          placeholder="name"
          value={userData.name}
          onChange={changeHandler}
        />
        <input
          type="email"
          name="email"
          placeholder="email"
          value={userData.email}
          onChange={changeHandler}
        />
        <input
          type="password"
          name="password"
          placeholder="enter password"
          value={userData.password}
          onChange={changeHandler}
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default SignUp;

/* Note
When you call useRegisterUserMutation() it returns two things:

register — the function you call to actually fire the API request
{ data, isLoading, isError } — the result object that tracks the state of that request

So when the user submits the form, you call register(formData) which sends the POST request to your backend. You could name it anything — trigger, createUser, registerUser — the name doesn't matter, it's just a variable. register just makes it readable and clear what it does.

*/
