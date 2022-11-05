import React, {useEffect ,useState} from 'react';
import { useNavigate, Link, useParams} from 'react-router-dom';
import axios from 'axios';

export default function EditUsuario() {
  
    const navigate = useNavigate();
    const {id} = useParams();

    const [nome, setNome] = useState('');
    const [idade, setIdade] = useState('');
    const [email, setEmail] = useState('');
  
  
    const editar = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:8080/usuarios/${id}`, {
            nome: nome,
            idade: idade,
            email: email
        }).then((result) => {
            alert("Usuário atualizado.")
            navigate("/Tabela")
        }).catch((erro) => {
            console.log(erro);
        })
    }

    useEffect(() => {
        carregarUsuario();

    }, [])

    const carregarUsuario = async () => {
        const result = await axios.get(`http://localhost:8080/usuarios/${id}`)
        setNome(result.data.nome)
        setIdade(result.data.idade)
        setEmail(result.data.email)
    }

    return (

    <div className="container">
        <div className="row">
            <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                <h2 className="text-center m-4">Atualizar Usuário</h2>
                <form>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Nome</label>
                        <input type="text" className="form-control" id="exampleInputNome1" 
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Idade</label>
                        <input type="text" className="form-control" id="exampleInputIdade"
                         value={idade}
                         onChange={(e) => setIdade(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                         value={email}
                         onChange={(e) => setEmail(e.target.value)}/>

                    </div>
                    <button type="submit" className="btn btn-outline-success" onClick={editar}>Salvar</button>
                    <Link to="/Tabela" type="submit" className="btn btn-outline-danger mx-2">Cancelar</Link>
                </form>
            </div>
        </div>
    </div>
  )
}
