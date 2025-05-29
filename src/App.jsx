import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Cover from './pages/Cover'
import Data from './pages/Data'

const App = () => {
  return (
    <div className='w-full bg-gradient-to-l from-[#2575fc] to-[#6a11cb]'>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cover' element={<Cover/>} />
        <Route path='/data' element={<Data/>} />
      </Routes>
    </div>
  )
}

export default App