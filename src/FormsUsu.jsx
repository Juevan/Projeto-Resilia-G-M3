import '../style/Forms.css'
import { useState, useEffect } from 'react'
import axios from 'axios'

function FormsUsu() {
    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        axios.get('https://projeto-individual-resilia-modulo-3.onrender.com/produtos').then(response => setProdutos(response.data))

    }, [])

    return (
        <div class="contaner2">
            <form class="row g-3 w-75">
                <div class="col-md-6">
                    <label for="inputEmail4" class="form-label">Usuário</label>
                    <input type="email" class="form-control" id="inputEmail4" />
                </div>
                <div class="col-md-6">
                    <label for="inputPassword4" class="form-label">Senha</label>
                    <input type="password" class="form-control" id="inputPassword4" />
                </div>
                <div class="input-group">
                    <span class="input-group-text">Primeiro e Último Nome</span>
                    <input type="text" aria-label="Primeiro Nome" class="form-control" />
                    <input type="text" aria-label="Último Nome" class="form-control" />
                </div>
                <div class="input-group mb-3">
                    <label class="input-group-text" for="inputGroupSelect01">Tipo</label>
                    <select class="form-select" id="inputGroupSelect01">
                        <option selected>Escolha</option>
                        <option value="1">Administrador</option>
                        <option value="2">Usuário</option>
                    </select>
                </div>
                <div class="col-12">
                    <button type="submit" class="btn btn-primary">Cadastrar</button>
                </div>
            </form>
        </div>
    )
}
export default FormsUsu;