import React, { useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Registro from "./Registro";


const Formulario = ({ onSubmit }) => {

  const [formData, setFormData] = useState({
    name: '',
    edad: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });



  const [error, setError] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(e.target.formData);
  };



  const validarInput = (e) => {
    e.preventDefault();
    if (formData.name === '' || formData.edad === '') {
      setError(true)
      return
    }
    //Eliminar mensaje de error
    setError(false)
  }

  const validarDatos = (e) => {
    e.preventDefault()
    //Validación
    if (formData.name === '' || formData.edad === '' || formData.email === '') {
      // alert('Todos los campos son obligatorios')
      setError(true)
      return
    }
    setError(false);
    setFormData.name('');
    setFormData.edad('');
    setFormData.email('');
    setFormData.password('');
    setFormData.passwordConfirm('');
  };

  return (

    <>
      <div className="form-container mb-4 border-1">
        <form className="mb-3 form-group" onSubmit={validarDatos} >
          {error ? <p className="error">Completa todos los campos !!</p> : null}


          <div className="mb-3 text-start fw-bold">
            <label htmlFor="name" className="form-label">Nombre Completo</label>
            <input type="text" className="form-control" id="name" name="name" 
            value={formData.nombre} 
            // onChange={(e) => setFormData(e.target.value)} 
            onChange={handleChange}
            placeholder="Ingresa Nombre" />
          </div>

          <div className="form-group mb-3 text-start fw-bold">
            <label>Edad</label>
            <input
              type="text"
              name="edad"
              className="form-control"
              value={formData.edad} 
              // onChange={(e) => setFormData(e.target.value)} 
              onChange={handleChange}
              placeholder="Ingresa Edad"
            
            />
          </div>

          <div className="mb-3 text-start fw-bold">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="e-mail" />
          </div>

          <div className="mb-3 text-start fw-bold">
            <label htmlFor="password" className="form-label">Contraseña</label>
            <input type="password" className="form-control" id="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password " />
          </div>

          <div className="mb-3 text-start fw-bold">
            <label htmlFor="passwordConfirm" className="form-label">Confirmar Contraseña</label>
            <input type="password" className="form-control" id="passwordConfirm" name="passwordConfirm" value={formData.passwordConfirm} onChange={handleChange} placeholder="Password" />
          </div>

          <button type="submit" className="btn btn-primary mt-3"  >Registrarse</button>

        </form>
        {/* <hr /> */}
        {/* <h1>Datos ingresados</h1>
        <ul>
          <li>{formData.name}</li> 
          <li>{formData.edad}</li>
          <li>{formData.email}</li>  
          <li>{formData.password}</li> 
        </ul> */}
      </div>
    </>

  )
};

export default Formulario;