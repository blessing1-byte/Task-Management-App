export const BASE_URL =
  import.meta.env.MODE == "development" ? "http://localhost:8001" : "";

export const USER_URL = `${BASE_URL}/user`;
export const TASK_URL = `${BASE_URL}/task`;
