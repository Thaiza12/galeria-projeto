import React from 'react';
import gato1 from './Gatos/gato1.jpg';
import gato2 from './Gatos/gato2.jpg';
import gato3 from './Gatos/gato3.jpg';
import gato4 from './Gatos/gato4.jpg';
import gato5 from './Gatos/gato5.jpg';
import gato6 from './Gatos/gato6.jpg';
import './index.css';

function App() {
  return (  
<div className="imagem">
  <div className="fundo">
    <div className="grid-container">
      <div className="grid-iten">
        <div className="zoom">
         {/*} <img src="" alt="gato1" />*/}
          <img src={gato1} alt="gato1" /> 
        </div>
        <div className="legenda">
          <h2>Adote a Olenka</h2>

            Fêmea 
            <p> Sem raça definida </p>
            <p>1 Ano</p>
            No abrigo desde: 05/11/2020
        </div>
        <br />
        <div className="button">
          <form action="./Galeria/conheça minha história/histórias.html/olenka.html">
            <input type="submit" defaultValue="Conheça minha história" />
            <br />
            <br />
            <input type="button" defaultValue="Quero adotar" />
          </form>
        </div>
      </div>
      <div className="grid-iten">
        <div className="zoom">
         {/*} <img src="./Galeria/Gatos/Gato 2.jpg" alt />*/}
         <img src={gato2} alt="gato2" /> 
        </div>
        <div className="legenda">
          <h2>Adote a Deyse</h2>
          <p>
            Fêmea
            <br />
            Sem raça definida
            <br />3 Anos
            <br />
            No abrigo desde: 03/01/2021
          </p>
        </div>
        <br /> 
        <div className="button">
          <form action="">
            <input type="submit" defaultValue="Conheça minha história" />
            <br />
            <br />
            <input type="button" defaultValue="Quero adotar" />
          </form>
        </div>
      </div>
      <div className="grid-iten">
        <div className="zoom">
          {/*<img src="./Galeria/Gatos/gato 3.jpg" alt />*/}
          <img src={gato3} alt="gato3" /> 
        </div>
        <div className="legenda">
          <h2>Adote a Sofia</h2>
          <p>
            Fêmea
            <br />
            Sem raça definida
            <br />6 Meses
            <br />
            No abrigo desde: 01/06/2021
          </p>
        </div>
        <br />
        <div className="button">
          <form action="./Galeria/conheça minha história/histórias.html/sofia.html">
            <input type="submit" defaultValue="Conheça minha história" />
            <br />
            <br />
            <input type="button" defaultValue="Quero adotar" />
          </form>
        </div>
      </div>
      <div className="grid-iten">
        <div className="zoom">
          {/*<img src="./Galeria/Gatos/gato001.jpg" alt />*/}
          <img src={gato4} alt="gato3" /> 
        </div>
        <div className="legenda">
          <h2>Adote o Pantera</h2>
          <p>
            Macho
            <br />
            Sem raça definida
            <br />2 Anos
            <br />
            No abrigo desde: 11/08/2019
          </p>
        </div>
        <br />
        <div className="button">
          <form action="./Galeria/conheça minha história/histórias.html/pantera.html">
            <input type="submit" defaultValue="Conheça minha história" />
            <br />
            <br />
            <input type="button" defaultValue="Quero adotar" />
          </form>
        </div>
      </div>
      <div className="grid-iten">
        <div className="zoom">
        {/*}  <img src="./Galeria/Gatos/gato 5.jpg" alt />*/}
        <img src={gato5}  alt="gato5" /> 
        </div>
        <div className="legenda">
          <h2>Adote o Feliz</h2>
          <p>
            Macho
            <br />
            Sem raça definida
            <br />8 Meses
            <br />
            No abrigo desde: 17/03/2021
          </p>
        </div>
        <br />
        <div className="button">
          <form action="./Galeria/conheça minha história/histórias.html/feliz.html">
            <input type="submit" defaultValue="Conheça minha história" />
            <br />
            <br />
            <input type="button" defaultValue="Quero adotar" />
          </form>
        </div>
      </div>
      <div className="grid-iten" id>
        <div className="zoom">
          {/*<img src="./Galeria/Gatos/gato 6.jpg" alt />*/}
          <img src={gato6} alt="gato6" /> 
        </div>
        <div className="legenda">
          <h2>Adote o Pitter</h2>
          <p>
            Macho
            <br />
            Sem raça definida
            <br />4 Anos
            <br />
            No abrigo desde: 04/03/2021
          </p>
        </div>
        <div className="button">
          <form action="./Galeria/conheça minha história/histórias.html/pitter.html">
            <input type="submit" defaultValue="Conheça minha história" />
            <br />
            <br />
            <input type="button" defaultValue="Quero adotar" />
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
     
    

  );
}

export default App;
