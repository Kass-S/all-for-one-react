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
        setDisplay(greeting);
    }

    return(
        
        <div className="bg-[url(/src/assets/AllForOneSayHello.jpg)] bg-no-repeat bg-cover bg-center h-[100vh]">
           
           <Link to="/pages"><button className="text-black text-2xl m-5 bg-[#F0EBD9] rounded-xl border-[#DFD9C5] border-[3px] p-2 px-8">Back</button></Link>
    
            <div className="text-black font-inder bg-white/70 grid mx-8  lg:mx-52 mt-10 grid-cols-1 grid-rows-4 lg:grid-cols-5 lg:grid-rows-6 rounded-3xl">

                <p className="text-black text-3xl flex justify-center my-5 col-[1] lg:col-start-2 lg:col-end-5">Say Hello</p>

                <input type="text" placeholder="Name here..." className="bg-white border-1 border-black my-5 col-[1] lg:col-[3] row-[3] m-3 mx-20 md:mx-40 lg:mx-0 rounded-xl" onChange={(event) => { 
                        fetchGreeting(event.target.value);
                    }
                } />

                <button className="text-2xl bg-white border-[3px] border-black my-5 col-[1] lg:col-[3] row-[4] m-3 mx-20 md:mx-40 lg:mx-0 rounded-xl cursor-pointer" onClick={displayGreeting}>Go!</button>

                <p className="flex justify-center self-center lg:col-start-[2] lg:col-end-[5] row-[2] ">{display}</p>
                
            </div>
        </div>
    )
}

export default SayHelloComponent