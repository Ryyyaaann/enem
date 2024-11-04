import React from "react";
import '../CSS/Nav.css'; 
import { Link } from "react-router-dom";


function Navbar(){

    return(
        <div>
            <header className="header">
        <div className="logo">
           <img src={require('../asst/desenho-do-logotipo-da-empresa-do-restaurante-de-comida-bonita-e-unica_981150-2156.avif')} alt="nome"
          />
          <span>Sabor do Brasil</span>
        </div>
        <div className="stats">
          <div className="statBox">
            <strong>9</strong>
            <span>Quantidade<br />Likes</span>
          </div>
          <div className="statBox">
            <strong>12</strong>
            <span>Quantidade<br />Dislikes</span>
          </div>
        </div>
        <Link className="nav-user" to="../JS/login.js   ">Entrar</Link>
      </header>

        </div>
    );
}

export default Navbar;