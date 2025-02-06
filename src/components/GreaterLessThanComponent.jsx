import { Link } from "react-router-dom"
import { GreaterLessFetch } from "../services/services"
import { useState, useEffect } from "react"

const GreaterLessThanComponent = () => {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [solution, setSolution] = useState('');
    const [display, setDisplay] = useState('');

    const fetchGreaterLess = async () => {
        setSolution(await GreaterLessFetch(num1, num2));
    }

    const displaySolution = async () => {
        fetchGreaterLess()    
    }

    useEffect(() => {
        setDisplay(solution);
    }, [solution])

    return (
        <div className="bg-[url(/src/assets/AllForOneGuessIt.jpg)] bg-no-repeat bg-cover bg-center h-[100vh]">

            <Link to="/pages"><button className="text-black text-2xl m-5 bg-[#F0EBD9] rounded-xl border-[#DFD9C5] border-[3px] p-2 px-8">Back</button></Link>

            <div className="font-inder bg-[#EBFAFE]/75 grid mx-60 mt-5 grid-cols-5 grid-rows-4 rounded-3xl gap-y-3 pb-30">

                <p className="text-3xl flex justify-center my-5 col-span-5">Greater Than Less Than</p>

                <p className="flex justify-center self-center col-start-[2] col-end-[5] row-[2] ">{display}</p>

                <input type="text" placeholder="1st number here..." className="bg-white border-1 col-start-2 col-end-4 row-[3] m-3 rounded-xl mr-40" onChange={(event) => {
                    setNum1(event.target.value)
                }}/>

                <input type="text" placeholder="2nd number here..." className="bg-white border-1 col-start-3 col-end-5 row-[3] m-3 rounded-xl ml-40" onChange={(event) => {
                    setNum2(event.target.value)
                }} />

                <button className="text-2xl bg-white border-[3px] border-black col-start-2 col-end-5 row-[4] m-3 mx-48 rounded-xl cursor-pointer" onClick={displaySolution}>Go!</button>
                
            </div>
        </div>
    )
}

export default GreaterLessThanComponent