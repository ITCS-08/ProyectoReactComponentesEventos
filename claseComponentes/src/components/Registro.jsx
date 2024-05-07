import React, { useState } from 'react';
import Formulario from './Formulario';


import 'bootstrap/dist/css/bootstrap.min.css';


const Registro = () => {
    const [alertMessage, setAlertMessage] = useState('');
    const [alertType, setAlertType] = useState('');

    const handleFormSubmit = (formData) => {

        if (formData.email && formData.password && formData.passwordConfirm) {
            if (formData.password === formData.passwordConfirm) {
                setAlertMessage('Registro exitoso');
                setAlertType('success');
            } else {
                setAlertMessage('Las contraseñas no coinciden');
                setAlertType('danger');
            }
        } else {
            setAlertMessage('Por favor, complete todos los campos');
            setAlertType('danger');
        }
    };

    return (
        <div className="container">
            <h2 className="mb-2">Crea una Cuenta</h2>
           
        </div>
    );
};

export default Registro;
