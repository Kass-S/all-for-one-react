import { Link } from "react-router-dom"
import { MadLibFetch } from "../services/services"
import { useState, useEffect } from "react"

const MadLibComponent = () => {
    const [madLibNoun, setMadLibNoun] = useState('');
    const [madLibAnimal, setMadLibAnimal] = useState('');
    const [madLibName, setMadLibName] = useState('');
    const [madLibDifferentName, setMadLibDifferentName] = useState('');
    const [madLibEmotion, setMadLibEmotion] = useState('');
    const [madLibAction, setMadLibAction] = useState('');
    const [madLibJob, setMadLibJob] = useState('');
    const [madLibStructure, setMadLibStructure] = useState('');
    const [madLib, setMadLib] = useState('');
    const [display, setDisplay] = useState('');

    const fetchMadLib = async () => {
        setMadLib(await MadLibFetch(madLibNoun, madLibAnimal, madLibName, madLibDifferentName, madLibEmotion, madLibAction, madLibJob, madLibStructure));
    }

    const displayMadLib = async () => {
       fetchMadLib();    
    }

    useEffect(() => {
        setDisplay(madLib);
    }, [madLib])

    return (
        <div className="bg-[url(/src/assets/AllForOneMadlib.jpg)] bg-no-repeat bg-cover md:h-[100vh]">

            <Link to="/pages"><button className="text-black text-2xl m-5 bg-[#F0EBD9] rounded-xl border-[#DFD9C5] border-[3px] p-2 px-8">Back</button></Link>


            <div className="text-black font-inder bg-white/70 grid mx-10 lg:mx-32 xl:mx-52 mt-5 grid-cols-1 grid-rows-9 md:grid-cols-3 md:grid-rows-6 lg:grid-cols-5 lg:grid-rows-6 rounded-3xl lg:mr-[20rem] xl:mr-[35rem] pb-5">

                <p className="text-3xl flex justify-center my-5 md:col-span-3 lg:col-span-5">Mad Lib</p>
         
                <input type="text" placeholder="Noun..." className="bg-white border-1 lg:col-start-2 lg:col-end-4 lg:row-[2] m-3 rounded-xl mx-14 md:mx-8  lg:mr-24" onChange={(event) => {
                    setMadLibNoun(event.target.value);
                }} />

                <input type="text" placeholder="Animal..." className="bg-white border-1 md:col-[3] lg:col-start-3 lg:col-end-5 lg:row-[2] m-3 rounded-xl mx-14 md:mx-8 lg:ml-24" onChange={(event) => {
                    setMadLibAnimal(event.target.value);
                }} />

                <input type="text" placeholder="Name..." className="bg-white border-1 lg:col-start-2 lg:col-end-4 lg:row-[3] m-3 rounded-xl mx-14 md:mx-8 lg:mr-24" onChange={(event) => {
                    setMadLibName(event.target.value);
                }} />

                <input type="text" placeholder="Different Name..." className="bg-white border-1 md:col-[3] lg:col-start-3 lg:col-end-5 lg:row-[3] m-3 rounded-xl mx-14 md:mx-8 lg:ml-24" onChange={(event) => {
                    setMadLibDifferentName(event.target.value);
                }} />

                <input type="text" placeholder="Emotion..." className="bg-white border-1 lg:col-start-2 lg:col-end-4 lg:row-[4] m-3 rounded-xl mx-14 md:mx-8 lg:mr-24" onChange={(event) => {
                    setMadLibEmotion(event.target.value);
                }} />

                <input type="text" placeholder="Action..." className="bg-white border-1 md:col-[3] lg:col-start-3 lg:col-end-5 lg:row-[4] m-3 rounded-xl mx-14 md:mx-8 lg:ml-24" onChange={(event) => {
                    setMadLibAction(event.target.value);
                }} />

                <input type="text" placeholder="Job..." className="bg-white border-1 lg:col-start-2 lg:col-end-4 lg:row-[5] m-3 rounded-xl mx-14 md:mx-8 lg:mr-24" onChange={(event) => {
                    setMadLibJob(event.target.value);
                }} />

                <input type="text" placeholder="Structure" className="bg-white border-1 md:col-[3] lg:col-start-3 lg:col-end-5 lg:row-[5] m-3 rounded-xl mx-14 md:mx-8 lg:ml-24" onChange={(event) => {
                    setMadLibStructure(event.target.value);
                }} />  

                
                <button className="text-2xl bg-white md:col-[2] lg:col-start-2 lg:col-end-5 lg:row-[6] rounded-xl border-[3px] border-black m-3 mx-8 lg:mx-28 cursor-pointer" onClick={displayMadLib}>Go!</button>
            
            </div>

            <p className="bg-white/80 rounded-2xl mx-5 lg:mx-32 xl:mx-52 p-2 mt-2">{display}</p>

        </div>
    )
}

export default MadLibComponent