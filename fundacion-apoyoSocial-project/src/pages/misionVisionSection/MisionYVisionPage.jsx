
function MisionYVisionPage() {
  return (
    <>
      <main className='min-h-screen pt-14 border-t border-t-stone-300 px-4 sm:px-6 md:px-12'>
        <div className='w-full h-full flex flex-col md:flex-row justify-between gap-y-10 md:gap-x-20 lg:gap-x-40'>
          {/* Misión */}
          <div className='md:w-1/2'>
            <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold text-[#474747] pt-6'>Misión</h1>
            <p className='text-sm sm:text-base mt-4 text-[#666666] leading-7'>
              Trabajamos incansablemente para mejorar la calidad de vida de las comunidades vulnerables, brindando soluciones integrales y sostenibles a sus necesidades. Nos dedicamos a generar un impacto social positivo mediante la unión de esfuerzos con entidades públicas y privadas, ofreciendo servicios de alta calidad con enfoque en inclusión, solidaridad y desarrollo integral.
            </p>
          </div>

          {/* Visión */}
          <div className='md:w-1/2'>
            <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold text-[#474747] pt-6'>Visión</h1>
            <p className='text-sm sm:text-base mt-4 text-[#666666] leading-7'>
              Ser reconocidos a nivel nacional como una fundación líder en la generación de impacto social, destacándonos por nuestra capacidad de transformar realidades a través de proyectos innovadores, sostenibles y colaborativos. Aspiramos a crecer constantemente, expandiendo nuestra cobertura y fortaleciendo alianzas que nos permitan construir un futuro más equitativo y próspero para todos.
            </p>
          </div>
        </div>
      </main>
    </>
  )
}

export default MisionYVisionPage


