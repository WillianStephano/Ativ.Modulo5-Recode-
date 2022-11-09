import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

export default function AddDestino() {


   const [nome_destino, setNome_destino] = useState('');
   const [info_destino, setInfo_destino] = useState('');


   const salvarDestino = async (e) => {
      e.preventDefault();
      console.log(nome_destino, info_destino);
      await axios.post("http://localhost:8080/flyaway/destinos", {
         nome_destino: nome_destino,
         info_destino: info_destino,
      }).then((result) => {
         alert("Destino adicionado.")
        
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
                        value={nome_destino}
                        onChange={(e) => setNome_destino(e.target.value)}
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
                        value={info_destino}
                        onChange={(e) => setInfo_destino(e.target.value)}
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