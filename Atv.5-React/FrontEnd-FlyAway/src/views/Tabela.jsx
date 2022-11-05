import React, { useState, useEffect } from 'react';
import { useNavigate, Link, useParams } from 'react-router-dom';
import axios from 'axios';


export default function Tabela() {

   const [destinos, setDestinos] = useState([]);

   const listarDestinos = async () => {
      try {
         await axios.get("http://localhost:8080/flyaway/destinos").then((response) => {
            setDestinos(response.data)
         })
      } catch (erro) {
         alert(erro.message);
      }
   };


   useEffect(() => {
      listarDestinos();
   }, [])

   const { id } = useParams();
   const deleteDestinos = async (id) => {
      try {
         await axios.delete(`http://localhost:8080/flyaway/destinos/${id}`)
            .then((response) => {
               alert('Destino excluído!')
               listarDestinos();
            })
      } catch (erro) {
         alert(erro.message)
      }
   }


   return (
      <div className="container">
         <div className="py-4">
            <table className="table table-striped border shadow">
               <thead>
                  <tr>
                     <th scope="col">#</th>
                     <th scope="col">Nome do Destino</th>
                     <th scope="col">Info destino</th>
                     <th scope="col">-</th>
                  </tr>
               </thead>
               <tbody>
                  {destinos.map((Destinos, key) => (
                     <tr>
                        <th scope="row" key={key}>{key + 1}</th>
                        <td>{destinos.nome}</td>
                        <td>{destinos.idade}</td>
                        <td>{destinos.email}</td>
                        <td>
                           <Link to={`/ViewUsuario/${destinos.id}`} className="btn btn-outline-success mx-2">
                              Ver
                           </Link>
                           <Link to={`/AddUsuario/${destinos.id}`} className="btn btn-outline-info mx-2">
                              Adicionar
                           </Link>
                           <Link to={`/EditUsuario/${destinos.id}`} className="btn btn-warning mx-2">
                              Editar
                           </Link>
                           <button className="btn btn-danger mx-2" onClick={() => deleteDestinos(destinos.id)}>
                              Excluir
                           </button>
                        </td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>
      </div>
   )
}
