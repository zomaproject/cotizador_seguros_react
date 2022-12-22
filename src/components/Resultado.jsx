import { useRef } from "react"
import useCotizador from "../hooks/useCotizador"

export default function Resultado() {
  const { resultado, datos } = useCotizador()
  const { marca, plan, year } = datos
  if (!resultado) {
    return null
  }
  const marcaRef = useRef(marca)
  const yearRef = useRef(year)
  const planRef = useRef(plan)
  return (
    <div className="bg-gray-100 text-center mt-5 shadow p-3">
      <h2 className="text-gray-600 font-black text-3xl"> Resumen</h2>
    <p className="my-2" ><span className="font-bold">
        Marca: </span>
        {marcaRef.current}
      </p>

      <p className="my-2"><span className="font-bold">
        Plan: </span>
        {planRef.current}
      </p>

      <p className="my-2"><span className="font-bold">
        Año: </span>
        {yearRef.current}
      </p>

      <p className="my-2 text-2xl"><span className="font-bold ">
        Total Cotización: </span>
        {resultado}
      </p>
    </div>

  )
}
