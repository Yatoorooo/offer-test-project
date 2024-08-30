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
import like from "../assets/like-clo.svg";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import like2 from "../assets/like2.svg";
import React, { Component } from "react";
import girls5 from "../assets/rectangle28.png";

class About extends Component {
  render() {
    return (
      <div>
        <header className="header header-catalog">
          <ul className="ul-list-header">
            <Link to="/catalog" className="li-header-list">
              Каталог
            </Link>
            <li className="li-header-list">Колекції</li>
            <li className="li-header-list">Покупцям</li>
            <li className="li-header-list">Про нас</li>
          </ul>
          <div className="header-logo">
            <Link to="/">
              {" "}
              <img src={woolscr} alt="" />
            </Link>
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
          <div className="about-sale">
            <div className="img-ale">
              <img className="img-catalog-main" src={girls5} alt="" />
              <img className="img-grils-about first-girl" src={girls5} alt="" />
              <img className="img-grils-about two-girl" src={girls4} alt="" />
              <img className="img-grils-about three-girl" src={girls1} alt="" />
              <img className="img-grils-about four-girl" src={girls2} alt="" />
            </div>
            <div className="info-sale">
              <h1 className="h1-sale-info">Кардиган в смужку Sailor</h1>
              <div className="article-info">
                <p className="p-info-sale-a">Артикул:</p>
                <p className="p-info-sale-n">9874937</p>
              </div>
              <div className="money-info">
                <p className="p-info-sale-p">Ціна:</p>
                <p className="p-info-sale-m1">2 985 грн.</p>
                <p className="p-info-sale-m2">2 985 грн.</p>
              </div>
              <div className="size-info">
                <p className="p-info-sale">Розмір:</p>
                <p className="p-info-sale">xs</p>
                <p className="p-info-sale">s</p>
                <p className="p-info-sale">m</p>
                <p className="p-info-sale">l</p>
              </div>
              <div className="color-info-catalog">
                <p className="o-info-sale">Колір:</p>
                <div className="color-info-black"></div>
                <div className="color-info-white"></div>
                <div className="color-info"></div>
                <div className="color-info-grey"></div>
              </div>
              <div className="btn-sale-favorite">
                <button className="btn-sale">додати до кошика</button>
                <button className="btn-sale favorite">
                  додати в обране <img src={like} alt="" />
                </button>
              </div>
              <ul className="ul-list-more">
                <li className="li-about-prod active-li ">Таблиця розмірів</li>
                <li className="li-about-prod ">Опис</li>
                <li className="li-about-prod ">Склад і догляд</li>
                <li className="li-about-prod ">Характеристики</li>
              </ul>
              <ul className="ul-list-size">
                <li className="li-user-sale">
                  <h4 className="h4-sale">Розмір/Параметри</h4>
                  <p className="p-user-info">XS</p>
                  <p className="p-user-info">XS-S</p>
                  <p className="p-user-info">S</p>
                  <p className="p-user-info">M</p>
                  <p className="p-user-info">M-L</p>
                  <p className="p-user-info">L</p>
                </li>
                <li className="li-user-sale">
                  <h4 className="h4-sale">Груди</h4>
                  <p className="p-user-info">82-85</p>
                  <p className="p-user-info">82-89</p>
                  <p className="p-user-info">86-89</p>
                  <p className="p-user-info">90-93</p>
                  <p className="p-user-info">90-97</p>
                  <p className="p-user-info">94-97</p>
                </li>
                <li className="li-user-sale">
                  <h4 className="h4-sale">Талія</h4>
                  <p className="p-user-info">60-67</p>
                  <p className="p-user-info">60-72</p>
                  <p className="p-user-info">68-72</p>
                  <p className="p-user-info">73-77</p>
                  <p className="p-user-info">73-82</p>
                  <p className="p-user-info">78-82</p>
                </li>
                <li className="li-user-sale">
                  <h4 className="h4-sale">Стегна</h4>
                  <p className="p-user-info">90-94</p>
                  <p className="p-user-info">90-98</p>
                  <p className="p-user-info">95-98</p>
                  <p className="p-user-info">99-102</p>
                  <p className="p-user-info">99-106</p>
                  <p className="p-user-info">103-106</p>
                </li>
              </ul>
            </div>
          </div>

          <div className="cards-catalog-menu">
            <h1 className="h1-catalog">Вам може сподобатись</h1>
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
                <img src={girls2} alt="" />
                <img className="svg-like" src={like} alt="" />
                <h2 className="h2-cards-catalog">Кардиган в смужку Sailor </h2>
                <h3 className="h3-cards-catalog">2 985 грн.</h3>
                <Link to="/about" className="p-card-catalog">
                  докладніше
                </Link>
              </li>
              <li className="cards">
                <img src={girls3} alt="" />
                <img className="svg-like" src={like} alt="" />
                <h2 className="h2-cards-catalog">Кардиган в смужку Sailor </h2>
                <h3 className="h3-cards-catalog">2 985 грн. </h3>
                <Link to="/about" className="p-card-catalog">
                  докладніше
                </Link>
              </li>
              <li className="cards">
                <img src={girls4} alt="" />
                <img className="svg-like" src={like} alt="" />

                <h2 className="h2-cards-catalog">Кардиган в смужку Sailor</h2>
                <h3 className="h3-cards-catalog">2 985 грн.</h3>
                <Link to="/about" className="p-card-catalog">
                  докладніше
                </Link>
              </li>
            </ul>
            <h1 className="h1-catalog">Ви раніше переглядали</h1>
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
                <img src={girls2} alt="" />
                <img className="svg-like" src={like} alt="" />
                <h2 className="h2-cards-catalog">Кардиган в смужку Sailor </h2>
                <h3 className="h3-card-catalog">2 985 грн.</h3>

                <Link to="/about" className="p-card-catalog">
                  докладніше
                </Link>
              </li>
              <li className="cards">
                <img src={girls3} alt="" />
                <img className="svg-like" src={like} alt="" />
                <h2 className="h2-cards-catalog">Кардиган в смужку Sailor </h2>

                <h3 className="h3-card-catalog">2 985 грн.</h3>

                <Link to="/about" className="p-card-catalog">
                  докладніше
                </Link>
              </li>
              <li className="cards">
                <img src={girls4} alt="" />
                <img className="svg-like" src={like} alt="" />
                <h2 className="h2-cards-catalog">Кардиган в смужку Sailor </h2>
                <h3 className="h3-card-catalog">2 985 грн.</h3>

                <Link to="/about" className="p-card-catalog">
                  докладніше
                </Link>
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

export default About;
