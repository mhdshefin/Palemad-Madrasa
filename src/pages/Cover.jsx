import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Cover = () => {
    const navigate = useNavigate()
    return (
        <div className='md:flex min-h-screen items-center justify-center max-h-screen bg-gradient-to-l from-[#2575fc] to-[#6a11cb] p-12'>
            <button onClick={() => navigate("/")} className='sm:w-40 md:flex items-center  justify-center hidden w-28 h-14 sm:h-16 bg-white text-[#6a11cb] font-semibold rounded-full shadow-md hover:scale-105 transition-transform duration-300'>← Previous</button>
            <img className='md:h-[90vh] ml-[-10px] h-[70vh] w-[80vh] mx-5 object-contain' src={assets.img2} alt="" />
            <button onClick={() => navigate("/data")} className='sm:w-40 md:flex hidden items-center justify-center w-28 h-14 sm:h-16 bg-white text-[#6a11cb] font-semibold rounded-full shadow-md hover:scale-105 transition-transform duration-300'>Next →</button>
            <div className='w-full flex md:hidden items-center mt-8 justify-between px-3'>
                <button onClick={() => navigate("/")} className='sm:w-40  items-center  justify-center  w-28 h-14 sm:h-16 bg-white text-[#6a11cb] font-semibold rounded-full shadow-md hover:scale-105 transition-transform duration-300'>← Previous</button>
                <button onClick={() => navigate("/data")} className='sm:w-40  items-center justify-center w-28 h-14 sm:h-16 bg-white text-[#6a11cb] font-semibold rounded-full shadow-md hover:scale-105 transition-transform duration-300'>Next →</button>
            </div>
        </div>
    )
}

export default Cover