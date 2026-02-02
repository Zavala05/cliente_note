// src/pages/RegisterPage.jsx
import React, { useState } from "react";
import httpClient from "../httpClient";
import { Link } from "react-router-dom"; // Importamos Link para la navegación
import "../styles/register.css"; // Importamos los estilos

function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerUser = async () => {
    try {
      await httpClient.post("/register", {
        email,
        password,
      });
      window.location.href = "/login";
    } catch (error) {
      if (error.response && error.response.status === 401) {
        alert("Error en el registro");
      }
    }
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <h1>Crear Cuenta</h1>
        
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Ingresa tu email"
            />
          </div>
          
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Crea una contraseña"
            />
          </div>
          
          <button 
            type="button" 
            className="btn-register" 
            onClick={registerUser}
          >
            Registrarse
          </button>
        </form>

        {/* Enlace para volver al Login si ya tienes cuenta */}
        <Link to="/login" className="login-link">
          ¿Ya tienes cuenta? Inicia Sesión aquí
        </Link>
      </div>
    </div>
  );
}

export default RegisterPage;