import React from 'react';

const Alertas = ({ message, type }) => {
  return (
    <div style={{ backgroundColor: message.includes("exitoso") ? "green" : "red", color: "white" }}>
      {message}
    </div>
  );
};

export default Alertas;