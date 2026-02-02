// src/pages/LoginPage.jsx
import React, { useState } from "react";
import httpClient from "../httpClient";
import { Link } from "react-router-dom";
import "../styles/login.css"

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const logInUser = async () => {
    try {
      await httpClient.post("/login", {
        email,
        password,
      });
      window.location.href = "/";
    } catch (error) {
      if (error.response && error.response.status === 401) {
        alert("Credenciales inválidas");
      } else {
        alert("Error al iniciar sesión");
      }
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1>Login</h1>
        
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
              placeholder="Ingresa tu contraseña"
            />
          </div>
          
          <button 
            type="button" 
            className="btn-primary" 
            onClick={logInUser}
          >
            Iniciar Sesión
          </button>
        </form>

        <div className="register-section">
          <p>¿No tienes una cuenta aún?</p>
          <Link to="/register">
            <button className="btn-secondary">Crear Cuenta Nueva</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;