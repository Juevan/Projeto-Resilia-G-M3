import { useState, useEffect } from 'react'
import axios from 'axios'
import Login from './Login';
import Home from './Home';

function App() {
  const [showLogin, setShowLogin] = useState(false);
  if (showLogin === true) {
    return (
      <Login/>
    )
  }else{
    return(
      <Home/>
    )
  }
}



export default App
