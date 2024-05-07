import { useState } from 'react'
import Formulario from './components/Formulario';
import Registro from './components/Registro';
import Alertas from './components/Alertas';
import './App.css'
import SocialButton from './components/SocialButton';

function App() {

  const [message, setMessage] = useState("");

  return (
    <>
    <div className="container mb-4 justify-content">
      <SocialButton />
      <Registro setMessage={setMessage} />
      </div>
      <div className="container mt-2">
        <Formulario setMessage={setMessage} />
         
        <Alertas message={message} />
      </div>

    </>
  )
}

export default App
