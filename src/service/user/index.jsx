import { req } from "../axios.config";

export const userAPI = {
  getUser: async (userId) => {
    try {
      const res = await req.get(`/users/${userId}`);
      return res.data;
    } catch (err) {
      console.error(err);
    }
  },

  searchUser: async (user_name) => {
    try {
      const res = await req.get(`/users/${user_name}`);
      return res.data;
    } catch (err) {
      console.error("Error searching user:", err);
      return null;
    }
  },

  getFollowers: async () => {
    try {
      const res = await req.get(
        `/users/${import.meta.env.VITE_MY_PROFILE}/followers`
      );
      return res.data;
    } catch (err) {
      console.error(err);
    }
  },

  getFollowings: async () => {
    try {
      const res = await req.get(
        `/users/${import.meta.env.VITE_MY_PROFILE}/followings`
      );
      return res.data;
    } catch (err) {
      console.error(err);
    }
  },
};
