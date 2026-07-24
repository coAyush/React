import React, { useState,useEffect } from 'react'

const useFetch = (apiFunction) => {
    const[data,setData]=useState([]);
    const[loading,setLoading]=useState(true);
    const[error,setError]=useState(null)

    useEffect(()=>{
        const getData= async ()=>{
            try{
                const info=await(apiFunction);
                setData(info.data)
            }catch(error){
                setError(true)
            }
            finally{
                setLoading(false)
            }
            
        }
        getData();

    },[apiFunction])
    return {data,loading,error};
}

export default useFetch