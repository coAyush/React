import { boardDetails } from "../../services/api/boardService"
export const admissionPageLoader = ()=>{
    const getBoardData =  ()=>{
        const resp =  boardDetails ();
        console.log(resp);
        return resp;
    }
}