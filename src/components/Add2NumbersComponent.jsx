import { useEffect, useState } from "react"
import { AddNumbersFetch } from "../services/services";
import { Link } from "react-router-dom";

const Add2NumbersComponent = () => {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [solution, setSolution] = useState('');
    const [display, setDisplay] = useState('');

    const fetchNumbers = async () => {
        setSolution(await AddNumbersFetch(num1, num2));
    }

    const displaySolution = async () => {
        fetchNumbers()
        
    }

    useEffect(() => {
        setDisplay(solution);
    }, [solution])
    

    return(
        <div className="bg-[url(/src/assets/AllForOneAdd2Nums.jpg)] bg-no-repeat bg-cover bg-center h-[100vh] text-black">

            <Link to="/pages"><button className="text-black text-2xl m-5 bg-[#F0EBD9] rounded-xl border-[#DFD9C5] border-[3px] p-2 px-8">Back</button></Link>

            <div className="font-inder bg-white/80 grid mx-52 mt-14 grid-cols-5 grid-rows-6 rounded-3xl mr-[40rem]">
                <p className="text-3xl flex justify-center my-5 col-span-5">Add 2 Numbers</p>

                <p className="flex justify-center self-center col-start-[2] col-end-[5] row-[2] ">{display}</p>

                <input type="text" placeholder="1st number here..." className="bg-[#FFE6B7] border-1 col-start-2 col-end-4 row-[3] m-3 rounded-xl mr-20" onChange={(event) => {
                    setNum1(event.target.value)
                }} />

                <input  type="text" placeholder="2nd number here..." className="bg-[#FFE6B7] border-1 col-start-3 col-end-5 row-[3] m-3 rounded-xl ml-20" onChange={(event) => {
                    setNum2(event.target.value)
                }} />

                <button className="text-2xl bg-[#F8CE7E] border-[3px] border-black col-start-2 col-end-5 row-[5] m-3 mx-28 rounded-xl cursor-pointer" onClick={displaySolution} >Add!</button>
                
            </div>
        </div>
    )
}

export default Add2NumbersComponent