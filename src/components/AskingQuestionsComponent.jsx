const AskingQuestionsComponent = () => {

    return(
        <div className="bg-[url(/src/Assets/AllForOneAskingQuestions.jpg)] bg-no-repeat bg-cover h-[100vh]">

            <a href="/pages" className=""><button className="text-black text-2xl m-5 bg-[#F0EBD9] rounded-xl border-[#DFD9C5] border-[3px] p-2 px-8">Back</button></a>

            <div className="font-inder bg-white/70 grid mx-52 mt-14 grid-cols-5 grid-rows-3 rounded-3xl gap-y-6 pb-10">

                <p className="text-3xl flex justify-center my-5 col-span-5">Asking Questions</p>

                <p ></p>

                <input type="text" placeholder="Name here..." className="bg-white border-1 col-start-2 col-end-4 row-[2] m-3 rounded-xl mr-40" />
                
                <input type="text" placeholder="Time woke up here..." className="bg-white border-1 col-start-3 col-end-5 row-[2] m-3 rounded-xl ml-40" />

                <button className="text-2xl bg-white border-black border-[3px] col-start-2 col-end-5 row-[3] m-3 mx-52 rounded-xl cursor-pointer">Go!</button>
            
            </div>
        </div>
    )
}

export default AskingQuestionsComponent