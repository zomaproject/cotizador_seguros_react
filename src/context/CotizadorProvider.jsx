import { createContext, useState } from "react";
import { calcularMarca, calcularPlan, formatearDinero, obtenerDiferenciaYear } from "../helpers";


const CotizadorContext = createContext()

const CotizadorProvider = ({children})  => {

  const [datos, setDatos] = useState({
      year: '',
      plan: '',
      marca: '',
    })
  const [error, setError] = useState('')

  const [resultado, setResultado] = useState(0)
  const [cargando, setCargando] = useState(false)

  const handleChangeDatos  = (e)=> {
    setDatos({
      ...datos,
      [e.target.name] : e.target.value
    })
  }

  const cotizar = () => {
    let resultado = 2000
    const diferenciaYear = obtenerDiferenciaYear(datos.year)
    // restar el 3% por cada year de diferencia
    resultado -= ((diferenciaYear * 0.03)) * resultado
    //Aumentar 
    // Americano 15%
    // Europeo 30%
    // Asiatico 5%
    resultado  *= calcularMarca(datos.marca) 
    // Basic 20%
    // Completo 50%
    resultado *= calcularPlan(datos.plan)
    resultado = formatearDinero(resultado)

    setCargando(true)
    setTimeout(() => {
      setResultado(resultado)
      setCargando(false)
    }, 3000);
  }


  return (
    <CotizadorContext.Provider
      value={{
        datos,
        error,
        cargando,
        setError,
        handleChangeDatos,
        cotizar,
        resultado
      }}
    >
        {children}
    </CotizadorContext.Provider>
  )
}

export {
  CotizadorProvider
}

export default CotizadorContext