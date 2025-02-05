const MadLibComponent = () => {
    return (
        <div className="bg-[url(/src/Assets/AllForOneMadlib.jpg)] bg-no-repeat bg-cover h-[100vh]">

            <a href="/pages"><button className="text-black text-2xl m-5 bg-[#F0EBD9] rounded-xl border-[#DFD9C5] border-[3px] p-2 px-8">Back</button></a>

            <div className="text-black font-inder bg-white/70 grid mx-52 mt-14 grid-cols-5 grid-rows-6 rounded-3xl mr-[40rem] pb-5">

                <p className="text-3xl flex justify-center my-5 col-span-5">Mad Lib</p>

                <p></p>

                
                <input type="text" placeholder="Noun..." className="bg-white border-1 col-start-2 col-end-4 row-[2] m-3 rounded-xl mr-24" />

                <input type="text" placeholder="Animal..." className="bg-white border-1 col-start-3 col-end-5 row-[2] m-3 rounded-xl ml-24" />

                <input type="text" placeholder="Name..." className="bg-white border-1 col-start-2 col-end-4 row-[3] m-3 rounded-xl mr-24" />

                <input type="text" placeholder="Different Name..." className="bg-white border-1 col-start-3 col-end-5 row-[3] m-3 rounded-xl ml-24" />

                <input type="text" placeholder="Emotion..." className="bg-white border-1 col-start-2 col-end-4 row-[4] m-3 rounded-xl mr-24" />

                <input type="text" placeholder="Action..." className="bg-white border-1 col-start-3 col-end-5 row-[4] m-3 rounded-xl ml-24" />

                <input type="text" placeholder="Job..." className="bg-white border-1 col-start-2 col-end-4 row-[5] m-3 rounded-xl mr-24" />

                <input type="text" placeholder="Structure" className="bg-white border-1 col-start-3 col-end-5 row-[5] m-3 rounded-xl ml-24" />  

                
                <button className="text-2xl bg-white col-start-2 col-end-5 row-[6] rounded-xl border-[3px] border-black m-3 mx-28 cursor-pointer">Go!</button>
            
            </div>

        </div>
    )
}

export default MadLibComponent