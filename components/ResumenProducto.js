import React from 'react'
import Image from 'next/image'
import {formatearDinero} from '../helpers/index'
import useQuiosco from "../Hooks/useQuiosco"
const ResumenProducto = ({producto}) => {
  const {handleEditarCantidades , handleEliminarProducto} = useQuiosco();
  return (
    <div className="shadow-lg p-5 rounded-lg  mb-3 flex gap-10 items-center  hover: -translate-y-1 hover:scale-105  duration-300">
      <div className="md:w-1/6">
        <Image
          width={300}
          height={400}
          alt={`Imagen producto ${producto.nombre}`}
          src={`/assets/img/${producto.imagen}.jpg`}
        />
      </div>

      <div className="md:w-4/6">
        <p className="text-3xl font-bold "> {producto.nombre} </p>
        <p className="text-xl font-bold mt-2 ">
          {" "}
          Cantidad: {producto.cantidad}{" "}
        </p>
        <p className="text-xl font-bold text-amber-500 mt-2 ">
          {" "}
          Precio: {formatearDinero(producto.precio)}{" "}
        </p>
        <p className="text-sm text-gray-700 font-bold  mt-2 ">
          {" "}
          Subtotal: {formatearDinero(producto.precio * producto.cantidad)}{" "}
        </p>
      </div>

      <div>
        <button
          type="button"
          className="bg-sky-700 flex gap-2 px-5 py-2 text-white rounded-xl font-bold uppercase shadow-md w-full hover:bg-sky-800 hover: -translate-y-1 hover:scale-105  duration-300 "
          onClick={()=> handleEditarCantidades(producto.id)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
            />
          </svg>
          Editar
        </button>
        <button
          type="button"
          className="bg-red-700 flex gap-2 px-5 py-2 text-white rounded-xl font-bold uppercase shadow-md w-full mt-5 hover:bg-red-800 hover: -translate-y-1 hover:scale-105  duration-300 "
          onClick={() => handleEliminarProducto(producto.id)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
          Eliminar
        </button>
      </div>
    </div>
  );
}

export default ResumenProducto