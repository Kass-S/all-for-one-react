import { Link } from "react-router-dom"

const PagesComponent = () => {
    return ( 
        <div className="bg-[url(/src/assets/AllForOneHome.jpg)] bg-no-repeat bg-cover bg-center md:h-[100vh]">
          
          <Link to="/"><button className="text-black text-2xl m-5 bg-[#F0EBD9] rounded-xl border-[#DFD9C5] border-[3px] p-2 px-8">Back</button></Link>

          <div className="text-black font-inder mx-5 grid grid-cols-1 grid-rows-10 gap-2 sm:grid-cols-3 sm:grid-rows-4">
            
              <Link to="/SayHello" className='text-black text-2xl py-4 my-5 px-4 mx-6 lg:mx-20 m-6 bg-[#F0EBD9] rounded-md border-[1px] border-[#4C452C] text-center align-middle' >Say Hello</Link> 

              <Link to="/Add2Numbers" className='text-black text-2xl py-4 my-5 px-4 mx-6 lg:mx-20 m-6 bg-[#F0EBD9] rounded-md border-[1px] border-[#4C452C] text-center align-middle' >Add 2 Numbers</Link>


              <Link to="/AskingQuestions" className='text-black text-2xl py-4 my-5 px-4 mx-6 lg:mx-20 m-6 bg-[#F0EBD9] rounded-md border-[1px] border-[#4C452C] text-center align-middle' >Asking Qestions</Link>
            
            
              <Link to="/OddOrEven" className='text-black text-2xl py-4 my-5 px-4 mx-6 m-6 lg:mx-20 bg-[#F0EBD9] rounded-md border-[1px] border-[#4C452C] text-center align-middle' >Odd or Even</Link> 

              <Link to="/MadLib" className='text-black text-2xl py-4 my-5 px-4 mx-6 lg:mx-20 m-6 bg-[#F0EBD9] rounded-md border-[1px] border-[#4C452C] text-center align-middle' >MadLib</Link>

              <Link to="/NumberReverseIt" className='text-black text-2xl py-4 my-5 px-4 mx-6 lg:mx-20 m-6 bg-[#F0EBD9] rounded-md border-[1px] border-[#4C452C] text-center align-middle' >Reverse It #</Link>
            
            
              <Link to="/AlphanumericReverseIt" className='text-black text-2xl py-4 my-5 px-4 mx-6 lg:mx-20 m-6 bg-[#F0EBD9] rounded-md border-[1px] border-[#4C452C] text-center align-middle' >Reverse It String</Link> 

              <Link to="/GreaterLessThan" className='text-black text-2xl py-4 my-5 px-4 mx-6 lg:mx-20 m-6 bg-[#F0EBD9] rounded-md border-[1px] border-[#4C452C] text-center align-middle' >Greater or Less Than</Link>

              <Link to="/Magic8Ball" className='text-black text-2xl py-4 my-5 px-4 mx-6 lg:mx-20 m-6 bg-[#F0EBD9] rounded-md border-[1px] border-[#4C452C] text-center align-middle' >Magic 8 Ball</Link>
            
            
              <Link to="/RestaurantPicker" className='text-black text-2xl py-4 my-5 px-4 mx-6 lg:mx-20 m-6 bg-[#F0EBD9] rounded-md border-[1px] border-[#4C452C] text-center align-middle sm:col-[2]' >Restaurant Picker</Link>
            
          </div>
        
        </div>
    )
}

export default PagesComponent