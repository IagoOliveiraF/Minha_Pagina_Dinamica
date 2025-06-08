import React, { useState } from 'react';
import './CSS/Header.css';
import hamburguerIconPng from './Assets/hamburguerIcon.png'




function Header(props) {

  const [menuActive, setMenuActive] = useState(false)
  
  function toggleMenu(){
    setMenuActive(!menuActive)
  }

  return (
    <header className='header'>
      <div className="wrapper">

        <h1 className="header__logo">{props.name}</h1>
        <nav id='header__nav' className={menuActive ? 'active' :''}>
          <ul className='header__nav__ul'>
            <li className='header__nav__ul__li'><a href="#" className='nav-link active'>Home</a></li>
            <li className='header__nav__ul__li'><a href="#" className='nav-link active'>Soluções</a></li>
            <li className='header__nav__ul__li'><a href="#" className='nav-link active'>Produtos</a></li>
            <li className='header__nav__ul__li'><a href="#" className='nav-link active'>Sobre nós</a></li>
          </ul>
        </nav>
        <img src={hamburguerIconPng} alt="Um icone que é clicavel para expandir o menu no celular" id='menuButton' onClick={toggleMenu}></img>
        <a href="#" className="header__button">Fale Conosco</a>
      </div>
    </header>


  )


}

export default Header;