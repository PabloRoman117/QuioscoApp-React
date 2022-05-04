import React from 'react'
import Image from 'next/image'
import { formatearDinero } from '../helpers'
import useQuiosco from '../Hooks/useQuiosco'


const Producto = ({producto}) => {
    const { handleSetProducto, handleChangeModal} = useQuiosco();

    const {nombre, imagen, precio} = producto
  return (
    <div className='border p-3 rounded-md shadow-xl hover: -translate-y-1 hover:scale-105  duration-300'>
        <Image
            src={`/assets/img/${imagen}.jpg`} 
            alt={`Imagen Platillo ${nombre}`}
            width={400}
            height={500}
        />

        <div className='p-5'>
            <h3 className='text-2xl font-bold'>{nombre}</h3>
            <p className='mt-5 font-black text-4xl text-amber-400'>
                {formatearDinero(precio)}
            </p>

            <button
                type='button'
                className='bg-indigo-600 rounded-xl  hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold hover: -translate-y-1 hover:scale-110  duration-300'
                onClick={() => {
                    handleChangeModal()
                    handleSetProducto(producto);
                } }
            >
                Agregar
            </button>
        </div>

    </div>
  )
}

export default Producto