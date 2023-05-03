import React, { useState } from 'react'
import Mensaje from './Mensaje'

export const NuevoPresupuesto = ({presupuesto ,setPresupuesto,setIsValidPresupuesto}) => {

  const [mensaje,setMensaje] = useState('')

  const handlePresupuesto =(e)=>{
    e.preventDefault()
    
    if(!presupuesto||presupuesto<0){
      setMensaje('No es un presupuesto valido')
      return
    }
    setMensaje('')
    setIsValidPresupuesto(true)
  }

  return (
    <div className='contenedor-presupuesto contenedor sombra'>

      <form className='formulario' onSubmit={handlePresupuesto}>
        <div className='campo'>
          <label >Definir Presupuesto</label>
          <input className='nuevo-presupuesto' type="number" placeholder='Añade tu Presupuesto' value={presupuesto} onChange={e=> setPresupuesto(Number(e.target.value))}/>
        </div>
        <input type="submit" value='Añadir' />

        {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
         {/* el operador && se usa mucho en react para mostrar o ocultar elementos segun una condicion */}
        {/*  si mensaje es true entonces se renderiza el componente Mensaje */}
      </form >
    </div>


  )
}


