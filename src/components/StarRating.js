import react, { useState } from "react";

const StartRating = () => {
    const [count, setCount] = useState(3)
    const [hover, setHover] = useState(0)
    const arr = [1, 2, 3, 4, 5]
    return (
        <>
            <div className="flex justify-center">
            <h1>STAR RATING</h1>
            </div>
             
            <div className="flex justify-center">
          
            {arr.map((num) => {
                return(
                    <div
                     key={num}
                     className={`text-3xl cursor-pointer ${num<=(hover||count)? "text-yellow-400":"text-gray-500"}`}
                     onClick={()=>setCount(num)}
                     onMouseEnter={()=> setHover(num)}
                     onMouseLeave={()=> setHover(0)}
                    >
                        ★
                    </div>
                )
            })
            }
            </div>
        </>

    )
}

export default StartRating