import React from 'react';
import './header.css';
import 'bootstrap/dist/css/bootstrap.css';
function Header(){
    return( 
    <header className="header">
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container-fluid container">
          <a className="navbar-brand" href="#">
            <img id="logo" src="https://s3.amazonaws.com/fsociety.s/logobalank.png" alt="Logo"/>
          </a>
           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse " id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link link-light" aria-current="page" href="#preguntas">FAQ</a>
                    </li>
                    <li className="nav-item ">
                        <a className="nav-link link-light " aria-current="page" href="#contacto">Contacto</a>
                    </li>
                   <li className="nav-item ">
                        <a className="nav-link link-light " target="_blank" aria-current="page" href="http://fsocietysanzware.co">CEO</a>
                    </li>
                    
               </ul>
            </div>
        </div>
        </nav>
</header>);
}

export default Header;