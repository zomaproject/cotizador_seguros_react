import { Fragment} from "react"
import { MARCAS, PLANES, YEARS } from "../constants"
import useCotizador from "../hooks/useCotizador"
import Error from "./Error"

export default function Formulario() {
  const {handleChangeDatos, datos, error, setError, cotizar }   = useCotizador()
  const {marca, year} = datos
  const handleSubmit = (e) => {
    e.preventDefault()
    if(Object.values(datos).includes('')){
      setError('Todos los campos son obligatorios')
      return 
    }
    setError('')
    // TODO: Cotizar

    cotizar()
  }

  return (
    <>
      <form
      onSubmit={e => handleSubmit(e)}
      >
        {error && <Error/>}
        <div className="my-5">
          <label className="block mb-3 font-bold text-gray-400 uppercase ">
            Marca
          </label>
          <select name="marca" id=""
            className="w-full p-3 bg-white border border-gray-200"
            onChange={ e=> handleChangeDatos(e)}
            value= {marca}
          >
            <option value=''> --Seleccione la Marca -- </option>
            {MARCAS.map(marca => ( 
             <option key={marca.id} value={marca.nombre}>{marca.nombre}</option> 
            ))}
          </select>
        </div>

        <div className="my-5">
          <label className="block mb-3 font-bold text-gray-400 uppercase ">
            Año
          </label>
          <select name="year" id=""
            className="w-full p-3 bg-white border border-gray-200"
            onChange={e=> handleChangeDatos(e)}
            value={year}
          >
            <option value=''> --Selecciones el año -- </option>
            {YEARS.map(year => ( 
             <option key={year} value={year}>{year}</option> 
            ))}
          </select>
        </div>

        <div className="my-5">
          <label className="block mb-3 font-bold text-gray-400 uppercase ">
            Elige un Plan
          </label>
          <div className="flex gap-3 items-center">
            {PLANES.map(plan => (
            <Fragment key ={plan.id} >
              <label>
                {plan.nombre}
              </label>
              <input type={'radio'}
                name='plan'
                value={plan.nombre}
                onChange={e=> handleChangeDatos(e)}
                />
            </Fragment>
            ))}
          </div>
        </div>
        <input type={'submit'} className = 'w-full bg-indigo-500 p-3 hover:bg-indigo-600 text-white cursor-pointer transition-colors font-bold'
        value={'Cotizar'}
          
        />

      </form>
    </>
  )
}
