import { axiosInstance } from "./axiosInstance"

export const boardDetails = ()=>{
    return axiosInstance.get("/v1/board/details");
    
}