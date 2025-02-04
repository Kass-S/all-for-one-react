const Add2NumbersComponent = () => {
    return(
        <div className="bg-[url(/src/Assets/AllForOneAdd2Nums.jpg)] bg-no-repeat bg-cover bg-center h-[100vh] text-black">

            <button className="font-inder text-3xl m-5 bg-amber-50 rounded-2xl border-amber-100 border-3 p-2 px-4"><a href="/Pages" >Back</a></button>

            <div className="font-inder bg-white/70 grid mx-52 mt-14 grid-cols-5 grid-rows-6 rounded-3xl mr-[40rem]">
                <p className="text-3xl flex justify-center my-5 col-span-5">Add 2 Numbers</p>

                <p id="AddNumbersText"></p>

                <input id="AddNumbersUserField1" type="text" placeholder="1st number here..." className="bg-orange-200 border-1 col-start-2 col-end-4 row-[3] m-3 rounded-2xl mr-20"></input>

                <input id="AddNumbersUserField2" type="text" placeholder="2nd number here..." className="bg-orange-200 border-1 col-start-3 col-end-5 row-[3] m-3 rounded-2xl ml-20"></input>

                <button id="AddNumbersGoBtn" className="text-2xl bg-orange-300 border-[3px] border-black col-start-2 col-end-5 row-[5] m-3 mx-28 rounded-2xl cursor-pointer">Add!</button>

                <a id="AddNumbersAgainBtn" href="" className="hidden">Go Again</a>
                
            </div>
        </div>
    )
}

export default Add2NumbersComponent