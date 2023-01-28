import { useState, useEffect } from 'react'
import axios from 'axios'
import '../style/Login.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';


function Login() {
    const [login, setLogin] = useState([])
    const [usuario, setUsuario] = useState()
    const [senha, setSenha] = useState()
    const validateLogin = () => {
        login.map(e => {
            if (e.Usuario == usuario && e.Senha == senha) {
                alert('funcionou')
            } else {
                alert('senha ou usuário inválidos')
            }
        })
    }

    useEffect(() => {
        axios.get('https://projeto-individual-resilia-modulo-3.onrender.com/adms').then(response => setLogin(response.data))
    }, [])


    return (
        <div className='mainContainer'>
            <div className='contaner'>
                <main class="form-signin w-100 m-auto">
                    <form>
                        <img class="mb-4" src="https://e7.pngegg.com/pngimages/763/532/png-clipart-electronic-engineering-computer-icons-electronics-computer-software-electronic-arts-engineering-black-thumbnail.png" alt="" width="72" height="57" />
                        <h1 class="h3 mb-3 fw-normal">Inicie para continuar</h1>
                        <div class="form-floating">
                            <input onChange={e => setUsuario(e.target.value)} type="text" class="form-control" id="floatingInput" placeholder="Usuário" />
                            <label for="floatingInput">Usuário</label>
                        </div>
                        <div class="form-floating">
                            <input onChange={e => setSenha(e.target.value)} type="password" class="form-control" id="floatingPassword" placeholder="Senha" />
                            <label for="floatingPassword">Senha</label>
                        </div>
                        <div class="checkbox mb-3">
                            <label>
                                <input type="checkbox" value="remember-me" /> Administrador
                            </label>
                        </div>
                        <button onClick={validateLogin} class="w-100 btn btn-lg btn-primary" type="submit">Iniciar</button>
                        <p class="mt-5 mb-3 text-muted">&copy; 2023</p>
                    </form>
                </main>
            </div>
        </div>
    )
}

export default Login;