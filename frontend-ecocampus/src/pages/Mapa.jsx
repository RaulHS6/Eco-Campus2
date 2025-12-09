import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import markpointIcon from "../assets/markpointMap.svg";
import { Link } from "react-router-dom";

// Definir el ícono personalizado
const customIcon = new L.Icon({
  iconUrl: markpointIcon,
  iconSize: [18, 18], // Tamaño del ícono
  iconAnchor: [16, 32], // Punto de anclaje (centro inferior)
  popupAnchor: [0, -32] // Ajustar posición del popup
});

// Lista de puntos de reciclaje
const puntosReciclaje = [
  { id: 1, nombre: "Facultad de Psicología", coordenadas: [19.248650, -103.697348], imagen: "/Depositos/facultad_psicologia.jpeg" },
  { id: 2, nombre: "Facultad de Telemática", coordenadas: [19.249054, -103.697177], imagen: "/Depositos/facultad_de_telematica.jpeg" },
  { id: 3, nombre: "Servicios Universitarios", coordenadas: [19.249695514221358, -103.698857336593], imagen: "/Depositos/servicios_universitarios.jpeg" },
  { id: 4, nombre: "Facultad de letras: Baños ", coordenadas: [19.248386302818922, -103.69782831812003], imagen: "/Depositos/banos_letras.jpeg" },
  { id: 5, nombre: "Facultad de letras", coordenadas: [19.24798681961165, -103.69781860427007], imagen: "/Depositos/facultad_letras.jpeg" },
  { id: 6, nombre: "Cafetería de la Facultad de Medicina ", coordenadas: [19.247880464022902, -103.69774886683618], imagen: "/Depositos/cafeteria_medicina.jpeg" },
  { id: 7, nombre: "Auditorio de la Facultad de letras", coordenadas: [19.24786780263871, -103.69753697232548], imagen: "/Depositos/auditorio_letras.jpeg" },
  { id: 8, nombre: "Radio universitaria", coordenadas: [19.249657078948125, -103.69775267974275], imagen: "/Depositos/radio_universitaria.jpeg" },
  { id: 9, nombre: "Facultad de trabajo social", coordenadas: [19.24808852311203, -103.69867809288807], imagen: "/Depositos/facultad_trabajo_social.jpeg" },
  { id: 10, nombre: "Facultad de trabajo social planta alta", coordenadas: [19.248253120809082, -103.69849302046464], 
    imagen: "/Depositos/facultad_trabajo_pa.jpeg" },
  { id: 11, nombre: "Comedores de la Facultad de Trabajo Social", coordenadas: [19.248226531962967, -103.69871296160531],
     imagen: "/Depositos/facultad_trabajo_comedor.jpeg" },
  { id: 12, nombre: "Facultad de enfermería", coordenadas: [19.24780617437172, -103.69875185363632], imagen: "/Depositos/facultad_enfermeria.jpeg" },
  { id: 13, nombre: "Dirección General de Servicio Social y Práctica Profesional: Se ubican a un costado del edificio. ",
     coordenadas: [19.24845696850236, -103.69947739117468], imagen: "/Depositos/direccion_general.jpeg" },
  { id: 14, nombre: "Facultad de mercadotecnica: Comedores", coordenadas: [19.24953797065565, -103.69990166044926], imagen: "/Depositos/mercadotecnica_comedores.jpeg" },
  { id: 15, nombre: "Facultad de mercadotecnia", coordenadas: [19.249580929468067, -103.7001611824787], imagen: "/Depositos/facultad_mercadotecnia.jpeg" },
  { id: 16, nombre: "Facultad de Ciencias de la Educación: A un lado de la cafetería", coordenadas: [19.251009594474606, -103.70038120915088], imagen: "/Depositos/cafeteria_educacion.jpeg" },
  { id: 17, nombre: "Bachillerato 1:A un lado de la explanada principal", coordenadas: [19.250174968301376, -103.70075101029477], imagen: "/Depositos/b1_explanada.jpeg" },
  { id: 18, nombre: " Bachillerato 1:A un lado de la cafetería", coordenadas: [19.250279390975468, -103.700993227617], imagen: "/Depositos/b1_cafeteria.jpeg" },
  { id: 19, nombre: "Bachillerato 1: Afuera del laboratorio de química", coordenadas: [19.250265225396042, -103.7011332698109], imagen: "/Depositos/b1_laboratorio_quimica.jpeg" },
  { id: 20, nombre: "Bachillerato 1: Salones zona norte", coordenadas: [19.250485789655148, -103.70158999686659], imagen: "/Depositos/b1_salones_norte.jpeg" },
  { id: 21, nombre: "Bachillerato 1: Salones zona noreste ", coordenadas: [19.25056682120424, -103.701203758765497], imagen: "/Depositos/b1_salones_noreste.jpeg" },
];

const Mapa = () => {
  const posicionCampus = [19.249437, -103.698893]; // Coordenadas del Campus Central

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
        <h1 className="text-3xl font-bold mt-6">Mapa de Puntos de Reciclaje</h1>
        <p className="text-lg text-gray-700">Ubicación de los depósitos de reciclaje en el Campus</p>

        <MapContainer center={posicionCampus} zoom={17} className="w-11/12 h-[500px] mt-6 rounded-lg shadow-lg">
          {/* Capa de mapa */}
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          />

          {/* Agregar marcadores con el ícono personalizado */}
          {puntosReciclaje.map((punto) => (
            <Marker key={punto.id} position={punto.coordenadas} icon={customIcon}>
              <Popup>
                <div className="text-center">
                  <h2 className="font-bold text-lg">{punto.nombre}</h2>
                  <img src={punto.imagen} alt={punto.nombre} className="w-40 h-32 object-cover rounded-lg mt-2" />
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
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

export default Mapa;
