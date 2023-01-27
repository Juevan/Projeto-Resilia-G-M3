import '../style/Home.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import FormsPro from './FormsPro'
import FormsUsu from './FormsUsu'
import Requisition from './Requisition';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './Home';

function App() {
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
                                    <a class="nav-link active" aria-current="page" href="/">Home</a>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="/Requisition">Produtos</Link>
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
                    <Route path="/Requisition" element={<Requisition />} />
                    <Route path="/FormsPro" element={<FormsPro />} />
                    <Route path="/FormsUsu" element={<FormsUsu />} />
                    <Route path="/" element={<Home/>} />
                </Routes>
            </main>
        </BrowserRouter>
    )
}
export default App;
