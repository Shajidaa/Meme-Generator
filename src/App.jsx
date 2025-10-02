
import './App.css'
import InputFields from './Component/InputFields'
import Navbar from './Component/Navbar/Navbar'

function App() {
  

  return (
   
    <div className='max-w-3xl  mx-auto
     flex px-3  bg-white
     flex-col justify-center  '>
     <Navbar></Navbar>
     <InputFields></InputFields>
    </div>
    
    
   
  )
}

export default App
