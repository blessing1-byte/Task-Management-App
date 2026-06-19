import { createSlice } from "@reduxjs/toolkit";

//first you need to get userInfo
const initialState = {
  userInfo:
    localStorage.getItem("userInfo") ?
      JSON.parse(localStorage.setItem("userInfo"))
    : null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.userInfo = action.payload;
      localStorage.setItem("userInfo", JSON.stringify(action.payload));
    },
    logOut: (state) => {
      state.userInfo = null;
      localStorage.removeItem("userInfo");
    },
  },
});

export const { setCredentials, logOut } = authSlice.actions; // { setCredentials, logOut } — functions you dispatch
export default authSlice.reducer; // the actual reducer function — goes into your store

/*
// authSlice itself looks like this internally:
authSlice = {
  name: "auth",
  reducer: fn,
  actions: { setCredentials, logOut },  // ← they live HERE
  ...
}
  */
