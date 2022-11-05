import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Nav from 'react-bootstrap/Nav';

export default function AddUsuario() {

   const [nome, setNome] = useState('');
   const [idade, setIdade] = useState('');
   const [email, setEmail] = useState('');
   const [senha, setSenha] = useState('');


   const salvar = async (e) => {
      e.preventDefault();
      console.log(nome, idade, email, senha);
      await axios.post("http://localhost:8080/flyaway/usuarios", {
         nome: nome,
         idade: idade,
         email: email,
         senha: senha
      }).then((result) => {
         alert("Usuário adicionado.")
      }).catch((erro) => {
         console.log(erro);
      })
   }

   return (

      <div className="container">
         <div className="row">
            <div className="col-md-8 mx-auto border rounded p-4 mt-2 shadow">
               <h2 className="text-center m-4">Registro de Usuário</h2>
               <form>
                  <div className="mb-3">
                     <label for="nome" className="form-label">Nome</label>
                     <input
                        type="text"
                        className="form-control"
                        id="nome"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)} />
                  </div>
                  <div className="mb-3">
                     <label for="idade" className="form-label">Idade</label>
                     <input type="text" className="form-control" id="idade"
                        value={idade}
                        onChange={(e) => setIdade(e.target.value)} />
                  </div>
                  <div className="mb-3">
                     <label for="email" className="form-label">Email</label>
                     <input type="email" className="form-control" id="email" aria-describedby="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                  </div>

                  <div className="mb-3">
                     <label for="senha" className="form-label">Senha</label>
                     <input type="password" className="form-control" id="senha" aria-describedby="senha"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)} />
                  </div>
                  <button
                     type="submit"
                     className="btn btn-outline-success w-100 mb-2"
                     onClick={salvar}
                  >
                     Cadastre-se
                  </button>
                  <Nav.Link as={Link} to="/Tabela">
                     <button class="btn btn-sm btn-outline-secondary btn-cad w-100">Listar Usuarios</button>
                  </Nav.Link>
               </form>
            </div>
         </div>
      </div>
   )
}
