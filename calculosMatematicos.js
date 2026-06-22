// Calcula el subtotal de la venta
export function calcularSubtotal(productosVendidos) {
 let subtotal = 0;
 for (let producto of productosVendidos) {
   subtotal += producto.precio * producto.cantidad;
 }
 return subtotal;
}

// Aplica descuento del 10%
export function aplicarDescuento(subtotal) {
 return subtotal > 100000 ? subtotal * 0.10 : 0;
}

// Calcula IVA del 21%
export function calcularIVA(monto) {
 return monto * 0.21;
}

// Actualiza stock
export function actualizarStock(producto, cantidadVendida) {
 producto.stock -= cantidadVendida;
}
