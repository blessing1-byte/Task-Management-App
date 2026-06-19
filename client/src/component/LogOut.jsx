import { useDispatch } from "react-redux";
import { useLogOutUserMutation } from "../slices/userApiSlice";
import { logOut } from "../slices/authSlice";
import { useNavigate } from "react-router-dom";

const LogOut = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [logOutUser] = useLogOutUserMutation();

  const logOutHandler = async () => {
    try {
      await logOutUser().unwrap(); //delete from cookie
      dispatch(logOut()); //set user details to empty in store
      navigate("/"); //navigate back to home
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <button onClick={logOutHandler}>logOut</button>
    </>
  );
};
export default LogOut;
