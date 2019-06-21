import * as axios from "axios";

const axiosInstance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": process.env.REACT_APP_SAMURAIJS_API_KEY
  }
});

export const usersAPI = {
  getUsers: (currentPage = 1, pageSize = 10) => {
    return axiosInstance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => {
        return response.data;
      });
  },
  unfollow: userId => {
    return axiosInstance.delete(`follow/${userId}`).then(response => {
      return response.data;
    });
  },
  follow: userId => {
    return axiosInstance.post(`follow/${userId}`).then(response => {
      return response.data;
    });
  },
  getProfile(userId) {
    return axiosInstance.get(`profile/${userId}`);
  }
};

export const authAPI = {
  me: () => {
    return axiosInstance.get("auth/me");
  }
};
