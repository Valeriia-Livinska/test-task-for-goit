import axios from "axios";

axios.defaults.baseURL = "https://63ab93b5fdc006ba6060fe38.mockapi.io";
const limitPerPage = 8;

export const fetchUsers = async (page) => {
  const res = await axios.get(`/users?page=${page}&limit=${limitPerPage}`);
  return res.data;
};

export const updateIsFollowing = async (id, isFollowing, followers) => {
  if (!isFollowing) {
    followers = followers + 1;
  } else {
    followers = followers - 1;
  }

  const res = await axios.put(`/users/${id}`, {
    isFollowing: !isFollowing,
    followers: followers,
  });
  return res.data;
};
