import React from 'react';
import obrazekPoketo from './img/poketo.jpg';
import ikonkaFB from './img/icon-facebook.svg';
import ikonkaWeb from './img/icon-home.svg';
import ikonkaInsta from './img/icon-instagram.svg';
import './style.css';

const Poketo = () => {
  return (
    <>
      <h2>O Poketu</h2>
      <div className="container">
        <img className="picture" src={obrazekPoketo} alt="poketo produkty" />
        <section className="text">
          Poketo je nakladatelství pro děti. Tvoří kreativní vzdělávací
          materiály, knihy a hry pro děti. Spojuje estetiku a kvalitu.
          <div className="icon-container">
            <a href="https://poketo.cz">
              <img
                className="icon"
                src={ikonkaWeb}
                alt="ikonka stránky Poketo"
              />
            </a>

            <a href="https://www.facebook.com/poketoknihy/">
              <img className="icon" src={ikonkaFB} alt="ikonka Facebook" />
            </a>

            <a href="https://www.instagram.com/poketo_nakladatelstvi/">
              <img className="icon" src={ikonkaInsta} alt="ikonka Instagram" />
            </a>
          </div>
        </section>
      </div>
    </>
  );
};

export default Poketo;
