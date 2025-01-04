import react, { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";

const Table = () => {
    // const [data, setData] = useState([])
    const {data, err} = useFetch("https://reqres.in/api/users")
    console.log(data?.data, err)
    if(!data) return <h1>loading....</h1>
    // useEffect(() => {
    //     fetch("https://reqres.in/api/users")
    //         .then((res) => res.json())
    //         .then(res => setData(res.data))
    //         .catch((err)=>console.log(err))
    // }, [data])
    // useEffect(()=>{
    //     const getData = async () =>{
    //         try{
    //             const fetchData = await fetch("https://reqres.in/api/users")
    //             const res = await fetchData.json()
    //              setData(res.data)
    //         } 
    //         catch(err){
    //             console.log(err)
    //         }
           
    //     }
    //     getData()
    // },[])

    return (
        <>
            <div className="flex justify-center">
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.data?.map((data,i) => {
                            return (
                                <tr key={i}>
                                    <td>{data?.first_name}</td>
                                    <td>{data?.email}</td>
                                </tr>
                            )
                        })}

                    </tbody>

                </table>
            </div>
        </>
    )
}

export default Table