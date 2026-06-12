import { USER_URL } from "../constant";
import { apiSlice } from "./apiSlice";

const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    RegisterUser: builder.mutation({
      query: (userData) => ({
        url: `${USER_URL}/register-user`,
        method: "POST",
        body: userData,
      }),
    }),
  }),
});

export const { useRegisterUserMutation } = userApiSlice;

/* NOTE
What is builder?
builder is an object RTK Query gives you automatically when you define your endpoints. It has two methods on it:

builder.query — for fetching data (GET requests)
builder.mutation — for changing data (POST, PUT, DELETE requests)

Think of it like a helper that knows how to set up different types of API calls correctly.

Why builder.mutation?
Because registering a user changes data on the server — it creates a new user in your database. Anything that creates, updates, or deletes data is a mutation. Anything that just reads/fetches data is a query.
*/

/*
Export is wrong — you exported registerUser but RTK Query generates the hook as useRegisterUserMutation. It always follows the pattern use + endpoint name + Mutation for mutations. So it should be:

export const { useRegisterUserMutation } = userApiSlice;
*/
