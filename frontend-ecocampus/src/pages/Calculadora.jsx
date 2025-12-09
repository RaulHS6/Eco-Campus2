import React, { useState } from "react";
import { Link } from "react-router-dom";
import { preguntas } from "../utils/preguntas";

const Calculadora = () => {
  const [preguntaActual, setPreguntaActual] = useState(0);
  const [respuestas, setRespuestas] = useState({}); // { [idPregunta]: [ {texto, valor}, {texto, valor} ] }
  const [verResultado, setVerResultado] = useState(false);
  const [puntajeFinal, setPuntajeFinal] = useState(0);

  // Verifica si esta pregunta es la #12 (electrodomésticos)
  const esPreguntaMultiple = preguntas[preguntaActual].id === 12;

  // Maneja la selección para preguntas simples y múltiples
  const handleSeleccion = (op) => {
    const preguntaId = preguntas[preguntaActual].id;
    const seleccionActual = respuestas[preguntaId] || [];

    if (esPreguntaMultiple) {
      // Toggle multiple selection
      const indice = seleccionActual.findIndex((item) => item.texto === op.texto);
      if (indice !== -1) {
        // Si ya está seleccionado, lo quitamos
        seleccionActual.splice(indice, 1);
      } else {
        // Si no está, lo agregamos
        seleccionActual.push(op);
      }
      setRespuestas({ ...respuestas, [preguntaId]: [...seleccionActual] });
    } else {
      // Solo una opción guardada
      setRespuestas({ ...respuestas, [preguntaId]: [op] });
    }
  };

  // Pasa a la siguiente pregunta
  const handleSiguiente = () => {
    if (preguntaActual < preguntas.length - 1) {
      setPreguntaActual(preguntaActual + 1);
    } else {
      // Calculamos la suma total
      let total = 0;
      Object.values(respuestas).forEach((opcionesArray) => {
        opcionesArray.forEach((opcion) => {
          total += opcion.valor;
        });
      });
      setPuntajeFinal(total);
      setVerResultado(true);
    }
  };

  // Retrocede a la pregunta anterior
  const handleAnterior = () => {
    if (preguntaActual > 0) {
      setPreguntaActual(preguntaActual - 1);
    }
  };

  // Determinar el nivel de huella según el puntaje
  let nivel = "";
  if (puntajeFinal <= 500) {
    nivel = "Huella relativamente baja";
  } else if (puntajeFinal <= 1000) {
    nivel = "Huella media";
  } else if (puntajeFinal <= 1500) {
    nivel = "Huella alta";
  } else {
    nivel = "Huella muy alta";
  }

  const pregunta = preguntas[preguntaActual];

  return (
    <div className="min-h-screen flex flex-col bg-[#f4f1ec]">
      {/* Navbar */}
      <nav className="bg-lime-600 text-white p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">EcoCampus</h1>
        <ul className="flex space-x-6">
          <li><Link to="/" className="hover:underline">Inicio</Link></li>
          <li><Link to="/calculadora" className="hover:underline">Calculadora</Link></li>
          <li><Link to="/mapa" className="hover:underline">Mapa</Link></li>
          <li><Link to="/comunidad" className="hover:underline">Comunidad</Link></li>
          <li><Link to="/guia-reciclaje" className="hover:underline">Guía de Reciclaje</Link></li>
        </ul>
      </nav>

      {/* Barra de progreso */}
      {!verResultado && (
        <>
          <div className="w-full h-2 bg-gray-200">
            <div
              className="h-full bg-lime-500 transition-all duration-300"
              style={{ width: `${((preguntaActual + 1) / preguntas.length) * 100}%` }}
            ></div>
          </div>
          <p className="text-center text-sm text-gray-600 mt-1">
            Pregunta {preguntaActual + 1} de {preguntas.length}
          </p>
        </>
      )}

      {/* Contenido principal */}
      {!verResultado && (
        <div className="flex-grow flex flex-col items-center justify-center p-6">
          <div className="bg-white p-6 rounded-md shadow-lg w-full max-w-md">
            <h2 className="text-xl font-semibold text-center mb-6 text-gray-800">
              {pregunta.texto}
            </h2>
            <div className="space-y-3">
              {pregunta.opciones.map((op) => {
                // Verificar si está seleccionado
                const seleccionados = respuestas[pregunta.id] || [];
                const estaSeleccionado = seleccionados.some(
                  (item) => item.texto === op.texto
                );

                return (
                  <button
                    key={op.texto}
                    onClick={() => handleSeleccion(op)}
                    className={`w-full py-3 px-4 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100
                    ${estaSeleccionado ? "bg-lime-500 border-lime-600 font-bold text-white" : ""}`}
                  >
                    {op.texto}
                  </button>
                );
              })}
            </div>

            {/* Botones de navegación */}
            <div className="flex justify-between mt-6">
              <button
                onClick={handleAnterior}
                disabled={preguntaActual === 0}
                className="px-4 py-2 bg-black-200 text-black-700 rounded hover:bg-black-300 disabled:opacity-50"
              >
                Anterior
              </button>
              <button
                onClick={handleSiguiente}
                className="px-4 py-2 bg-lime-500 text-white rounded hover:bg-lime-700"
              >
                {preguntaActual < preguntas.length - 1 ? "Siguiente" : "Finalizar"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Pantalla de resultado final */}
{verResultado && (
  <div className="flex-grow flex flex-col items-center justify-center p-6">
    <div className="bg-white p-12 rounded-md shadow-md max-w-2xl text-center">
      <h2 className="text-4xl font-bold mb-6 text-gray-800">¡Tu resultado!</h2>
      
      <p className="text-2xl text-gray-800">
        Tu huella ecológica total es de{" "}
        <span className="font-bold text-lime-700 text-3xl">{puntajeFinal}</span> puntos.
      </p>
      
      <p className="mt-6 text-2xl text-gray-800">
        Nivel de huella:{" "}
        <span className="font-bold text-lime-700 text-3xl">{nivel}</span>
      </p>
      
      <p className="mt-6 text-xl text-gray-600">
        (Esto es una aproximación basada en tus respuestas. Te recomendamos explorar más 
        opciones para reducir tu huella y ayudar al planeta.)
      </p>
      
      <div className="mt-8">
        <Link
          to="/"
          className="px-6 py-3 bg-lime-600 text-white text-xl rounded hover:bg-lime-800"
        >
          Volver al Inicio
        </Link>
      </div>
    </div>
  </div>
)}


      {/* Footer */}
      <footer className="bg-zinc-700 text-white px-6 py-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          {/* Logos a la izquierda */}
          <div className="flex items-center space-x-4 mb-6 md:mb-0">
            <img src="/Logos/UdC_logo.png" alt="Universidad de Colima" className="h-14" />
          </div>

          {/* Redes sociales al centro (sin correo) */}
          <div className="flex space-x-5 text-2xl mb-6 md:mb-0">
            <a
              href="https://www.facebook.com/share/18zfi8HwvY/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook hover:text-lime-400"></i>
            </a>
            <a
              href="https://www.instagram.com/udec.oficial?igsh=MWxnc2ZvYzRsN2ZnYg=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram hover:text-lime-400"></i>
            </a>
            <a
              href="https://youtube.com/@universidaddecolimatv?si=kqP73Ld1sn6y2DmS"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-youtube hover:text-lime-400"></i>
            </a>
          </div>

          {/* Imagen y dirección a la derecha */}
          <div className="text-right">
            <img
              src="/Logos/eslogan.png"
              alt="Pertenencia que transforma"
              className="h-10 mx-auto md:mx-0 mb-2"
            />
            <p className="text-sm">Av. Universidad No. 333, Las Víboras</p>
            <p className="text-sm">CP. 28040, Colima, Colima, México</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Calculadora;
