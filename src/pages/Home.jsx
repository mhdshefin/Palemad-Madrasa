import { useNavigate } from 'react-router-dom';


const Home = () => {

  const navigate = useNavigate()

  return (
    <div className='object-cover w-full flex flex-col items-center justify-center bg-gradient-to-l from-[#2575fc] to-[#6a11cb] p-12 min-h-screen '>
      <div className='w-full flex items-center justify-center fixed top-0'>
        <h1 className="md:text-5xl text-xl font-bold top-32 my-4 [text-shadow:2px_2px_4px_rgba(0,0,0,0.3)] bg-gradient-to-r from-white to-[#f9f9f9] bg-clip-text text-transparent p-2 rounded animate-fadeIn relative after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-[1.5px] after:bg-gradient-to-r after:from-transparent after:via-yellow-400 after:to-transparent after:transform after:scale-x-75">
          SALAFIYYEEN MADRASA PALEMAD
        </h1>
      </div>
      <button onClick={() => navigate("/cover")} className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 sm:w-72 w-56 h-16 sm:h-20  rounded-full sm:p-4 px-3  text-white sm:font-semibold sm:text-lg text-sm bg-[rgba(255,255,255,0.2)] border-[#fff] border-[0.2px] shadow-md hover:scale-105 transition-transform duration-300'>EXPLORE OUR MAGAZINE →</button>
      <div className='w-full fixed bottom-0 right-0 px-8 pb-2'>
        <div className='flex flex-col items-end'>
          <div className='w-full flex items-end justify-end sm:px-10 px-6'>
          <h4 className='text-[#ffffffb3] sm:text-xs text-[12px] font-medium tracking-widest uppercase mb-1'>CREATED BY</h4>
          </div>
          <div className='flex sm:gap-3 gap-1 items-center'>
            <a className='text-[#2732ac] sm:text-sm text-xs font-bold hover:text-[#facc15] transition-colors duration-200' href="https://www.instagram.com/hanan_p_t_?igsh=MTgwd3ppOTF4cG1udA==" target="_blank" rel="noopener noreferrer" >Hanan PT </a>
            <p className='text-[#fff] font-medium'>&</p>
            <a className='text-[#2732ac] sm:text-sm text-xs font-bold hover:text-[#facc15] transition-colors duration-200' href="https://www.instagram.com/__shefin._4?igsh=bXprdjRtY25xZTU2" target="_blank" rel="noopener noreferrer" > Shefin PT </a>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Home