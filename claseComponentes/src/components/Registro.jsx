// Archivo: Registro.js
import React, { useState } from 'react';
import Formulario from './Formulario';
import SocialButton from './SocialButton';
import Alertas from './Alertas';
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
            <div className="container mt-2">
                <SocialButton />
                {/* <SocialButton icon="fa fa-twitter" />
                <SocialButton icon="fa fa-google" /> */}
               
                <Formulario onSubmit={handleFormSubmit} />
                <Alertas message={alertMessage} type={alertType} />
            </div>
        </div>
    );
};

export default Registro;
