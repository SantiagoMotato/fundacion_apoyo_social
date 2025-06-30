
import { useState } from 'react';
import { FaFacebook, FaInstagram, FaTiktok, FaBars, FaTimes } from "react-icons/fa";
import { MdOutlineWhatsapp } from "react-icons/md";

function Navbar({ onLinkClick }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = (item) => {
    onLinkClick(item);
    setMenuOpen(false);
  };

  return (
    <nav className="px-8 py-4 w-full bg-white fixed top-0 left-0 z-50 shadow-md">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="w-20 sm:w-24">
          <img src="/images/apoyoSocial.jpg" alt="Logo de apoyo social" className="w-full h-full object-contain" />
        </div>

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

          <ul className="flex gap-6 mt-2 text-gray-500 font-semibold">
            {["Quienes somos?", "Nuestro trabajo", "Trabaja con nosotros", "Programas"].map((item) => (
              <li
                key={item}
                onClick={() => handleLinkClick(item)}
                className="hover:text-blue-500/80 hover:underline hover:underline-offset-4 active:scale-75 transition cursor-pointer"
              >
                {item}
              </li>
            ))}
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
          <ul className="flex flex-col items-center gap-2">
            {["Quienes somos?", "Nuestro trabajo", "Trabaja con nosotros", "Programas"].map((item) => (
              <li
                key={item}
                onClick={() => handleLinkClick(item)}
                className="hover:text-blue-500 cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
