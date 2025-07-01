
import { useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaTiktok, FaBars, FaTimes } from "react-icons/fa";
import { MdOutlineWhatsapp } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";

function Navbar({ onLinkClick }) {

  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const closeTimeoutRef = useRef(null);

  const isActive = (path) => location.pathname === path;
  
  const handleMouseEnter = () => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    setSubmenuOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setSubmenuOpen(false);
    }, 700); // Tiempo de retardo en milisegundos
  };
    

  const handleLinkClick = (item) => {
    onLinkClick(item);
    setMenuOpen(false);
  };
  

  return (
    <nav className="px-8 py-4 w-full bg-white fixed top-0 left-0 z-50 shadow-md">
      <div className="flex justify-between items-center">
        {/* Logo */}
         <Link to="/" className="w-20 sm:w-24">
          <img
            src="/images/apoyoSocial.jpg"
            alt="Logo de apoyo social"
            className="w-full h-full object-contain cursor-pointer"
          />
        </Link>

        {/* Ícono menú móvil */}
        <div className="sm:hidden text-2xl text-gray-600" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Contenido para interfaces de escritorio */}
        <div className="hidden sm:flex flex-col">
          <div className="flex justify-end gap-4 text-gray-500 text-2xl">
            <FaFacebook className="w-9 h-9 p-1 hover:text-blue-600 hover:bg-blue-500/20 rounded-full cursor-pointer hover:scale-90 active:scale-75 transition" />
            <FaInstagram className="w-9 h-9 p-1 hover:text-pink-500 hover:bg-pink-500/20 rounded-full cursor-pointer hover:scale-90 active:scale-75 transition" />
            <FaTiktok className="w-9 h-9 p-1 hover:text-black hover:bg-black/20 rounded-full cursor-pointer hover:scale-90 active:scale-75 transition" />
            <a href="https://wa.me/573187116546"  target="_blank" rel="noopener noreferrer"><MdOutlineWhatsapp className="w-9 h-9 p-1 text-[#25D366] hover:text-green-500 hover:bg-green-500/20 rounded-full cursor-pointer hover:scale-90 active:scale-75 transition"/></a>
          </div>

          <div className="flex justify-end text-sm font-semibold text-gray-400 mt-1">
            <span>Contácto: 3187116546</span>
            <span className="mx-3">|</span>
            <span>Correo: funapoyosocial@gmail.com</span>
          </div>

          <ul className="flex gap-6 mt-2 text-gray-500 font-semibold uppercase relative">
            <li>
              <Link to="/" className={`hover:text-blue-500/80 hover:underline hover:underline-offset-4 active:scale-75 transition cursor-pointer ${isActive("/") ? "text-blue-600" : ""}`}>
                Inicio
              </Link>
            </li>
            <li>
              <Link to="/resena-historica" className={`hover:text-blue-500/80 hover:underline hover:underline-offset-4 active:scale-75 transition cursor-pointer ${isActive("/resena-historica") ? "text-blue-600" : ""}`}>
                Quienes somos?
              </Link>
            </li>
            <li>
              <Link to="/mision-vision" className={`hover:text-blue-500/80 hover:underline hover:underline-offset-4 active:scale-75 transition cursor-pointer ${isActive("/mision-vision") ? "text-blue-600" : ""}`}>
                Nuestro trabajo
              </Link>
            </li>
            <li>
              <Link to="/valores" className={`hover:text-blue-500/80 hover:underline hover:underline-offset-4 active:scale-75 transition cursor-pointer ${isActive("/valores") ? "text-blue-600" : ""}`}>
                Trabaja con nosotros
              </Link>
            </li>
            <li className="relative">
              <div
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="flex items-center gap-1 hover:text-blue-500/80 hover:underline hover:underline-offset-4 active:scale-75 transition cursor-pointer"
              >
                Transparencia
                <IoIosArrowDown className="text-base" />
              </div>

              {submenuOpen && (
                <ul className="absolute left-0 top-full mt-2 bg-white shadow-lg rounded-md p-2 z-50 text-gray-600 text-sm normal-case min-w-[150px]">
                  <li>
                    <Link to="/informacion-esal" className="px-4 py-2 hover:bg-gray-100 rounded block">
                      Información ESAL
                    </Link>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </div>
      </div>

      {/* Menú para interfaces moviles */}
      {menuOpen && (
        <div className="sm:hidden mt-4 flex flex-col items-center gap-4 text-gray-700 font-semibold">
          <div className="flex justify-center gap-5 text-2xl text-gray-500">
            <FaFacebook className="hover:text-blue-600" />
            <FaInstagram className="hover:text-pink-500" />
            <FaTiktok className="hover:text-black" />
            <a href="https://wa.me/573187116546"  target="_blank" rel="noopener noreferrer"><MdOutlineWhatsapp className="text-[#25D366] hover:text-green-500 cursor-pointer hover:scale-90 active:scale-75 transition"/></a>
          </div>
          <div className="text-center text-sm text-gray-500">
            <p>Contácto: 3187116546</p>
            <p>Correo: funapoyosocial@gmail.com</p>
          </div>
          <ul className="flex flex-col items-center gap-2 uppercase text-gray-700 font-semibold">
            <li>
              <Link
                to="/"
                className="hover:text-blue-500 cursor-pointer flex items-center gap-1"
                onClick={() => setMenuOpen(false)}
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link
                to="/resena-historica"
                className="hover:text-blue-500 cursor-pointer flex items-center gap-1"
                onClick={() => setMenuOpen(false)}
              >
                Quienes somos?
              </Link>
            </li>
            <li>
              <Link
                to="/mision-vision"
                className="hover:text-blue-500 cursor-pointer flex items-center gap-1"
                onClick={() => setMenuOpen(false)}
              >
                Nuestro trabajo
              </Link>
            </li>
            <li>
              <Link
                to="/valores"
                className="hover:text-blue-500 cursor-pointer flex items-center gap-1"
                onClick={() => setMenuOpen(false)}
              >
                Trabaja con nosotros
              </Link>
            </li>
            <li>
              <Link
                to="/informacion-esal"
                className="hover:text-blue-500 cursor-pointer flex items-center gap-1"
                onClick={() => setMenuOpen(false)}
              >
                Información ESAL
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
