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

            <div className="text-white font-inder bg-[#DB9E4E]/75 grid mx-[27rem] mt-5 grid-cols-3 grid-rows-7 rounded-3xl">

                <p className="text-3xl flex justify-center my-5 col-[2]">Magic 8 Ball</p>

                <p className="flex justify-center self-center col-start-[1] col-end-[4] row-[2] ">{display}</p>

                <input type="text" placeholder="Your question here..." className="text-black bg-white border-1 col-[2] row-[3] m-3 rounded-xl"  onChange={(event) => { 
                    fetchMagic( event.target.value);}} />

                <button className="text-black text-2xl bg-white border-[3px] border-black col-[2] row-[5] m-3 rounded-xl cursor-pointer"  onClick={displayMagic}>Shake the Ball.</button>
                
            </div>
        </div>
    )
}

export default Magic8BallComponent