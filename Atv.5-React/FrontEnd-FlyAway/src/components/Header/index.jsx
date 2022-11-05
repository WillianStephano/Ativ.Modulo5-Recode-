import React from "react";
import Nav from 'react-bootstrap/Nav';
import "../Header/style.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "../../views/Home";
import Destinos from "../../views/Destinos";
import Promocoes from "../../views/Promocoes";
import Contato from "../../views/Contato";
import Tabela from "../../views/Tabela";
import AddUsuario from "../../views/AddUsuario";

import logo from "../../assets/img/plane (1).svg"


function CollapsibleExample() {
   return (
      <BrowserRouter>
         <header className="cabecalho">
            <nav className="navbar navbar-light navbar-expand-md shadow-sm py-3">

               <div className="container">
                  <a className="navbar-brand d-flex align-items-center" href="index.html">
                     <span className="d-flex justify-content-center align-items-center me-3 logo">
                        <img src={logo} alt="" />
                     </span>
                     <span className="fw-bold text-black-50">FlyAway</span>
                  </a>

                  <button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navcol-1">
                     <span className="visually-hidden">Toggle navigation</span>
                     <span className="navbar-toggler-icon"></span>
                  </button>

                  <div className="collapse navbar-collapse" id="navcol-1">
                     <ul className="navbar-nav text-center ms-auto">
                        <Nav.Link as={Link} to="/Home">Inicio</Nav.Link>
                        <Nav.Link as={Link} to="/Destinos">Destinos</Nav.Link>
                        <Nav.Link as={Link} to="/Promocoes">Promoções</Nav.Link>
                        <Nav.Link as={Link} to="/Contato">Contato</Nav.Link>
                        <Nav.Link as={Link} to="/AddUsuario">
                           <button className="btn btn-sm btn-outline-secondary btn-cad" >Cadastre-se</button>
                        </Nav.Link>
                        

                     </ul>
                  </div>
               </div>
            </nav>
         </header>

         <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/Destinos" element={<Destinos />} />
            <Route path="/Promocoes" element={<Promocoes />} />
            <Route path="/Contato" element={<Contato />} />
            <Route path="/Tabela" element={<Tabela />} />
            <Route path="/AddUsuario" element={<AddUsuario />} />
            
            <Route path="*" element={<h1>Página Não Encontrada</h1>} />
         </Routes>
      </BrowserRouter>
   );
}

export default CollapsibleExample;