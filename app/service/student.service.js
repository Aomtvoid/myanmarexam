import axios from "axios";
import axiosInstance from "../config/axiosInstance";

export const fetchUser = async (id) => {
  try {
    const response = (await axiosInstance.get(`/admin/user/${id}`)).data;
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const fetchAllUsers = async () => {
  try {
    const response = (await axiosInstance.get(`/admin/create`)).data;
    return response;
  } catch (error) {
    console.error(error);
  }
};
