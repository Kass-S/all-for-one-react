import { Link } from "react-router-dom"

const PagesComponent = () => {
    return ( 
        <div className="bg-[url(/src/Assets/AllForOneHome.jpg)] bg-no-repeat bg-cover bg-center h-[100vh]">
          
          <Link to="/"><button className="text-black text-2xl m-5 bg-[#F0EBD9] rounded-xl border-[#DFD9C5] border-[3px] p-2 px-8">Back</button></Link>

          <div className="m-10 font-inder">
            <Link to="/SayHello" className='text-black text-2xl py-2 my-5 px-4 mx-6 m-6 bg-[#F0EBD9] rounded-md border-[1px] border-[#4C452C]' >Say Hello</Link> 
            <Link to="/Add2Numbers" className='text-black text-2xl py-2 my-5 px-4 mx-6 m-6 bg-[#F0EBD9] rounded-md border-[1px] border-[#4C452C]' >Add 2 Numbers</Link>
            <Link to="/AskingQuestions" className='text-black text-2xl py-2 my-5 px-4 mx-6 m-6 bg-[#F0EBD9] rounded-md border-[1px] border-[#4C452C]' >Asking Qestions</Link>
          </div>
          <div className="m-10 font-inder">
            <Link to="/OddOrEven" className='text-black text-2xl py-2 my-5 px-4 mx-6 m-6 bg-[#F0EBD9] rounded-md border-[1px] border-[#4C452C]' >Odd orEven</Link> 
            <Link to="/MadLib" className='text-black text-2xl py-2 my-5 px-4 mx-6 m-6 bg-[#F0EBD9] rounded-md border-[1px] border-[#4C452C]' >MadLib</Link>
            <Link to="/NumberReverseIt" className='text-black text-2xl py-2 my-5 px-4 mx-6 m-6 bg-[#F0EBD9] rounded-md border-[1px] border-[#4C452C]' >Reverse It #</Link>
          </div>
          <div className="m-10 font-inder">
            <Link to="/AlphanumericReverseIt" className='text-black text-2xl py-2 my-5 px-4 mx-6 m-6 bg-[#F0EBD9] rounded-md border-[1px] border-[#4C452C]' >Reverse It String</Link> 
            <Link to="/GreaterLessThan" className='text-black text-2xl py-2 my-5 px-4 mx-6 m-6 bg-[#F0EBD9] rounded-md border-[1px] border-[#4C452C]' >Greater or Less Than</Link>
            <Link to="/Magic8Ball" className='text-black text-2xl py-2 my-5 px-4 mx-6 m-6 bg-[#F0EBD9] rounded-md border-[1px] border-[#4C452C]' >Magic 8 Ball</Link>
          </div>
          <div className="m-10 font-inder">
            <Link to="/RestaurantPicker" className='text-black text-2xl py-2 my-5 px-4 mx-6 m-6 bg-[#F0EBD9] rounded-md border-[1px] border-[#4C452C]' >Restaurant Picker</Link>
          </div>
          
          
        </div>
    )
}

export default PagesComponent