import { axiosInstance } from "./axiosInstance"

export const boardDetails = async () => {
    try {
        const data = await axiosInstance.get("/v1/board/details");
        console.log(data);
    } catch (error) {
        console.log(error);

    }

}