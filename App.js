import React, { useState } from 'react';
function PiedraPapelTijera() {
  // Estados para las opciones seleccionadas por cada jugador
  const [opcionJugador1, setOpcionJugador1] = useState('');
  const [opcionJugador2, setOpcionJugador2] = useState('');
  const [resultado, setResultado] = useState('');

  // Funciones para manejar los cambios en las listas desplegables
  const handleChangeJugador1 = (event) => {
    setOpcionJugador1(event.target.value);
  };

  const handleChangeJugador2 = (event) => {
    setOpcionJugador2(event.target.value);
  };

  // Función para determinar el ganador
  const determinarGanador = () => {
    if (opcionJugador1 === opcionJugador2) {
      setResultado('Empate');
    } else if (
      (opcionJugador1 === 'piedra' && opcionJugador2 === 'tijera') ||
      (opcionJugador1 === 'papel' && opcionJugador2 === 'piedra') ||
      (opcionJugador1 === 'tijera' && opcionJugador2 === 'papel')
    ) {
      setResultado('Jugador 1 gana');
    } else {
      setResultado('Jugador 2 gana');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Juego de Piedra, Papel y Tijera</h1>
      <div style={{ marginBottom: '20px' }}>
        <label htmlFor="jugador1">Jugador 1:</label>
        <select id="jugador1" onChange={handleChangeJugador1}>
          <option value="">Seleccione una opción</option>
          <option value="piedra">Piedra</option>
          <option value="papel">Papel</option>
          <option value="tijera">Tijera</option>
        </select>
      </div>
      <div style={{ marginBottom: '20px' }}>
        <label htmlFor="jugador2">Jugador 2:</label>
        <select id="jugador2" onChange={handleChangeJugador2}>
          <option value="">Seleccione una opción</option>
          <option value="piedra">Piedra</option>
          <option value="papel">Papel</option>
          <option value="tijera">Tijera</option>
        </select>
      </div>
      <button onClick={determinarGanador}>Determinar Ganador</button>
      {resultado && <p>Resultado: {resultado}</p>}
    </div>
  );
}

export default PiedraPapelTijera;
