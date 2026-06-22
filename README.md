# Simulador de Presupuestos y Control de Stock

## Descripci¨®n

Aplicaci¨®n de consola desarrollada en Node.js que simula la gesti¨®n de un inventario y la generaci¨®n de presupuestos de venta.

El sistema permite:

* Consultar un cat¨¢logo de productos.
* Simular la venta de art¨ªculos.
* Calcular subtotales.
* Aplicar descuentos por volumen de compra.
* Calcular impuestos (IVA).
* Actualizar el stock disponible.

## Est¨¢ndar de m¨®dulos seleccionado

El proyecto utiliza el est¨¢ndar **ECMAScript Modules (ESM)** de JavaScript.

Por este motivo se configur¨® el archivo `package.json` con:

```json
{
  "type": "module"
}
```

Esto permite utilizar las sentencias:

```javascript
import ...
export ...
```

para organizar el c¨®digo en m¨®dulos independientes.

## Estructura del proyecto

```text
proyecto-node/
©¦
©À©¤©¤ package.json
©À©¤©¤ index.js
©À©¤©¤ calculosMatematicos.js
©À©¤©¤ baseDeDatosSimulada.js
©À©¤©¤ formateoVisual.js
©¸©¤©¤ README.md
```

## Requisitos

* Node.js v18 o superior
* Git

## Instrucciones para clonar el repositorio

```bash
git clone https://github.com/USUARIO/NOMBRE-REPOSITORIO.git
```

Ingresar al directorio del proyecto:

```bash
cd NOMBRE-REPOSITORIO
```

## Instalaci¨®n

Este proyecto no posee dependencias externas.

En caso de agregarse dependencias en el futuro, ejecutar:

```bash
npm install
```

## Ejecuci¨®n

Ejecutar el programa con:

```bash
node index.js
```

## Funcionalidades implementadas

### Base de datos simulada

Contiene un cat¨¢logo de productos con:

* ID
* Nombre
* Precio
* Stock disponible

### C¨¢lculos matem¨¢ticos

Implementa:

* C¨¢lculo de subtotal
* Aplicaci¨®n de descuento del 10%
* C¨¢lculo de IVA (21%)
* Actualizaci¨®n de stock

### Formateo visual

Implementa:

* Formato de moneda
* T¨ªtulos y encabezados para la consola

### Programa principal

* Muestra inventario inicial
* Simula una venta de tres productos
* Calcula subtotal, descuento e IVA
* Muestra el total a pagar
* Actualiza y muestra el stock final

## Integrantes

* Tobias Leal
* Lautaro Molina
* Lautaro Cejas