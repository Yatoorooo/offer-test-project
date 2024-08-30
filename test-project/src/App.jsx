import { useRef, useState, useEffect, React} from 'react'
import woolscr from './assets/Union 2.svg'
import searchSvg from './assets/ion_search-outline.svg'
import user from './assets/mdi-light_account.svg'
import favotite from './assets/icon-park-outline_like.svg'
import shop from './assets/free-icon-shopping-4297668 1.svg'
import more from './assets/expand_more@3x.svg'
import mainGirl from '../src/assets/IMG_30221.png'
import arrow1 from '../src/assets/arrow 1.svg'
import logo2 from '../src/assets/logo-D.svg'
import logo from '../src/assets/logo.svg'
import visa from '../src/assets/visa1.svg'
import mastercard from '../src/assets/Group.svg'
import Catalog from './pages/catalog';
import { BrowserRouter as Router, Routes, Route, Link, NavLink, } from "react-router-dom";
import './App.css'


 




function App() {
  let imageConteinerRef = useRef(null);
  const images = [mainGirl, mainGirl, mainGirl];
  const prev = () => imageConteinerRef.current.scrollLeft -= 1300;
  const next = () => imageConteinerRef.current.scrollLeft += 1300;
  return (
    <>
   
      <header className='header'>
        <ul className='ul-list-header'>
          <li className='li-header-list'>Каталог</li>
          <li className='li-header-list'>Колекції</li>
          <li className='li-header-list'>Покупцям</li>
          <li className='li-header-list'>Про нас</li>
        </ul>
      <div className = 'header-logo'>
        <img src={woolscr} alt="" />
        <div className='buttons-header-lang'>
        <button className='btn-lang'>ua</button>
        <div>/</div>
        <button className='btn-lang'>eng</button>
      </div>
      <div className='button-header-money'>
       <button className='btn-money'>uah <img className='arrow-bottom' src={more} alt="" /></button>
      </div>
        </div>
        <div className='svg-header-button'>
        <button className='btn-header-users'> <img className='svg-header-icon' src={searchSvg} alt="" /></button> 
        <button className='btn-header-users'><img className='svg-header-icon' src={user} alt="" /></button> 
        <button className='btn-header-users'><img className='svg-header-icon' src={favotite} alt="" /></button> 
        <button className='btn-header-users'><img className='svg-header-icon' src={shop} alt="" /></button> 
      

        </div>
      </header>
     
      <main className='main-menu'>
        
       <div className='content'>
        <div  className='btn-slider-prev' onClick={next}></div>
        <div className='slide-panel' ref={imageConteinerRef}>
          {images.map(image => { return (<img src={image} />)})}
        </div>
        
        <div  className='btn-slider-next' onClick={prev}></div>
       
        <Link to='/catalog' className='btn-more'  >
          
          каталог
          
          <img className='svg-btn-more' src={arrow1} alt="" /> </Link>
        
      
        </div>
        
        
      </main>
      
      <footer className='footer'>
        <div className='footer-info'>
          <ul className='links-payment-main'>
            <li className='links-payment'><img src={logo2} alt="" /></li>
            <li className='links-payment'><img src={visa} alt="" /></li>
            <li className='links-payment'><img src={mastercard} alt="" /></li>
            <p className='info-dev' >Розроблено компанією <img src={logo} alt="" /></p>
          </ul>
          <ul className='links-social-main'>
            <h4>Ми в соціальних мережах</h4>
            <li className='links-social'>Instagram</li>
            <li className='links-social'>Facebook</li>
            <li className='links-social'>Telegram</li>
            <p className='info-comp'>©2023 Всі права захищені. Інтернет магазин J.D.Wool.</p>
          </ul>
          <ul className='info-client'>
            <h4>Інформація для клієнта</h4>
            <li className='links-about'>Про нас</li>
            <li className='links-about'>Контакти</li>
            <li className='links-about'>Доставка і оплата </li>
            <li className='links-about'>Обмін і поверння</li>
            <li className='links-about'>Договір оферти</li>
            <li className='links-about'>Політика конфіденційності</li>
          </ul>
        </div>
      </footer>
      
    </>
  )
}

export default App
