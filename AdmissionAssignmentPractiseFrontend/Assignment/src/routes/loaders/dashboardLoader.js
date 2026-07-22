import { getDashboardStats } from "../../services/api/dashboardService";
export const dashboardLoader=async ()=>{
       const response = await getDashboardStats();
    console.log(response);
    console.log(response.data.data.details);

    return response.data.data.details;
}
