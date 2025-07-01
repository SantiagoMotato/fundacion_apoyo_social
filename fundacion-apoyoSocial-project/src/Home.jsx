import { useEffect, useState, useRef } from 'react'
import { FaLocationDot } from "react-icons/fa6";
import Navbar from './components/Navbar'
import ReseniaHistoricaPage from './pages/reseniaHistoricaSection/ReseniaHistoricaPage'
import MisionYVisionPage from './pages/misionVisionSection/MisionYVisionPage'
import ValoresPages from './pages/valoresSection/ValoresPage'
import InformacionVeinteCuatro from './pages/informacion2024/InformacionVeinteCuatro'
import ContenidoUno from './pages/contenidoHome/contenidoUno'

function Home() {

  const homeSectionRef = useRef(null)
  const quienesSomosSectionRef = useRef(null)
  const nuestroSectionRef = useRef(null)
  const trabajaConNosotrosSectionRef = useRef(null)

  const handleScrollToSection = (section) => {
      const sectionRefs = {
        Home: homeSectionRef,
        'Quienes somos?': quienesSomosSectionRef,
        'Nuestro trabajo': nuestroSectionRef,
        'Trabaja con nosotros': trabajaConNosotrosSectionRef
      }

      const ref = sectionRefs[section];
      if (ref && ref.current) {
        const offset = 100; // Ajustar este valor para la altura real del Navbar
        const elementTop = ref.current.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: elementTop - offset,
          behavior: 'smooth',
        });
      }
    }

  useEffect(() => {
  }, [])

  return (
  <>
    <section className="min-h-screen w-full bg-cover bg-center bg-no-repeat bg-fixed" style={{ backgroundImage: "url('/images/KidsBackgound.jpg')" }} ref={homeSectionRef}>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-[113%] bg-black/30 z-0 pointer-events-none"></div>

      <main className="relative z-10 flex justify-start items-center w-full h-screen px-4 sm:px-8">
        <div className="max-w-[750px] text-center sm:text-left">
          <p className="text-base sm:text-lg md:text-xl lg:text-3xl text-white">
            Trabajamos para mejorar la calidad de vida de comunidades vulnerables, ofreciendo soluciones sostenibles e integrales. Unimos esfuerzos con aliados públicos y privados para generar un impacto social positivo, promoviendo la inclusión, el desarrollo y la solidaridad.
          </p>
          <div className="mt-5">
            <button className="bg-blue-500 hover:bg-blue-700 hover:scale-90 active:scale-75 transition py-2 px-4 sm:py-3 sm:px-6 rounded-md text-white font-semibold text-sm sm:text-base cursor-pointer">
              Únete con nosotros
            </button>
          </div>
        </div>
      </main>

      <footer className="absolute bottom-8 left-1/2 -translate-x-1/2 px-4 w-full sm:w-auto z-10">
        <div className="mx-auto w-full sm:w-auto flex justify-center items-center text-xs sm:text-sm md:text-md lg:text-base max-w-full sm:max-w-sm md:max-w-md lg:max-w-lg">
          <a
            href="https://www.google.com/maps/place/Cra.+15+%23+9A-4,+Pitalito,+Huila"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-center"
          >
            <FaLocationDot className="text-base sm:text-lg md:text-xl lg:text-2xl mx-2 text-white" />
            <p className="text-white hover:underline active:scale-90 transition">
              Cra 15 #9A - 04, Barrio Cálamo. Pitalito - Huila, Colombia
            </p>
          </a>
        </div>
      </footer>
    </section>

    <section className='relative mb-3 bg-[#fdfdfd]/31' ref={quienesSomosSectionRef}> 
      <ContenidoUno/>
    </section>
    {/*    
    <section className='h-screen relative bg-[#ffffff]' ref={nuestroSectionRef}>
      <MisionYVisionPage/>
    </section>

    <section className='relative bg-[#fafafa]' ref={trabajaConNosotrosSectionRef}>
      <ValoresPages/>
    </section> 
    <section className='relative bg-[#fafafa]' ref={trabajaConNosotrosSectionRef}>
      <InformacionVeinteCuatro/>
    </section>  */}
  </>
)

}

export default Home



