import { useNavigate } from 'react-router-dom'
import { images } from '../assets/assets'

const Data = () => {

    const navigate = useNavigate()

    let currentImage = 0

    const nextImage = () => {
        if (currentImage === images.length - 1) {
            currentImage = 0
        } else {
             currentImage++
        }
        changeImage()
    }

    const preImage = () => {
        if (currentImage > 0) {
            currentImage--
        } else {
            currentImage = images.length - 1
        }
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
            <div className='flex items-center justify-center flex-1'>
                <button onClick={() => preImage()} className='sm:w-40 w-28 h-14 sm:h-16 bg-white text-[#6a11cb] font-semibold rounded-full shadow-md hover:scale-105 transition-transform duration-300 mr-10'>← Previous</button>
                <img id='img' className='max-h-[80vh] w-[80vh] mx-5 object-contain' src={images[currentImage]} alt="" />
                <button onClick={() => nextImage()} className='sm:w-40 w-28 h-14 sm:h-16 bg-white text-[#6a11cb] font-semibold rounded-full shadow-md hover:scale-105 transition-transform duration-300 ml-10'>Next →</button>
            </div>
        </div>
    )
}

export default Data