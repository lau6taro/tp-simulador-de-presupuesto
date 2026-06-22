// Genera títulos visuales
export function titulo(texto) {
 return `\n========== ${texto.toUpperCase()} ==========`;
}

// Formatea valores monetarios
export function moneda(valor) {
 return `$${valor.toFixed(2)}`;
}
