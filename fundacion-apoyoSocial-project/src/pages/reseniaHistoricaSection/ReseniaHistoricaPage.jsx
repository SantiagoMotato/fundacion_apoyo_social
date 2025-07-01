import ContenidoDos from '../contenidoHome/contenidoDos'

function ReseniaHistoricaPage() {
  return (
    <>
      <main className='min-h-screen bg-white text-[#474747]'>
        <div className='relative top-20 w-full px-4 sm:px-6 md:px-12 lg:px-24 font-bold'>
          <div className='max-w-4xl mx-auto'>
            <h1 className='sm:mb-6  text-2xl sm:text-3xl md:text-4xl'>
              Reseña Histórica de la Fundación Apoyo Social:
            </h1>

            <div className='text-sm sm:text-base font-normal text-[#666666] space-y-4'>
              <p>
                La Fundación Apoyo Social nació en el año 2002 en el departamento del Cesar con el propósito de aportar al desarrollo y bienestar de las comunidades más vulnerables. Desde sus inicios, se ha caracterizado por su compromiso con la mejora de las condiciones de vida de las poblaciones a las que sirve, enfocándose en brindar soluciones sostenibles y de alto impacto social.
              </p>

              <p>
                A lo largo de más de dos décadas, hemos crecido a nivel nacional, ampliando nuestra cobertura y fortaleciendo nuestras alianzas con entidades públicas y privadas. Hoy, nuestra sede principal se encuentra en el departamento del Huila, desde donde continuamos trabajando para generar cambios significativos en las comunidades.
              </p>

              <p>
                La Fundación ha sido un puente entre las necesidades de la población y los recursos de las instituciones, brindando servicios como apoyo logístico, entrega de alimentos, atención integral en salud, actividades pedagógicas y desarrollo psicosocial. Nuestra experiencia incluye colaboraciones exitosas con alcaldías, gobernaciones, empresas privadas, el Instituto Colombiano de Bienestar Familiar (ICBF) y otros organismos nacionales.
              </p>

              <p>
                Nos distinguimos por trabajar con un enfoque integral, uniendo esfuerzos y recursos para brindar soluciones efectivas a quienes más lo necesitan. Con una visión clara de mejora continua, seguimos prestando nuestros servicios con la misma pasión y compromiso que nos caracteriza, siempre orientados hacia la construcción de un futuro más equitativo y sostenible para todos.
              </p>
            </div>
          </div>
        </div>
      </main>

      <section className='relative mb-3 bg-[#fdfdfd]/31'> 
        <ContenidoDos/>
      </section>
    </>
  )
}

export default ReseniaHistoricaPage
