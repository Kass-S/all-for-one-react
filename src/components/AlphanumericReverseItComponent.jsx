import { Link } from "react-router-dom"

const AlphanumericReverseItComponent = () => {
    return (
        <div className="bg-[url(/src/Assets/AllForOneReverseIt.jpg)] bg-no-repeat bg-cover bg-center h-[100vh]">

            <Link to="/pages"><button className="text-black text-2xl m-5 bg-[#F0EBD9] rounded-xl border-[#DFD9C5] border-[3px] p-2 px-8">Back</button></Link>

            <div className="text-black font-inder bg-[#E4DFD1]/80 grid mx-80 mt-14 grid-cols-3 grid-rows-6 rounded-3xl">

                <p className="text-3xl flex justify-center my-5 col-[2]">Reverse It</p>

                <p></p>

                <input type="text" placeholder="Word..." className="bg-white border-1 col-[2] row-[3] m-3 rounded-xl mx-10" />

                <button className="text-2xl bg-white border-[3px] border-black col-[2] row-[5] m-3 rounded-xl mx-10 cursor-pointer">Go!</button>
                
            </div>
        </div>
    )
}

export default AlphanumericReverseItComponent