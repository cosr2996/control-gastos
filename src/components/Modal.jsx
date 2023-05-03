import React from "react";
import cerrarBtn from "../img/cerrar.svg";

export const Modal = ({ setModal ,animarModal,setAnimarModal}) => {
  const ocultarModal = () => {
    
    setAnimarModal(false)

    setTimeout(() => {
        setModal(false)
    }, 500);

  };

  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img
          src={cerrarBtn}
          alt="boton de cerrar modal"
          onClick={ocultarModal}
        />
      </div>

      <form className={`formulario ${animarModal ? "animar":'cerrar' }`}>
        <legend>Nuevo Gasto</legend>

        <div className="campo">
            <label htmlFor="nombre">Nombre Gasto</label>
            <input id="nombre" type="text" placeholder="Añade un nuevo gasto" />
        </div>
        <div className="campo">
            <label htmlFor="cantidad">Cantidad</label>
            <input id="cantidad" type="number" placeholder="Añade la cantidad del gasto ej. 300" />
        </div>
        <div className="campo">
            <label htmlFor="categoria">Categoria</label>
            <select id="categoria">
                <option value="">-- Seleccione --</option>
                <option value="ahorro">Ahorro</option>
                <option value="comida">Comida</option>
                <option value="casa">Casa</option>
                <option value="ocio">Ocio</option>
                <option value="salud">Salud</option>
                <option value="suscripciones">Suscripciones</option>
                <option value="gastos">Gastos Varios</option>
            </select>

        </div>
        <input type="submit" value="Añadir Gasto"/>
      </form>
    </div>
  );
};
