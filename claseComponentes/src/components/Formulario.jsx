import React, { useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';


const Formulario = ({ onSubmit }) => {

    const [formData, setFormData] = useState({
          name: '',
          email: '',
          password: '',
          passwordConfirm: '',
        });
      
        const handleChange = (e) => {
          const { name, value } = e.target;
          setFormData({
            ...formData,
            [name]: value,
          });
        };
      
        const handleSubmit = (e) => {
          e.preventDefault();
          onSubmit(formData);
        };  

    return(

        <>
       

        <form className ="mb-3" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Nombre Completo</label>
        <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email</label>
        <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">Contraseña</label>
        <input type="password" className="form-control" id="password" name="password" value={formData.password} onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label htmlFor="passwordConfirm" className="form-label">Confirmar Contraseña</label>
        <input type="password" className="form-control" id="passwordConfirm" name="passwordConfirm" value={formData.passwordConfirm} onChange={handleChange} />
      </div>
      <button type="submit" className="btn btn-primary">Registrarse</button>
    </form>
        </>

    )
};

export default Formulario;