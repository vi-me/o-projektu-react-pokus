import React from 'react';
import obrazekProjekt from './img/projekt.jpg';

const Projekt = () => {
  return (
    <>
      <h2>O Projektu</h2>
      <div className="container">
        <img className="picture" src={obrazekProjekt} alt="poketo práce" />
        <p className="text">
          Náš <a href="https://www.czechitas.cz/cs/">Czechitas</a> projekt je
          webová stránka, která hravou formou učí předškolní děti písmena české
          abecedy. Má fungovat na mobilech, tabletech i počítačích. Má být
          praktická i pkrásná.
        </p>
      </div>
    </>
  );
};

export default Projekt;
