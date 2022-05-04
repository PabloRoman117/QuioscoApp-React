import {useRouter} from 'next/router'

const pasos = [
    {paso: 1 , nombre: 'Menu', url: '/'},
    {paso: 2 , nombre: 'Resumen', url: '/resumen'},
    {paso: 3 , nombre: 'Total', url: '/total'},
   
]


import React from 'react'

const Pasos = () => {

   

    const router = useRouter()

    const calcularProgreso = () => {
        let valor 
        if(router.pathname === "/"){
            valor = 5
        }else if(router.pathname === "/resumen"){
            valor = 50
        }else{
            valor = 100
        }
        return valor;
    }
  return (
    <>
        <div className='flex justify-between mb-5 mr-8 mt-5'>
            {pasos.map(paso => (
                <button
                    onClick={() => {
                        router.push(paso.url)
                    }}
                    className='text-2xl font-bold'
                    key={paso.paso}>
                    {paso.nombre}
                </button>
            ))}
        </div>

        <div className='bg-gray-100  mb-10  mr-8'>
            <div className='rounded-xl bg-amber-500  text-xs leading-none h-2 text-center 
            text-white' style={{width: `${calcularProgreso()}%`}}>

            </div>
        </div>
    
    
    </>
  )
}

export default Pasos