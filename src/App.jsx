import { useState,useEffect } from "react";
import Header from "./components/header";
import { Modal } from "./components/Modal";
import IconoNuevoGasto from "./img/add.svg";
import { generarId } from "./helpers/index";
import { ListadoGastos } from "./components/ListadoGastos";

function App() {
  const [presupuesto, setPresupuesto] = useState(0);
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);
  const [modal, setModal] = useState(false);
  const [animarModal, setAnimarModal] = useState(false);
  const [gastos, setGastos] = useState([]);
  const [gastoEditar,setGastoEditar] = useState({})


  useEffect(()=>{
    if(Object.keys(gastoEditar).length>0){
      setModal(true);
      setTimeout(() => {
        setAnimarModal(true);
      }, 500);
    }
  },[gastoEditar])

  const handleNuevoGasto = () => {
    setModal(true);
    setGastoEditar({})

    setTimeout(() => {
      setAnimarModal(true);
    }, 500);
  };

  const guardarGasto = (gasto) => {
    if(gasto.id){
      const gastosActualizados = gastos.map(gastoState => gastoState.id === gasto.id ? gasto:gastoState)
      setGastos(gastosActualizados)
    }else{
      //? NUEVO GASTO
       gasto.id = generarId();
     gasto.fecha =Date.now()
    setGastos([...gastos, gasto]);
    }

   

    setAnimarModal(false);
    setTimeout(() => {
      setModal(false);
    }, 500);
  };

  return (
    <div className={modal?'fijar':''}>
      <Header
      gastos={gastos}
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidPresupuesto={isValidPresupuesto}
        setIsValidPresupuesto={setIsValidPresupuesto}
      />

      {isValidPresupuesto && (
        <>
          <main>
            <ListadoGastos 
              gastos={gastos}
              setGastoEditar={setGastoEditar}
            />
          </main>
          <div className="nuevo-gasto">
            <img
              src={IconoNuevoGasto}
              alt="icono nuevo gasto"
              onClick={handleNuevoGasto}
            />
          </div>
        </>
      )}

      {modal && (
        <Modal
          setModal={setModal}
          animarModal={animarModal}
          setAnimarModal={setAnimarModal}
          guardarGasto={guardarGasto}
          gastoEditar={gastoEditar}
        />
      )}
    </div>
  );
}

export default App;
