// Home.jsx
import React from 'react';
import { GiCakeSlice } from 'react-icons/gi'; // Importa el ícono de pastel

const Home = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Bienvenido a Happy Cake</h1>
      <h2>El lugar de los pasteles felices</h2>
      <GiCakeSlice style={{ fontSize: '64px', color: 'brown' }} /> {/* Estilos del ícono */}
    </div>
  );
};

export default Home;
