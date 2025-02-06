import { Link } from "react-router-dom"
import { OddEvenFetch } from "../services/services";
import { useState } from "react";

const OddOrEvenComponent = () => {
    const [oddEven, setOddEven] = useState('');
    const [display, setDisplay] = useState("");

    const fetchOddEven = async (number) => {
        setOddEven(await OddEvenFetch(number));
    }

    const displayOddeven = async () => {
        console.log(oddEven);
        setDisplay(oddEven);
    }

    return(
        <div className="bg-[url(/src/assets/AllForOneOddEven.jpg)] bg-no-repeat bg-cover h-[100vh]">

            <Link to="/pages"><button className="text-black text-2xl m-5 bg-[#F0EBD9] rounded-xl border-[#DFD9C5] border-[3px] p-2 px-8">Back</button></Link>

            <div className="font-inder bg-white/70 grid mx-52 mt-14 grid-cols-5 grid-rows-4 rounded-3xl gap-y-6 pb-10">

                <p className="text-black text-3xl flex justify-center my-5 col-span-5">Odd or Even</p>

                <p className="flex justify-center self-center col-start-[2] col-end-[5] row-[2]">{display}</p>

                <input type="text" placeholder="Number..." className="bg-white border-1 col-[3] row-[3] m-3 rounded-xl" onChange={(event) => {
                    fetchOddEven(event.target.value);
                }} />

                <button className="text-black text-2xl bg-white col-[3] row-[4] rounded-xl border-[3px] border-black m-3 cursor-pointer" onClick={displayOddeven} >Go!</button>
            
            </div>
        </div>
    )
}

export default OddOrEvenComponent