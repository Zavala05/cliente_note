// src/pages/Home.jsx
import React, { useState, useEffect } from "react";
import httpClient from "../httpClient";

function Home() {
  const [user, setUser] = useState(null);

  const logoutUser = async () => {
    try {
      await httpClient.post("/logout");
      window.location.href = "/"; // Recarga la página para limpiar estado
    } catch (error) {
      console.error("Error logout:", error);
    }
  };

  useEffect(() => {
    (async () => {
      try {
        const resp = await httpClient.get("/@me");
        setUser(resp.data);
      } catch (error) {
        console.log("No autenticado");
      }
    })();
  }, []);

  return (
    <div>
      <h1>Welcome to this React Application</h1>
      {user != null ? (
        <div>
          <h2>Logged in</h2>
          <h3>ID: {user.id}</h3>
          <h3>Email: {user.email}</h3>
          <button onClick={logoutUser}>Logout</button>
        </div>
      ) : (
        <div>
          <p>You are not logged in</p>
          <div>
            <a href="/login">
              <button>Login</button>
            </a>
            <a href="/register">
              <button>Register</button>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;