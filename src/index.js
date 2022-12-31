 
import { mostrarProductos } from "./App.js";
import { productos } from "./stock.js";
import { obtenerCarritoStorage } from "./storage.js";
import { pintarCarrito } from "./accionesCarrito.js";
import { actualizarTotalesCarrito } from "./actualizarCarrito.js";

document.addEventListener('DOMContentLoaded', () => {
    mostrarProductos(productos);

    if (localStorage.getItem("carrito")) {
        const carrito = obtenerCarritoStorage();
        pintarCarrito(carrito);
        actualizarTotalesCarrito(carrito);
    };
});

listaProductos.addEventListener("click", agregarProducto);

$("carrito").click(carrito, quitarProducto);

$("vaciar-carrito").click(vaciarCarrito, borrarCarrito);
