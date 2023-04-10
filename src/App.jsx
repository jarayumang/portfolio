import Header from './common/header'
import { TbChevronsDownRight } from "react-icons/tb"
import One from './assets/img/showcase/One.jpg'
import './App.css'

export default function App() {
  return (
    <div className='home'>
      <Header />
      <div className="grid-container">
        <div className='grid-item grid-item-1'>
          <div className='intro'>Building innovative websites and applications.</div>
        </div>
        <div className='grid-item grid-item-2'>
          <div className='name'>Janssen Radh Yumang</div>
        </div>
        <div className='grid-item grid-item-3'>
          <div className='images'>
          <img src={One} alt="One" className='img'/>
          </div>
        </div>
        <div className='grid-item grid-item-4'>
          <TbChevronsDownRight className='down'/>
        </div>
      </div>
    </div>
  )
}
