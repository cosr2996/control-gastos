import React from 'react'

export const ControlPresupuesto = ({presupuesto}) => {
  return (
    <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
        <div>
            <p>grafica aqui"</p>
        </div>
        <div className='contenido-presupuesto'>
            <p>
                <span>Presupuesto: </span>${presupuesto}
            </p>
        </div>
    </div>
  )
}
