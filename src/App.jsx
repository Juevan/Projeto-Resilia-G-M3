import { useState } from 'react'
import './App.css'
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import Home from './Home.jsx';
import Contacts from './Contacts.jsx';

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <BrowserRouter>
      <header>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/Contacts'>Contato</Link>
          </li>
        </ul>
      </header>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Contacts' element={<Contacts/>}/>
    </Routes>
      <footer>
        <div>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/Contacts'>Contato</Link>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/Contacts'>Contato</Link>
            </li>
          </ul>
        </div>
      </footer>
    </BrowserRouter>
  )
}

export default App
