import { useState,useEffect } from "react";
import axios  from "axios";

const useAxiosFetch =(dataURL)=>{

    const [data,setData] =useState([]);
    const [fetchError,setFetchError]= useState(null);
    const [isLoading,setIsLoading]= useState(false);

    useEffect(()=>{


        let isMounted =true;    // componet varutha paka illana load aiducha
        const source =axios.CancelToken.source();

        const fetchData = async (url) =>{
            setIsLoading(true);

            try{
                const reponse =await axios.get(url,{cancelToken: source.token});
                if(isMounted){
                    setData(reponse.data)
                    setFetchError(null)
                }
            }
            catch(err){

                if(isMounted){
                    setFetchError(err.message);
                    setData([]);
                }
            }
            finally{
                isMounted &&   setIsLoading(false)
            }
        }
        fetchData(dataURL);
        const cleanup =()=>{
            isMounted=false;
            source.cancel();
        }
        return cleanup;

    },[dataURL])

    return {data,fetchError,isLoading};

}
export default useAxiosFetch