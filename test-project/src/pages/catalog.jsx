import React, { Component, useState } from "react";
import woolscr from "../assets/Union 2.svg";
import searchSvg from "../assets/ion_search-outline.svg";
import user from "../assets/mdi-light_account.svg";
import favotite from "../assets/icon-park-outline_like.svg";
import shop from "../assets/free-icon-shopping-4297668 1.svg";
import more from "../assets/expand_more@3x.svg";
import logo2 from "../assets/logo-D.svg";
import logo from "../assets/logo.svg";
import visa from "../assets/visa1.svg";
import mastercard from "../assets/Group.svg";
import girls1 from "../assets/Rectangle1.png";
import girls2 from "../assets/Rectangle2.png";
import girls3 from "../assets/Rectangle3.png";
import girls4 from "../assets/Rectangle4.png";
import vector from "../assets/Vector-catalog.svg";
import like from '../assets/like-clo.svg';
import { BrowserRouter as Router, Routes, Route, Link, NavLink, } from "react-router-dom";
import like2 from '../assets/like2.svg'

class Catalog extends Component {
  
  render( )
   {

    return (
      
      <div>
        <header className="header header-catalog">
          <ul className="ul-list-header">
            <li className="li-header-list">Каталог</li>
            <li className="li-header-list">Колекції</li>
            <li className="li-header-list">Покупцям</li>
            <li className="li-header-list">Про нас</li>
          </ul>
          <div className="header-logo">
            <Link to='/'> <img src={woolscr} alt="" /></Link>
            <div className="buttons-header-lang">
              <button className="btn-lang">ua</button>
              <div>/</div>
              <button className="btn-lang">eng</button>
            </div>
            <div className="button-header-money">
              <button className="btn-money">
                uah <img className="arrow-bottom" src={more} alt="" />
              </button>
            </div>
          </div>
          <div className="svg-header-button">
            <button className="btn-header-users">
              {" "}
              <img className="svg-header-icon" src={searchSvg} alt="" />
            </button>
            <button className="btn-header-users">
              <img className="svg-header-icon" src={user} alt="" />
            </button>
            <button className="btn-header-users">
              <img className="svg-header-icon" src={favotite} alt="" />
            </button>
            <button className="btn-header-users">
              <img className="svg-header-icon" src={shop} alt="" />
            </button>
          </div>
        </header>
        <main className="catalog-main">
          <div className="catalog-nav-info">
            <p className="nav-info">Головна</p>
            <div>/</div>
            <p className="nav-info-active">Каталог</p>
          </div>
          <div className="catalog-main-info">
            <h2 className="h2-catalog-page">Каталог</h2>
          </div>
          <div className="catalog-filter-page">
            <div className="numbers-filter">
              <p className="number-catalog first">1 | </p>
              <p className="number-catalog active-number second">3 | </p>
              <p className="number-catalog six">6</p>
            </div>
            <div className="btn-filter">
              <button className="filter-catalog">
                <img src={vector} alt="" />
                FILTER
              </button>
            </div>
          </div>
          <div className="cards-catalog-menu">
            <ul className="cards-catalog">
              <li className="cards">
                <img src={girls1} alt="" />
                <img className="svg-like-2" src={like2} alt="" />
                <div className="div-cards-size">
                <p className="cards-size"> xs</p>
                 <p className="cards-size">s</p>
                 <p className="cards-size">m</p>
                <p className="cards-size">l</p>
                </div>
                <div className="color-size-catalog">
                <div className="color-black"></div>
                <div className="color-grey"></div>
                <div className="color-red"></div>
                <div className="color-green"></div>
                </div>
              </li>
              <li className="cards">
              
                <img  src={girls2} alt="" />
                <img className="svg-like" src={like} alt="" />
                <h2 className="h2-cards-catalog">Кардиган в смужку Sailor </h2>
                <h3 className="h3-cards-catalog">2 985 грн.</h3>
                <Link to='/about' className="p-card-catalog">докладніше</Link>
              </li>
              <li className="cards">
                
                <img src={girls3} alt="" />
                <img  className="svg-like" src={like} alt="" />
                <h2 className="h2-cards-catalog">Кардиган в смужку Sailor </h2>
                <h3 className="h3-cards-catalog">2 985 грн. </h3>
                <Link to='/about' className="p-card-catalog">докладніше</Link>
              </li>
              <li className="cards">
             
                <img src={girls4} alt="" />
                <img className="svg-like" src={like} alt="" />
                
                <h2 className="h2-cards-catalog">Кардиган в смужку Sailor</h2>
                <h3 className="h3-cards-catalog">2 985 грн.</h3>
                <Link to='/about' className="p-card-catalog">докладніше</Link>
              </li>
              <li className="cards">
                <img src={girls1} alt="" />
                <img className="svg-like-2" src={like2} alt="" />
                <div className="div-cards-size">
                <p className="cards-size"> xs</p>
                 <p className="cards-size">s</p>
                 <p className="cards-size">m</p>
                <p className="cards-size">l</p>
                </div>
                <div className="color-size-catalog">
                <div className="color-black"></div>
                <div className="color-grey"></div>
                <div className="color-red"></div>
                <div className="color-green"></div>
                </div>
              </li>
              <li className="cards">
              
                <img src={girls2} alt="" />
                <img className="svg-like" src={like} alt="" />
                <h2 className="h2-cards-catalog">Кардиган в смужку Sailor </h2>
                <h3 className="h3-card-catalog">2 985 грн.</h3>

                <Link to='/about' className="p-card-catalog">докладніше</Link>
              </li>
              <li className="cards">
              
                <img src={girls3} alt="" />
                <img className="svg-like" src={like} alt="" />
                <h2 className="h2-cards-catalog">Кардиган в смужку Sailor </h2>

                <h3 className="h3-card-catalog">2 985 грн.</h3>

                <Link to='/about' className="p-card-catalog">докладніше</Link>
              </li>
              <li className="cards">
              
                <img src={girls4} alt="" />
                <img className="svg-like" src={like} alt="" />
                <h2 className="h2-cards-catalog">Кардиган в смужку Sailor </h2>
                <h3 className="h3-card-catalog">2 985 грн.</h3>

                <Link to='/about' className="p-card-catalog">докладніше</Link>
              </li>
            </ul>
          </div>
        </main>

        <footer className="footer">
          <div className="footer-info">
            <ul className="links-payment-main">
              <li className="links-payment">
                <img src={logo2} alt="" />
              </li>
              <li className="links-payment">
                <img src={visa} alt="" />
              </li>
              <li className="links-payment">
                <img src={mastercard} alt="" />
              </li>
              <p className="info-dev">
                Розроблено компанією <img src={logo} alt="" />
              </p>
            </ul>
            <ul className="links-social-main">
              <h4>Ми в соціальних мережах</h4>
              <li className="links-social">Instagram</li>
              <li className="links-social">Facebook</li>
              <li className="links-social">Telegram</li>
              <p className="info-comp">
                ©2023 Всі права захищені. Інтернет магазин J.D.Wool.
              </p>
            </ul>
            <ul className="info-client">
              <h4>Інформація для клієнта</h4>
              <li className="links-about">Про нас</li>
              <li className="links-about">Контакти</li>
              <li className="links-about">Доставка і оплата </li>
              <li className="links-about">Обмін і поверння</li>
              <li className="links-about">Договір оферти</li>
              <li className="links-about">Політика конфіденційності</li>
            </ul>
          </div>
        </footer>
      </div>
    );
  }
}

export default Catalog;
