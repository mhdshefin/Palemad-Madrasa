import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';


const Home = () => {

  const navigate = useNavigate()

  return (
    <div className='object-cover w-full flex flex-col items-center justify-center bg-gradient-to-l from-[#2575fc] to-[#6a11cb] p-12 min-h-screen '>
      <h1 className="md:text-5xl text-xl font-bold top-32 fixed my-4 [text-shadow:2px_2px_4px_rgba(0,0,0,0.3)] bg-gradient-to-r from-white to-[#f9f9f9] bg-clip-text text-transparent p-2 rounded animate-fadeInafter:content-[''] after:absolute after:bottom-[-8px] after:left-1/2 after:-translate-x-1/2 after:w-[80%] after:h-[2px]  after:bg-white">
        SALAFIYYEEN MADRASA PALEMAD
      </h1>

      <button onClick={() => navigate("/cover")} className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 sm:w-56 w-44 h-16 sm:h-20  rounded-full sm:p-4 px-3  text-white sm:font-semibold sm:text-lg bg-[rgba(255,255,255,0.2)] border-[#fff] border-[0.2px] shadow-md hover:scale-105 transition-transform duration-300'>Explore magazine →</button>
    </div>
  )
}

export default Home