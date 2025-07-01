
function MisionYVisionPage() {
  return (
    <>
      <main className='min-h-screen pt-14 border-t border-t-stone-300 px-4 sm:px-6 md:px-12'>
       <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Misión */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:scale-95 transition border-2 border-gray-200 pt-5">
              <img
                src="/images/CardImages/photo7.png"
                alt="Imagen Misión"
                className="w-full object-none px-6"
              />
              <div className="p-6">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#474747]">Misión</h1>
                <p className="text-sm sm:text-base mt-4 text-[#666666] leading-7">
                  Trabajamos incansablemente para mejorar la calidad de vida de las comunidades vulnerables, brindando soluciones integrales y sostenibles a sus necesidades. Nos dedicamos a generar un impacto social positivo mediante la unión de esfuerzos con entidades públicas y privadas, ofreciendo servicios de alta calidad con enfoque en inclusión, solidaridad y desarrollo integral.
                </p>
              </div>
            </div>

            {/* Visión */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:scale-95 transition border-2 border-gray-200 pt-5">
              <img
                src="/images/CardImages/photo8.png"
                alt="Imagen Visión"
                className="w-full object-none px-6"
              />
              <div className="p-6">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#474747]">Visión</h1>
                <p className="text-sm sm:text-base mt-4 text-[#666666] leading-7">
                  Ser reconocidos a nivel nacional como una fundación líder en la generación de impacto social, destacándonos por nuestra capacidad de transformar realidades a través de proyectos innovadores, sostenibles y colaborativos. Aspiramos a crecer constantemente, expandiendo nuestra cobertura y fortaleciendo alianzas que nos permitan construir un futuro más equitativo y próspero para todos.
                </p>
              </div>
            </div>
          </div>
      </main>
    </>
  )
}

export default MisionYVisionPage


