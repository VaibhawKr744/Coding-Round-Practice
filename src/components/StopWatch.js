import react, { useEffect, useState } from "react";

const StopWatch = ({start, pause, stop, setStart, setPause, setStop}) => {
    const [time, setTime] = useState(0)
    const [counter, setCounter] = useState(false)

    const formatTime = (time) => {
        const hours = Math.floor(time / 3600);
        const minutes = Math.floor((time % 3600) / 60);
        const seconds = time % 60;
        return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };

    console.log("parent prop" , start)
    useEffect(()=>{
        if(start===true){
            setCounter(true)
        } 
        if(pause===true){
            setCounter(false)
            setStart(false)
            setPause(false)
        }
        if(stop===true){
            setTime(0); 
            setCounter(false)
            setStart(false)
            setStop(false)
        }
        

    },[start, pause, stop])
    useEffect(() => {
        let interval
        if(counter){
             interval = setInterval(() => {
                setTime(prev=> prev+1)
            }, 1000)
        }
        
        return () => clearInterval(interval)
    }, [counter])
   
    return (
        <>
            <div className="flex justify-center text-2xl">{formatTime(time)}</div>
            <div className="flex justify-center ">
                <button className="bg-yellow-400 p-2 border border-blue-400 rounded-lg text-white mr-5" onClick={() => {setCounter(true); setStart(false)}}>Start</button>
                <button className="bg-yellow-400 p-2 border border-blue-400 rounded-lg text-white mr-5" onClick={() => {setCounter(false); setStart(false)}}>Pause</button>
                <button className="bg-yellow-400 p-2 border border-blue-400 rounded-lg text-white" onClick={() => {setTime(0); setCounter(false); setStart(false)}}>Stop</button>

            </div>
        </>
    )
}

export default StopWatch