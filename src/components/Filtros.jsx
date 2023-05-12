import { useState, useEffect } from "react";

export const Filtros = ({filtro ,setFiltro}) => {
  return (
    <div className="filtros sombra contenedor">
      <form>
        <div className="campo">
          <label htmlFor="">Filtrar Gastos</label>
          <select value={filtro} onChange={e => setFiltro(e.target.value)}>
            <option value="">-- Todas las Categorias --</option>
            <option value="ahorro">Ahorro</option>
            <option value="comida">Comida</option>
            <option value="casa">Casa</option>
            <option value="ocio">Ocio</option>
            <option value="salud">Salud</option>
            <option value="invercion">Invercion</option>
            <option value="suscripciones">Suscripciones</option>
            <option value="gastos">Gastos Varios</option>
          </select>
        </div>
      </form>
    </div>
  );
};
