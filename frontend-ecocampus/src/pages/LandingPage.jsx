import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
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

      <main className="flex-grow flex flex-col items-center text-center px-4 py-10">
        {/* Encabezado */}
        <header className="w-full bg-lime-600 text-white py-6 text-center rounded-lg shadow-md">
          <h1 className="text-3xl font-bold">Calcula tu huella ecológica y ayuda al planeta</h1>
          <p className="text-lg mt-2">Conoce tu impacto y ayuda al planeta</p>
          <Link to="/calculadora">
            <button 
              className="mt-4 px-6 py-2 bg-indigo-500 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-indigo-700">
              Comenzar cálculo
            </button>
          </Link>
        </header>

        {/* Sección de información */}
        <section className="w-11/12 md:w-3/4 bg-white p-6 rounded-lg shadow-lg mt-6">
          <h2 className="text-xl font-bold text-center text-gray-800">¿Qué es la huella ecológica?</h2>
          <p className="mt-4 text-gray-700 bg-neutral-200 p-4 rounded-lg">
            La huella ecológica es un indicador que mide el impacto de las actividades humanas en el medio ambiente. Evalúa la cantidad de tierra y agua necesarias para producir los recursos que consumimos y absorber los desechos generados.
          </p>
          <p className="mt-4 text-gray-700">
            México tiene una huella ecológica de aproximadamente <span className="font-bold">3.1 hectáreas globales</span> por persona, según datos del WWF. Además, México ocupa el lugar 26 en el ranking de concentración anual de PM2.5, con un promedio de <span className="font-bold">20.1 µg/m³</span>.
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-zinc-700 text-white px-6 py-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">

          {/* Logos a la izquierda */}
          <div className="flex items-center space-x-4 mb-6 md:mb-0">
            <img src={process.env.PUBLIC_URL + "/Logos/UdC_logo.png"} alt="Universidad de Colima" className="h-14" />
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
              src={process.env.PUBLIC_URL + "/Logos/eslogan.png"}
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

export default LandingPage;
