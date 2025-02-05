import { Link } from "react-router-dom"

const Magic8BallComponent = () => {
    return (
        <div className="bg-[url(/src/Assets/AllForOneMagic.jpg)] bg-no-repeat bg-cover bg-center h-[100vh]">

            <Link to="/pages"><button className="text-black text-2xl m-5 bg-[#F0EBD9] rounded-xl border-[#DFD9C5] border-[3px] p-2 px-8">Back</button></Link>

            <div className="text-white font-inder bg-[#DB9E4E]/75 grid mx-[27rem] mt-5 grid-cols-3 grid-rows-7 rounded-3xl">

                <p className="text-3xl flex justify-center my-5 col-[2]">Magic 8 Ball</p>

                <p></p>

                <input type="text" placeholder="Your question here..." className="bg-white border-1 col-[2] row-[3] m-3 rounded-xl" />

                <button className="text-black text-2xl bg-white border-[3px] border-black col-[2] row-[5] m-3 rounded-xl cursor-pointer">Shake the Ball.</button>
                
            </div>
        </div>
    )
}

export default Magic8BallComponent