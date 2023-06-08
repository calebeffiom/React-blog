import { useState, useEffect } from "react";
const useFetch = (url)=>{
    const[data,setData] = useState(null);
    const[isloading, loading] = useState(true);
    const[error, seterror]= useState(null);
    useEffect(()=>{
        setTimeout(()=>{
        fetch(url)
            .then(res =>{
                if(!res.ok){
                    throw Error("could not fetch")
                }
                return res.json();
            })
            .then((data)=>{
                setData(data)
                loading(false)
                seterror(null)
            })
            .catch((err)=>{
                loading(false)
                seterror(err.message)
            })
        },1000)
    },[url]);
    return {data, isloading, error}
}
export default useFetch;