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




function calcularPrecio (precioCemento, cantidadCemento, descuentoContado) {
     let descuento = (precioCemento * descuentoContado) / 100;
     let precioConDescuento = precioCemento - descuentoContado;    
    return (descuentoContado * cantidadCemento);
}
let cemento = parseFloat(prompt("Ingresar precio cemento:"));
let cantidad = parseInt(prompt("Ingresar cantidad a comprar"));
let descuento = parseInt(prompt("Ingresar descuento"))  

//Precio final por pago efectivo
let precioFinal = calcularPrecio(precioCemento, cantidadCemento, descuentoContado);
alert("A pagar" + precioFinal);
