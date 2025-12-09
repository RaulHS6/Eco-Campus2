import React from "react";
import { Link } from "react-router-dom";

const noticiasEventos = [
  {
    id: 1,
    titulo: "Limpieza de playa - Manzanillo",
    fecha: "15 de febrero - 9:00 AM",
    descripcion:
      "Únete a nuestra jornada de limpieza en la playa de Manzanillo. Una acción para reducir la contaminación y fomentar el compromiso social con el medio ambiente.",
    tipo: "Evento",
  },
  {
    id: 2,
    titulo: "Nueva estación de reciclaje en campus",
    fecha: "10 de febrero",
    descripcion:
      "Se ha instalado una nueva estación de reciclaje frente a la biblioteca. ¡Participa y separa tus residuos para un campus más verde!",
    tipo: "Noticia",
  },
  {
    id: 3,
    titulo: "Taller de compostaje doméstico",
    fecha: "20 de febrero - 16:00 PM",
    descripcion:
      "Aprende a crear tu propia composta en casa con materiales sencillos. Contribuye a reducir los desechos orgánicos.",
    tipo: "Evento",
  },
];

const Comunidad = () => {
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

      {/* Encabezado */}
      <header className="bg-gray-800 text-white text-center p-6">
        <h2 className="text-3xl font-bold">Comunidad EcoCampus</h2>
        <p>Mantente informado sobre eventos y noticias ambientales</p>
      </header>

      {/* Contenido principal */}
      <main className="flex-grow p-6 flex flex-col items-center">
        <section className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-6">
          {noticiasEventos.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-gray-200 rounded-lg shadow-md p-5 hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-bold text-green-700 mb-1">{item.titulo}</h3>
              <p className="text-sm text-gray-500 italic mb-2">{item.fecha}</p>
              <p className="text-gray-700">{item.descripcion}</p>
              <span className="inline-block mt-3 px-3 py-1 text-sm rounded-full bg-green-100 text-green-800">
                {item.tipo}
              </span>
            </div>
          ))}
        </section>
      </main>

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

export default Comunidad;
