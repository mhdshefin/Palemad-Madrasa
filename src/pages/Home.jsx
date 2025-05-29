import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';


const Home = () => {

  const navigate = useNavigate()
  
  return (
    <div className='object-cover w-full flex flex-col items-center justify-center'>
        <img className='w-full h-screen blur-sm' src={assets.img1} alt="" />
        <button onClick={()=>navigate("/cover")} className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 sm:w-56 w-44 h-16 sm:h-20 bg-gradient-to-l from-[#2575fc] to-[#6a11cb] rounded-full sm:p-4 px-3  text-white sm:font-semibold sm:text-lg shadow-md hover:scale-105 transition-transform duration-300 '>Explore magazine →</button>
    </div>
  )
}

export default Home