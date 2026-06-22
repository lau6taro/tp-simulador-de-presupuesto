import productos from "./baseDeDatosSimulada.js";
import { calcularSubtotal, aplicarDescuento, calcularIVA, actualizarStock } from "./calculosMatematicos.js";
import { titulo, moneda } from "./formateoVisual.js";

// Mostrar inventario inicial
console.log(titulo("Inventario Inicial"));

productos.forEach(producto => {
 console.log(`${producto.nombre} - Precio: ${moneda(producto.precio)} - Stock: ${producto.stock}`);
});

// Simulación de venta de 3 productos
const venta = [
 { producto: productos[0], cantidad: 2 },
 { producto: productos[1], cantidad: 3 },
 { producto: productos[2], cantidad: 1 }
];

const productosVendidos = venta.map(item => ({
 precio: item.producto.precio,
 cantidad: item.cantidad
}));

const subtotal = calcularSubtotal(productosVendidos);
const descuento = aplicarDescuento(subtotal);
const subtotalConDescuento = subtotal - descuento;
const iva = calcularIVA(subtotalConDescuento);
const total = subtotalConDescuento + iva;

console.log(titulo("Presupuesto"));
console.log("Subtotal:", moneda(subtotal));
console.log("Descuento:", moneda(descuento));
console.log("IVA:", moneda(iva));
console.log("Total:", moneda(total));

// Actualización de stock
for (let item of venta) {
 actualizarStock(item.producto, item.cantidad);
}

console.log(titulo("Stock Actualizado"));
productos.forEach(producto => {
 console.log(`${producto.nombre} - Stock: ${producto.stock}`);
});
