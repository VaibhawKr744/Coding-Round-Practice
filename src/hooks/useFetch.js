import react, { useEffect, useState } from "react";

const useFetch =(url) => {
    const [data,setData] = useState(null)
    const [err, setErr] = useState(null)
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(res=>setData(res))
        .catch(err=>setErr(err))
    },[url])

    return {data, err}

}

export default useFetch