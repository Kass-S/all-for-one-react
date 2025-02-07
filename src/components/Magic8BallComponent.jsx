import { Link } from "react-router-dom"
import { Magic8BallFetch } from "../services/services"
import { useState } from "react"

const Magic8BallComponent = () => {
    const [magic, setMagic] = useState('');
    const [display, setDisplay] = useState("");

    const fetchMagic = async (magic8) => {
        setMagic(await Magic8BallFetch(magic8));
    }

    const displayMagic = async () => {
        setDisplay(magic);
    }    

    return (
        <div className="bg-[url(/src/assets/AllForOneMagic.jpg)] bg-no-repeat bg-cover bg-center h-[100vh]">

            <Link to="/pages"><button className="text-black text-2xl m-5 bg-[#F0EBD9] rounded-xl border-[#DFD9C5] border-[3px] p-2 px-8">Back</button></Link>

            <div className="text-white font-inder bg-[#DB9E4E]/75 grid mx-10 md:mx-32 lg:mx-40 xl:mx-[27rem] mt-5 grid-rows-4 md:grid-cols-3 lg:grid-rows-6 rounded-3xl pb-20 lg:pb-0 gap-y-4 sm:gap-y-0">

                <p className="text-3xl flex justify-center my-5 md:col-span-3">Magic 8 Ball</p>

                <p className="flex justify-center self-center md:col-start-[1] md:col-end-[4] row-[2] ">{display}</p>

                <input type="text" placeholder="Your question here..." className="text-black bg-white border-1 md:col-[2] row-[3] mx-10 md:mx-0 m-3 rounded-xl"  onChange={(event) => { 
                    fetchMagic( event.target.value);}} />

                <button className="text-black text-2xl bg-white border-[3px] border-black md:col-[2] lg:row-[5] m-3 mx-10 md:mx-0 rounded-xl cursor-pointer"  onClick={displayMagic}>Shake the Ball.</button>
                
            </div>
        </div>
    )
}

export default Magic8BallComponent