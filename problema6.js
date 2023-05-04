const PRECIO_CARNE = 250;
const PRECIO_LACTEOS = 80;
const PRECIO_ENLATADOS = 45;
const MIN_PRODUCTOS = 1;
const MAX_PRODUCTOS = 6;

const DESCUENTO_CARNE = 0.25;
const DESCUENTO_LACTEOS = 0.50;
const DESCUENTO_ENLATADOS = 0.70;

let avisoBienvenida = confirm("Supermercados Devs & Food");
let informacionAlCliente = confirm("Aviso importante: \n25% de descuento en carne \n50% de descuento en lacteos \n70% de descuento en enlatados");
let avisoCompra = confirm("Ingrese a continuacion su compra");
let compraCarne = parseFloat(prompt("Cuantos kilos de carne desea comprar? (minimo 1, maximo 6)"));
let compraLacteos = parseInt(prompt("Cuantos cartones de lacteos desea comprar? (minimo 1, maximo 6)"));
let compraEnlatados = parseInt(prompt("Que cantidad de enlatados desea comprar? (minimo 1, maximo 6)"));

let montoTotalCarne = 0;
let montoTotalLacteos = 0;
let montoTotalEnlatados = 0;


if (compraCarne >= MIN_PRODUCTOS && compraCarne <= MAX_PRODUCTOS) {
  montoTotalCarne = compraCarne * PRECIO_CARNE * (1 - DESCUENTO_CARNE);
  document.write("El precio por los kilos ingresados es de : " + montoTotalCarne + " pesos<br>");
}

if (compraLacteos >= MIN_PRODUCTOS && compraLacteos <= MAX_PRODUCTOS) {
  montoTotalLacteos = compraLacteos * PRECIO_LACTEOS * (1 - DESCUENTO_LACTEOS);
  document.write("El precio por la cantidad de cartones es de: " + montoTotalLacteos + " pesos<br>");
}

if (compraEnlatados >= MIN_PRODUCTOS && compraEnlatados <= MAX_PRODUCTOS) {
  montoTotalEnlatados = compraEnlatados * PRECIO_ENLATADOS * (1 - DESCUENTO_ENLATADOS);
  document.write("El precio por la cantidad de enlatados es de: " + montoTotalEnlatados + " pesos<br>");
}

let montoTotalCompra = montoTotalCarne + montoTotalLacteos + montoTotalEnlatados;

if (montoTotalCompra > 0) {
  document.write("El monto total de la compra con los descuentos correspondientes es de: " + montoTotalCompra + " pesos");
} 

else {
  document.write("Hubo un error intente nuevamente");
}
