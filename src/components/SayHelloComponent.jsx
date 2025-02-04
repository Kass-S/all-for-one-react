import { useState, useEffect } from "react"
import { SayHelloFetch } from "../services/services"

const SayHelloComponent = () => {
    const [greeting, setGreeting] = useState('');

    const fetchGreeting = async (event, sayGreeting) => {
        if(event.key === 'Enter'){
            console.log(sayGreeting);
            console.log(await SayHelloFetch(sayGreeting));
        }
    }

    useEffect(() => {
        console.log(greeting);
    }, [])

    return(
        
        <div className="bg-[url(/src/Assets/AllForOneSayHello.jpg)] bg-no-repeat bg-cover bg-center h-[100vh]">
           
            <a href="/pages" className=""><button className="text-black text-3xl m-5 bg-amber-50 rounded-2xl border-amber-100 border-3 p-2 px-4">Back</button></a>
    
            <div className="text-black font-inder bg-white/70 grid mx-52 mt-14 grid-cols-5 grid-rows-6 rounded-3xl">
                <p className="text-black text-3xl flex justify-center my-5 col-[3]">Say Hello</p>

                <p id="SayHelloText"></p>

                <input type="text" placeholder="Name here..." className="bg-white border-1 border-black col-[3] row-[3] m-3 rounded-2xl" onKeyDown={(event) => { 
                    console.log()
                    fetchGreeting(event, event.target.value)}} />

                <button className="text-2xl bg-white border-[3px] border-black col-[3] row-[4] m-3 rounded-2xl cursor-pointer">Go!</button>
                
            </div>
        </div>
    )
}

export default SayHelloComponent