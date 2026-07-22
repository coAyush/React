import axios from "axios";
import { axiosInstance } from "./axiosInstance";

export const getDashboardStats = async()=>{
    const response=await axiosInstance.get("/dashboard");
    console.log(response);
    return response;
};

