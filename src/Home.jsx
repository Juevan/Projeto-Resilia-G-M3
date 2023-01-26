import '../style/Home.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Products from './Products';
import FormsPro from './FormsPro'
import FormsUsu from './FormsUsu'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Homeinicio from './HomeInicio';
import HomeInicio from './HomeInicio';

function Home() {
    return (
        <BrowserRouter>
            <header>
                <nav class="navbar navbar-expand-lg bg-body-primary">
                    <div class="container-fluid">
                        <h1 class="navbar-brand">React Storage</h1>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="/Homeinicio">Home</a>
                                    
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="/Produtos">Produtos</Link>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Cadastrar
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li><li><Link class="dropdown-item" to="/FormsUsu">Usuário</Link></li></li>
                                        <li><Link class="dropdown-item" to="/FormsPro">Produtos</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
            <main>
                <Routes>
                    <Route path="/Produtos" element={<Products />} />
                    <Route path="/FormsPro" element={<FormsPro />} />
                    <Route path="/FormsUsu" element={<FormsUsu />} />
                    <Route path="/HomeInicio" element={<HomeInicio/>} />
                  
                </Routes>
            </main>
        </BrowserRouter>
    )
}

export default Home;
