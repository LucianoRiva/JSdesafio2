/*function calcularPrecio (precioCemento, cantidadCemento, descuentoContado) {
    let descuento = (precioCemento * descuentoContado) / 100;
    let precioConDescuento = precioCemento - descuentoContado;    
   return (descuentoContado * cantidadCemento);
}
let precioCemento = parseFloat(prompt("Ingresar precio cemento:"));

let cantidadCemento = parseInt(prompt("Ingresar cantidad a comprar"));

let descuentoContado = parseInt(prompt("Ingresar descuento"));

//Precio final por pago efectivo
let precioFinal = calcularPrecio(precioCemento, cantidadCemento, descuentoContado);
alert("A pagar" + precioFinal);
*/



//Aplicando descuento por pago contado en corralon de materiales
/*
const suma = (a,b) => a + b
const resta = (a,b) => a - b
const iva = x => x * 0.21
const guiño = x => x * 0.11
let precioCemento = 130000
let descuentos = 13000
let precioFinal01 = resta(suma(precioCemento, iva(precioCemento)), descuentos )
console.log (precioFinal01)
*/
/*
var cantidad,precio,descuento,compra,pagar;

	precio = parseFloat(prompt("Ingresar precio hs de Bobcat"));
	cantidad = parseFloat(prompt("Ingresar cantidad de horas trabajadas"));

	compra = precio*cantidad;
	descuento = compra*0.11;
	pagar = compra-descuento;

	document.write("El descuento es: "+ descuento);
	document.write("El total a pagar es: "+ pagar);

	*/

	//ARRAYS

	function sumInput() {

		let numbers = [];
	  
		while (true) {
	  
		  let value = prompt("Colocar horas necesarias de maquina...", 0);
	  
		  //Break
		  if (value === "" || value === null || !isFinite(value)) break;
	  
		  numbers.push(+value);
		}
	  
		let sum = 0;
		for (let number of numbers) {
		  sum += number;
		}
		return sum;
	  }
	  
	  alert( sumInput() );



//Articulos a comercializar
	  const articles = ["Cemento", "arena de roca", "arena del lago", "piedra bocha"];
	  console.log(articles);

	  //sumando un articulo
	  articles.push("viguetas");
	  console.log(articles);

	  //quitando un articulo
	  articles.pop();
	  console.log(articles);