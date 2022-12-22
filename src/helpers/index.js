export function obtenerDiferenciaYear(year) {
  return new Date().getFullYear() - year;
}

export function calcularMarca(marca) {
  let incremento;

  switch (marca) {
    case "Europeo":
      incremento = 1.3;
      break;
    case "Americano":
      incremento = 1.15;
      break;
    case "Asiatico":
      incremento = 1.05;
      break;
    default:
      break;
  }
  return incremento;
}

export function calcularPlan (plan) {
  return (plan === 'Basico') ? 1.20 : 1.50;
}

export  function formatearDinero  (cantidad) {
    return cantidad.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
}