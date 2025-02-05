const RestaurantPickerComponent = () => {
    return (
        <div className="bg-[url(/src/Assets/AllForOneRestaurant.jpg)] bg-no-repeat bg-cover bg-center h-[100vh]">

            <a href="/pages" className=""><button className="text-black text-2xl m-5 bg-[#F0EBD9] rounded-xl border-[#DFD9C5] border-[3px] p-2 px-8">Back</button></a>

            <div className="font-inder bg-[#65C06B]/90 grid mx-52 mt-10 grid-cols53 grid-rows-7 rounded-3xl mr-[40rem]">

                <p className="text-3xl flex justify-center my-5 col-span-5">Restaurant Picker</p>

                <p className="flex justify-center align-middle text-2xl col-[3] row-[3]">Choose a Catagory</p>

                <button className="text-2xl bg-white border-[3px] border-black col-[3] row-[4] rounded-xl m-3 cursor-pointer">Fast Food</button>

                <button className="text-2xl bg-white border-[3px] border-black col-[3] row-[5] rounded-xl m-3 cursor-pointer">Pizza</button>

                <button className="text-2xl bg-white border-[3px] border-black col-[3] row-[6] rounded-xl m-3 cursor-pointer">Food Truck</button> 

            </div>
        </div>
        
    )
}

export default RestaurantPickerComponent