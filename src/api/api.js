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
  unfollowUser: id => {
    return axiosInstance.delete(`follow/${id}`).then(response => {
      return response.data;
    });
  },
  followUser: id => {
    return axiosInstance.post(`follow/${id}`).then(response => {
      return response.data;
    });
  }
};
