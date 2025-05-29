import { useNavigate } from 'react-router-dom'
import { images } from '../assets/assets'
import { useState } from 'react'

const Data = () => {

    let [currentImage, setCurrentImage] = useState(0)
    const navigate = useNavigate()


    const nextImage = () => {
        setCurrentImage(prev => prev === images.length - 1 ? 0 : prev + 1);
        changeImage()
    }

    const preImage = () => {
        setCurrentImage(prev => prev === 0 ? images.length - 1 : prev - 1);
        changeImage()
    }

    const imageElement = document.getElementById("img")

    const changeImage = () => {
        imageElement.src = images[currentImage]
    }

    return (
        <div className=' w-full flex flex-col min-h-screen max-h-screen bg-gradient-to-l from-[#2575fc] to-[#6a11cb] p-12'>
            <div className='w-full mb-5  '>
                <button onClick={() => navigate("/cover")} className='md:w-20 w-16 h-10 bg-white text-[#6a11cb] font-semibold rounded-full sm:text-lg text-xs mt-[-10vh] ml-[-4vh] shadow-md hover:scale-105 transition-transform duration-300'>← Back</button>
            </div>
            <div className='md:flex hidden items-center justify-center flex-1'>
                <button onClick={() => preImage()} className='sm:w-40 w-28 h-14 sm:h-16 bg-white text-[#6a11cb] font-semibold rounded-full shadow-md hover:scale-105 transition-transform duration-300 mr-10'>← Previous</button>
                <img id='img' className='max-h-[80vh] w-[80vh] mx-5 object-contain' src={images[currentImage]} alt="" />
                <button onClick={() => nextImage()} className='sm:w-40 w-28 h-14 sm:h-16 bg-white text-[#6a11cb] font-semibold rounded-full shadow-md hover:scale-105 transition-transform duration-300 ml-10'>Next →</button>
            </div>
            <div className='flex flex-col md:hidden w-full'>
                <img id='img' className='max-h-[80vh] fixed left-[-15px] right-0 p-10 w-[85vh] mx-5 object-contain' src={images[currentImage]} alt="" />
                <div className='w-full fixed bottom-24 flex md:hidden items-center mt-8 justify-between px-10 left-0 right-0'>
                    <button onClick={() => preImage()} className='  items-center  justify-center text-lg  w-36 h-20 sm:h-16 bg-white text-[#6a11cb] font-bold rounded-full shadow-md hover:scale-105 transition-transform duration-300'>← Previous</button>
                    <button onClick={() => nextImage()} className=' items-center justify-center text-lg w-36 h-20 sm:h-16 bg-white text-[#6a11cb] font-bold rounded-full shadow-md hover:scale-105 transition-transform duration-300'>Next →</button>
                </div>
            </div>
        </div>
    )
}

export default Data