import { Link } from "react-router-dom"
import { RestaurantPickerFetch } from "../services/services"
import { useState, useEffect } from "react"

const RestaurantPickerComponent = () => {
    const [restaurant, setRestauant] = useState("");
    const [display, setDisplay] = useState("");

    const fetchRestaurant = async () => {
        setDisplay(await RestaurantPickerFetch(restaurant));
    }

    useEffect(() => {
        fetchRestaurant();
        setRestauant("");
    }, [restaurant])

    return (
        <div className="bg-[url(/src/assets/AllForOneRestaurant.jpg)] bg-no-repeat bg-cover bg-center h-[100vh]">

           <Link to="/pages"><button className="text-black text-2xl m-5 bg-[#F0EBD9] rounded-xl border-[#DFD9C5] border-[3px] p-2 px-8">Back</button></Link>

            <div className="font-inder bg-[#65C06B]/90 grid mx-52 mt-10 grid-cols-3 grid-rows-7 rounded-3xl mr-[40rem]">

                <p className="text-3xl flex justify-center my-5 col-span-5">Restaurant Picker</p>

                <p className="flex justify-center align-middle text-2xl col-start-[1] col-end-[4] row-start-[2] row-end-[4] mx-5">{display}</p>

                <button className="text-2xl bg-white border-[3px] border-black col-[2] row-[4] rounded-xl m-3 cursor-pointer" onClick={() => setRestauant("fast food")} >Fast Food</button>

                <button className="text-2xl bg-white border-[3px] border-black col-[2] row-[5] rounded-xl m-3 cursor-pointer" onClick={() => setRestauant("pizza")}>Pizza</button>

                <button className="text-2xl bg-white border-[3px] border-black col-[2] row-[6] rounded-xl m-3 cursor-pointer" onClick={() => setRestauant("food truck")}>Food Truck</button> 

            </div>
        </div>
        
    )
}

export default RestaurantPickerComponent