import React from 'react'

export const NuevoPresupuesto = ({presupuesto ,setPresupuesto}) => {
  return (
    <div className='contenedor-presupuesto contenedor sombra'>

      <form className='formulario'>
        <div className='campo'>
          <label >Definir Presupuesto</label>
          <input className='nuevo-presupuesto' type="text" placeholder='Añade tu Presupuesto' value={presupuesto} onChange={e=> setPresupuesto(e.target.value)}/>
        </div>
        <input type="submit" value='Añadir' />
      </form >
    </div>


  )
}


