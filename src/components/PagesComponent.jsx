const PagesComponent = () => {
    return ( 
        <div className="bg-[url(/src/Assets/AllForOneHome.jpg)] bg-no-repeat bg-cover bg-center h-[100vh]">
          <a href="/" className=""><button className="text-black font-inder text-3xl m-5 bg-[#F0EBD9] rounded-2xl border-[#DFD9C5] border-[3px] p-2 px-4">Back</button></a>

          <div className="m-10 font-inder">
            <a href="/SayHello" className='text-black py-2 my-5 px-4 mx-6 m-6 bg-[#F0EBD9] rounded-md border-[1px] border-[#4C452C]' >Say Hello</a> 
            <a href="/Add2Numbers" className='text-black py-2 my-5 px-4 mx-6 m-6 bg-[#F0EBD9] rounded-md border-[1px] border-[#4C452C]' >Add 2 Numbers</a>
            <a href="/AskingQuestions" className='text-black py-2 my-5 px-4 mx-6 m-6 bg-[#F0EBD9] rounded-md border-[1px] border-[#4C452C]' >Asking Qestions</a>
          </div>
          <div className="m-10 font-inder">
            <a href="/OddOrEven" className='text-black py-2 my-5 px-4 mx-6 m-6 bg-[#F0EBD9] rounded-md border-[1px] border-[#4C452C]' >Odd orEven</a> 
            <a href="/MadLib" className='text-black py-2 my-5 px-4 mx-6 m-6 bg-[#F0EBD9] rounded-md border-[1px] border-[#4C452C]' >MadLib</a>
            <a href="/NumberReverseIt" className='text-black py-2 my-5 px-4 mx-6 m-6 bg-[#F0EBD9] rounded-md border-[1px] border-[#4C452C]' >Reverse It #</a>
          </div>
          <div className="m-10 font-inder">
            <a href="/AlphanumericReverseIt" className='text-black py-2 my-5 px-4 mx-6 m-6 bg-[#F0EBD9] rounded-md border-[1px] border-[#4C452C]' >Reverse It String</a> 
            <a href="/GreaterLessThan" className='text-black py-2 my-5 px-4 mx-6 m-6 bg-[#F0EBD9] rounded-md border-[1px] border-[#4C452C]' >Greater or Less Than</a>
            <a href="/Magic8Ball" className='text-black py-2 my-5 px-4 mx-6 m-6 bg-[#F0EBD9] rounded-md border-[1px] border-[#4C452C]' >Magic 8 Ball</a>
          </div>
          <div className="m-10 font-inder">
            <a href="/RestaurantPicker" className='text-black py-2 my-5 px-4 mx-6 m-6 bg-[#F0EBD9] rounded-md border-[1px] border-[#4C452C]' >Restaurant Picker</a>
          </div>
          
          
        </div>
    )
}

export default PagesComponent