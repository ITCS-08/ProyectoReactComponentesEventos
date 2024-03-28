import { useState } from 'react'
import Formulario from './components/Formulario';
import Registro from './components/Registro';
import Alertas from './components/Alertas';
import { Button } from "react-bootstrap";
import './App.css'

function App() {

  const [message, setMessage] = useState("");
 
  return (
    <>
      <div className="container">
      
      <Registro setMessage={setMessage} />
      <Alertas message={message} />
      </div>     
    
    </>
  )
}

export default App
