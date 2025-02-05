import { useState, useEffect } from "react"
import { SayHelloFetch } from "../services/services"
import { Link } from "react-router-dom";

const SayHelloComponent = () => {
    const [greeting, setGreeting] = useState('');
    const [display, setDisplay] = useState("");

    const fetchGreeting = async (sayGreeting) => {
        setGreeting(await SayHelloFetch(sayGreeting));
    }

    const displayGreeting = async () => {
        console.log(greeting);
        setDisplay(greeting);
    }


    return(
        
        <div className="bg-[url(/src/Assets/AllForOneSayHello.jpg)] bg-no-repeat bg-cover bg-center h-[100vh]">
           
           <Link to="/pages"><button className="text-black text-2xl m-5 bg-[#F0EBD9] rounded-xl border-[#DFD9C5] border-[3px] p-2 px-8">Back</button></Link>
    
            <div className="text-black font-inder bg-white/70 grid mx-52 mt-14 grid-cols-5 grid-rows-6 rounded-3xl">
                <p className="text-black text-3xl flex justify-center my-5 col-[3]">Say Hello</p>

                

                <input type="text" placeholder="Name here..." className="bg-white border-1 border-black col-[3] row-[3] m-3 rounded-xl" onChange={(event) => { 
                    fetchGreeting( event.target.value);}} />

                <button className="text-2xl bg-white border-[3px] border-black col-[3] row-[4] m-3 rounded-xl cursor-pointer" onClick={displayGreeting}>Go!</button>

                <p className="flex justify-center self-center col-start-[2] col-end-[5] row-[2] ">{display}</p>
                
            </div>
        </div>
    )
}

export default SayHelloComponent