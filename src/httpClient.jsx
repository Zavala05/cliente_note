import axios from "axios";

// Creamos una instancia de axios configurada
export default axios.create({
  baseURL: "https://server-notes-beige.vercel.app/", // La URL de tu servidor Flask
  withCredentials: true, // Importante: Permite enviar cookies al servidor
});