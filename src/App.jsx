import { useState} from 'react'
import Login from './Login';
import Home from './Home';
import Products from './Products';


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
