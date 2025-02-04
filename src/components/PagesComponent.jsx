const PagesComponent = () => {
    return (
        <>
          <a href="/" className=""><button className="text-black text-3xl m-5 bg-amber-50 rounded-2xl border-amber-100 border-3 p-2 px-4">Back</button></a>
          <div>
            <a href="/SayHello" className='text-sky-500 m-4' >Say Hello</a> 
            <a href="/Add2Numbers" className='text-sky-500 m-4' >Add 2 Numbers</a>
            <a href="/AskingQuestions" className='text-sky-500 m-4' >Asking Qestions</a>
          </div>
          <div>
            <a href="/OddOrEven" className='text-sky-500 m-4' >Odd orEven</a> 
            <a href="/MadLib" className='text-sky-500 m-4' >MadLib</a>
            <a href="/NumberReverseIt" className='text-sky-500 m-4' >Reverse It #</a>
          </div>
          <div>
            <a href="/AlphanumericReverseIt" className='text-sky-500 m-4' >Reverse It String</a> 
            <a href="/GreaterLessThan" className='text-sky-500 m-4' >Greater or Less Than</a>
            <a href="/Magic8Ball" className='text-sky-500 m-4' >Magic 8 Ball</a>
          </div>
          <div>
            <a href="/RestaurantPicker" className='text-sky-500 m-4' >Restaurant Picker</a>
          </div>
          
          
        </>
    )
}

export default PagesComponent