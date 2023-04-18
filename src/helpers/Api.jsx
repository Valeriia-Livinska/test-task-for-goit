import axios from "axios";

axios.defaults.baseURL = "https://63ab93b5fdc006ba6060fe38.mockapi.io";
const limitPerPage = 8;

export const fetchUsers = async (page) => {
  const res = await axios.get(`/users?page=${page}&limit=${limitPerPage}`);
  return res.data;
};

export const updateIsFollowing = async (id, isFollowing) => {
  const res = await axios.put(`/users/${id}`, { isFollowing: !isFollowing });
  return res.data;
};
