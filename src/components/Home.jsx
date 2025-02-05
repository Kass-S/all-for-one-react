import React from 'react'

const Home = () => {
  return (
    <div className="bg-[url(/src/Assets/AllForOneHome.jpg)] bg-no-repeat bg-cover bg-center h-[100vh]">
      
      <div>
        <h1 className="text-black font-irish text-6xl sm:text-9xl flex justify-center ">All For One</h1>
      </div>
       
      <div className="flex justify-center mt-[50px]">
        <a href="/Pages" className='text-black font-inder text-3xl m-4 px-20 py-4 rounded-lg border-[2px] border-[#4C452C] bg-[#F0EBD9]'>Start</a>
      </div>

    </div>
  )
}

export default Home