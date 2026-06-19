import { TASK_URL } from "../constant";
import { apiSlice } from "./apiSlice";

const taskApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    CreateTask: builder.mutation({
      query: (formData) => ({
        url: `${TASK_URL}/create-task`,
        method: "POST",
        body: formData,
      }),
    }),
    GetTask: builder.query({
      query: () => ({
        url: `${TASK_URL}/get-userTask`,
      }),
      keepUnusedDataFor: 5,
    }),
    GetTaskById: builder.query({
      query: (_id) => ({
        url: `${TASK_URL}/get-userTask/${_id}`,
      }),
      keepUnusedDataFor: 5,
    }),
  }),
});

export const { useCreateTaskMutation, useGetTaskQuery, useGetTaskByIdQuery } =
  taskApiSlice;

/*
injectEndpoints takes one argument — an object with an endpoints property:
javascriptapiSlice.injectEndpoints({
  endpoints: (builder) => ({...})
}) */
