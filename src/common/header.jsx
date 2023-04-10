import logo from '../assets/svg/logo.png'

import './header.css'

export default function header() {
  return (
    <div className='header'>
      <div className='header-logo'>
        <img src={logo} alt="Logo" className='logo'/>
      </div>
      <div className='header-link'>
        <div className=''>About</div>
        <div className=''>Work</div>
        <div className=''>Skill</div>
        <div className=''>Career</div>
        <div className=''>Contact</div>
      </div>
    </div>
  )
}
