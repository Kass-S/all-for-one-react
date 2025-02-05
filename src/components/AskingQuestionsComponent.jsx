import { useEffect, useState } from "react";
import { AskingQuestionsFetch } from "../services/services";

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
        <div className="bg-[url(/src/Assets/AllForOneAskingQuestions.jpg)] bg-no-repeat bg-cover h-[100vh]">

            <a href="/pages" className=""><button className="text-black text-2xl m-5 bg-[#F0EBD9] rounded-xl border-[#DFD9C5] border-[3px] p-2 px-8">Back</button></a>

            <div className="font-inder bg-white/80 grid mx-52 mt-14 grid-cols-5 grid-rows-4 rounded-3xl gap-y-6 pb-10">

                <p className="text-3xl flex justify-center my-5 col-span-5">Asking Questions</p>

                <p className="flex justify-center self-center col-start-[2] col-end-[5] row-[2] " >{display}</p>

                <input type="text" placeholder="Name here..." className="bg-white border-1 col-start-2 col-end-4 row-[3] m-3 rounded-xl mr-40" onChange={(event) => {
                    setNameInput(event.target.value);
                }} />
                
                <input type="text" placeholder="Time woke up here..." className="bg-white border-1 col-start-3 col-end-5 row-[3] m-3 rounded-xl ml-40" onChange={(event) => {
                    setTimeInput(event.target.value);
                }} />

                <button className="text-2xl bg-white border-black border-[3px] col-start-2 col-end-5 row-[4] m-3 mx-52 rounded-xl cursor-pointer" onClick={displaySolution} >Go!</button>
            
            </div>
        </div>
    )
}

export default AskingQuestionsComponent