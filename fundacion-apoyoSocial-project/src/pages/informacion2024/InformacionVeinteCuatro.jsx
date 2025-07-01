import React from 'react'
import { FaDownload } from 'react-icons/fa';

const archivos = [
  {
    nombre: '141166229581',
    url: '/PDFs/141166229581.pdf',
    descargarComo: '01.pdf',
  },
  {
    nombre: 'ESTADO DE SITUACION FINANCIERA ',
    url: '/PDFs/ESFI 2024 + RV FIS.pdf',
    descargarComo: '01.pdf',
  },
  {
    nombre: 'NOTAS A LOS ESTADOS FINANCIEROS',
    url: '/PDFs/NOTAS 2024 + RV FIS.pdf',
    descargarComo: '01.pdf',
  },
  {
    nombre: 'DECLARACIÓN DE RENTA',
    url: '/PDFs/RENTA 2024 - FUNAS.pdf',
    descargarComo: '01.pdf',
  },
];

function InformacionVeinteCuatro() {
  return (
    <>
      <main className='w-full min-h-screen pt-28 px-4 pb-10 bg-gray-50'>
      <h1 className='text-3xl font-bold text-center text-gray-800 mb-8'>
        Información 2024
      </h1>

      <div className="overflow-x-auto  md:px-10 lg:px-24">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-200 text-gray-700 text-sm uppercase hidden sm:table-header-group">
            <tr>
              <th className="px-6 py-3 text-left">Nombre del archivo</th>
              <th className="px-6 py-3 text-center">Acción</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {archivos.map((archivo, index) => (
              <tr
                key={index}
                className="block sm:table-row border-b border-gray-200 sm:border-0 sm:hover:bg-gray-100"
              >
                <td className="block sm:table-cell px-6 py-4 font-medium">
                  <span className="sm:hidden block text-gray-500 text-xs uppercase mb-1">Nombre del archivo:</span>
                  {archivo.nombre}
                </td>
                <td className="block sm:table-cell px-6 py-4 text-center">
                  <span className="sm:hidden block text-gray-500 text-xs uppercase mb-1">Acción:</span>
                  <a
                    href={archivo.url}
                    download={archivo.descargarComo}
                    className="inline-flex items-center px-3 py-2 bg-blue-500 text-white text-sm font-medium rounded hover:bg-blue-600 transition"
                  >
                    <FaDownload className="mr-2" />
                    Descargar
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
    </>
  )
}

export default InformacionVeinteCuatro
