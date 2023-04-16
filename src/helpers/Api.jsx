import axios from "axios";

axios.defaults.baseURL = "https://63ab93b5fdc006ba6060fe38.mockapi.io";

export const fetchUsers = async () => {
  const res = await axios.get(`/users`);
  return res.data;
};
