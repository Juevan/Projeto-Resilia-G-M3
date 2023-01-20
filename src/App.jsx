import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './Home.jsx';
import Contacts from './Contacts.jsx';

function App() {
  const [count, setCount] = useState(0)



  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Contacts' element={<Contacts />} />
      </Routes>
      <div className='mainContainer'>
        <div className='contaner'>
          <main class="form-signin w-100 m-auto">
            <form>
              <img class="mb-4" src="https://i.pinimg.com/originals/5c/00/e5/5c00e519ad324b8ae46e6c91bd3bdecc.jpg" alt="" width="72" height="57" />
              <h1 class="h3 mb-3 fw-normal">Inicie para continuar</h1>
              <div class="form-floating">
                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                <label for="floatingInput">Usuário</label>
              </div>
              <div class="form-floating">
                <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                <label for="floatingPassword">Senha</label>
              </div>
              <div class="checkbox mb-3">
                <label>
                  <input type="checkbox" value="remember-me" /> Administrador
                </label>
              </div>
              <button class="w-100 btn btn-lg btn-primary" type="submit">Iniciar</button>
              <p class="mt-5 mb-3 text-muted">&copy; 2017–2022</p>
            </form>
          </main>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
