

import './App.css'
import FirstPart from './components/FirstPart'

import Changer from './components/Changer'
import Info from './components/Info'
import Both from './components/Both'
import Contact from './components/Contact'
import { useSelector } from "react-redux";
import AllProject from './components/AllProject'
import ModeChanger from './components/ModeChanger'

function App() {

  const { counterVal } = useSelector(store => store.counter)

  return (
    <div className='bg-gray-800  '>
      <div className=' max-w-7xl  mx-auto'>

        <FirstPart />
        <Changer />
        <div className={`${counterVal ? 'hidden' : 'block'}`}>
          <Info />
          <hr className='sm:w-full w-[90%] mx-auto mt-8' />
          <Both />
        </div>

        <div className={`${counterVal ? 'block' : 'hidden'}`}>
          <AllProject />
        </div>
        <hr className={`w-[90%] sm:w-full mx-auto ${counterVal ? 'mt-8' : 'mt-14'}`} />
        <Contact />
      </div>

    </div>
  )
}

export default App
