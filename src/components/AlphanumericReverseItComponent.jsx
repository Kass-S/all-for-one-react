import { Link } from "react-router-dom"
import { AlphnumericReverseFetch } from "../services/services"
import { useState } from "react"

const AlphanumericReverseItComponent = () => {
    const [reverse, setReverse] = useState('');
    const [display, setDisplay] = useState("");

    const fetchReverse= async (string) => {
        setReverse(await AlphnumericReverseFetch(string));
    }

    const displayReverse = async () => {
        setDisplay(reverse);
    }

    return (
        <div className="bg-[url(/src/assets/AllForOneReverseIt.jpg)] bg-no-repeat bg-cover bg-center h-[100vh]">

            <Link to="/pages"><button className="text-black text-2xl m-5 bg-[#F0EBD9] rounded-xl border-[#DFD9C5] border-[3px] p-2 px-8">Back</button></Link>

            <div className="text-black font-inder bg-[#E4DFD1]/80 grid mx-10 lg:mx-80 mt-14 grid-rows-4 md:grid-cols-3 md:grid-rows-6 rounded-3xl pb-10 md:pb-0">

                <p className="text-3xl flex justify-center my-5 md:col-span-3">Reverse It</p>

                <p className="flex justify-center self-center mx-2 md:col-start-[1] md:col-end-[4] row-[2]">{display}</p>

                <input type="text" placeholder="Word..." className="bg-white border-1 md:col-[2] row-[3] m-3 rounded-xl mx-10 md:mx-0" onChange={(event) => {
                    fetchReverse(event.target.value);
                }}  />

                <button className="text-2xl bg-white border-[3px] border-black md:col-[2] md:row-[5] m-3 rounded-xl mx-10 md:mx-0 cursor-pointer" onClick={displayReverse} >Go!</button>
                
            </div>
        </div>
    )
}

export default AlphanumericReverseItComponent