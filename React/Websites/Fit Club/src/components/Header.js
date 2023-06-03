import React from 'react'
import Logo from '../assets/logo.png'
import Bars from '../assets/bars.png'
import { useState } from 'react'
import { Link } from 'react-scroll'

const Header = () => {

  const mobile = window.innerWidth <= 738 ? true : false
  const [menu, setMenu] = useState(false)

  return (
    <header className='header'>
      <img className='logo' src={Logo} alt="Gym" />
      {(menu === false && mobile === true) ? (
        <div className='navbar__div'><img className='navbar' src={Bars} alt="navbar" onClick={() => setMenu(true)} /></div>
      ) : <nav>
      <ul className='header__menu'>
        <li>
          <Link
          onClick={() => setMenu(false)}
          to='home'
          span={true}
          smooth={true}
          >Home</Link>
        </li>
        <li>
          <Link
          onClick={() => setMenu(false)}
          to='programs'
          span={true}
          smooth={true}
          >Programs</Link>
        </li>
        <li>
          <Link
          onClick={() => setMenu(false)}
          to='reasons'
          span={true}
          smooth={true}
          >Why us</Link>
        </li>
        <li>
          <Link
          onClick={() => setMenu(false)}
          to='plans'
          span={true}
          smooth={true}
          >Plans</Link>
        </li>
        <li>
          <Link 
          onClick={() => setMenu(false)}
          to='testiomonials'
          span={true}
          smooth={true}
          >Testimonials</Link>
        </li>
      </ul>
    </nav>}
      
    </header>
  )
}


export default Header