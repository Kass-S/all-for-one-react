import { useEffect, useState } from "react";
import { AskingQuestionsFetch } from "../services/services";
import { Link } from "react-router-dom";

const AskingQuestionsComponent = () => {
    const [nameInput, setNameInput] = useState('');
    const [timeInput, setTimeInput] = useState('');
    const [solution, setSolution] = useState('');
    const [display, setDisplay] = useState('');

    const fetchQuestions = async () => {
        setSolution(await AskingQuestionsFetch(nameInput, timeInput));
    }

    const displaySolution = async () => {
        fetchQuestions()    
    }

    useEffect(() => {
        setDisplay(solution);
    }, [solution])

    return(
        <div className="bg-[url(/src/assets/AllForOneAskingQuestions.jpg)] bg-no-repeat bg-cover h-[100vh]">

            <Link to="/pages"><button className="text-black text-2xl m-5 bg-[#F0EBD9] rounded-xl border-[#DFD9C5] border-[3px] p-2 px-8">Back</button></Link>

            <div className="font-inder bg-white/80 grid mx-10 lg:mx-52 mt-10 grid-cols-1 grid-rows-4 sm:grid-cols-3  lg:grid-cols-5 lg:grid-rows-4 rounded-3xl lg:gap-y-6 pb-10">

                <p className="text-3xl flex justify-center my-5 sm:col-span-3 lg:col-span-5">Asking Questions</p>

                <p className="flex justify-center self-center sm:col-span-3 lg:col-start-[2] lg:col-end-[5] row-[2] mx-2" >{display}</p>

                <input type="text" placeholder="Name here..." className="bg-white border-1 lg:col-start-2 lg:col-end-4 row-[3] m-3 mx-10 lg:mx-0 rounded-xl lg:mr-40" onChange={(event) => {
                    setNameInput(event.target.value);
                }} />
                
                <input type="text" placeholder="Time woke up here..." className="bg-white border-1 lg:col-start-3 lg:col-end-5 sm:col-[3] sm:row-[3] m-3 mx-10 lg:mx-0 rounded-xl lg:ml-40" onChange={(event) => {
                    setTimeInput(event.target.value);
                }} />

                <button className="text-2xl bg-white border-black border-[3px] lg:col-start-2 lg:col-end-5 sm:row-[4] sm:col-[2] m-3 mx-10 xl:mx-52 rounded-xl cursor-pointer" onClick={displaySolution} >Go!</button>
            
            </div>
        </div>
    )
}

export default AskingQuestionsComponent