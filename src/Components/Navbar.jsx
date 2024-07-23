import React from 'react'
import { Link } from 'react-router-dom';
import '../Styles/Navbar.scss'

function Navbar() {
  const abrir_cerrar_menu = () =>{
        let menu_desplegable = document.getElementById('menu');
        let boton_cerrar = document.getElementById('x');
        menu_desplegable.classList.toggle('abrir_menu');
        boton_cerrar.classList.toggle('colocar_x');
    };
    

  return (
    <nav className="navbar">
      <div className="barras">
                 <button onClick= {abrir_cerrar_menu} className='boton_menu' id='x'></button>
             </div>
      <div className="desplegable" id='menu'>
        <ul>
          <li >
            <Link to="/">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about">
              About
            </Link>
          </li>
          <li>
            <Link to="/skills">
              Skills
            </Link>
          </li>
          <li>
            <Link to="/Proyects">
              Proyects
            </Link>
          </li>
        </ul>
        </div>
    </nav>
  )
}

export default Navbar