import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

export default function AddDestino() {

   const navigate = useNavigate();

   const [nomeDestino, setNomeDestino] = useState('');
   const [infoDestino, setInfoDestino] = useState('');


   const salvarDestino = async (e) => {
      e.preventDefault();
      console.log(nomeDestino, infoDestino);
      await axios.post("http://localhost:8080/flyaway/destinos", {
         nomeDestino: nomeDestino,
         infoDestino: infoDestino,
      }).then((result) => {
         alert("Destino adicionado.")
         navigate("/Tabela")
      }).catch((erro) => {
         console.log(erro);
      })
   }

   return (
      <div className="container">
         <div className="row">
            <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
               <h2 className="text-center m-4">Cadastre-se</h2>
               <form>
                  <div className="mb-3">
                     <label htmlFor="InputNomeDestino" className="form-label">
                        Nome do Destino
                     </label>
                     <input
                        type="text"
                        className="form-control"
                        id="InputNomeDestino"
                        value={nomeDestino}
                        onChange={(e) => setNomeDestino(e.target.value)}
                     />
                  </div>
                  <div className="mb-3">
                     <label htmlFor="inputInfoDestino" className="form-label">
                        Informações
                     </label>
                     <input
                        type="text"
                        className="form-control"
                        id="inputInfoDestino"
                        value={infoDestino}
                        onChange={(e) => setInfoDestino(e.target.value)}
                     />
                  </div>
                  <button
                     type="submit"
                     className="btn btn-outline-success"
                     onClick={salvarDestino}
                  >
                     Cadastrar
                  </button>
                  <Link to="/" type="submit" className="btn btn-outline-danger mx-2">
                     Limpar
                  </Link>
               </form>
            </div>
         </div>
      </div>
   );
}