const OddOrEvenComponent = () => {

    return(
        <div className="bg-[url(/src/Assets/AllForOneOddEven.jpg)] bg-no-repeat bg-cover h-[100vh]">

            <a href="/pages" className=""><button className="text-black text-2xl m-5 bg-[#F0EBD9] rounded-xl border-[#DFD9C5] border-[3px] p-2 px-8">Back</button></a>

            <div className="font-inder bg-white/70 grid mx-52 mt-14 grid-cols-5 grid-rows-3 rounded-3xl gap-y-6 pb-10">

                <p className="text-black text-3xl flex justify-center my-5 col-span-5">Odd or Even</p>

                <p></p>

                <input type="text" placeholder="Number..." className="bg-white border-1 col-[3] row-[2] m-3 rounded-xl" />

                <button className="text-black text-2xl bg-white col-[3] row-[3] rounded-xl border-[3px] border-black m-3 cursor-pointer">Go!</button>
            
            </div>
        </div>
    )
}

export default OddOrEvenComponent