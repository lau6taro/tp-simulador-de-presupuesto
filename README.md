# Simulador de Presupuestos y Control de Stock

## Descripción

Aplicación de consola desarrollada en Node.js que simula la gestion de un inventario y la generacion de presupuestos de venta.

El sistema permite:

* Consultar un catalogo de productos.
* Simular la venta de articulos.
* Calcular subtotales.
* Aplicar descuentos por volumen de compra.
* Calcular impuestos (IVA).
* Actualizar el stock disponible.

## Estandar de modulos seleccionado

El proyecto utiliza el estandar **ECMAScript Modules (ESM)** de JavaScript.

Por este motivo se configura el archivo `package.json` con:

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

para organizar el codigo en modulos independientes.

## Estructura del proyecto

```text
proyecto-node/
 package.json
 index.js
 calculosMatematicos.js
 baseDeDatosSimulada.js
 formateoVisual.js
 README.md
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

## Instalacion

Este proyecto no posee dependencias externas.

En caso de agregarse dependencias en el futuro, ejecutar:

```bash
npm install
```

## Ejecucion

Ejecutar el programa con:

```bash
node index.js
```

## Funcionalidades implementadas

### Base de datos simulada

Contiene un catalogo de productos con:

* ID
* Nombre
* Precio
* Stock disponible

### Calculos matematicos

Implementa:

* Calculo de subtotal
* Aplicacion de descuento del 10%
* Calculo de IVA (21%)
* Actualizacion de stock

### Formateo visual

Implementa:

* Formato de moneda
* Titulos y encabezados para la consola

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
