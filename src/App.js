 // productos variedad
import { validarProductoRepetido } from "./accionesCarrito.js";
import { actualizarTotalesCarrito } from "./actualizarCarrito.js";
import { productos } from "./stock.js";
import { obtenerCarritoStorage } from "./storage.js";

const mostrarProductos = (productos) => {
const contenedorProductos = document.getElementById("producto-contenedor");

  contenedorProductos.innerHTML= "";

  productos.forEach(producto => {
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML += `<div class="card-image">
                        <img src=${producto.img}>
                        <span class="card-title">${producto.nombre}</span>
                        <a class="btn-floating halfway-fab wabes-effect waves-light red" id=boton${producto.id}><i class="material-icons">add_shopping_cart</i></a>
                      </div>
                      <div class="card-content">
                          <p>${producto.desc}</p>
                          <p>Talle: ${producto.talle}</p>
                          <p>${producto.precio}</p>
                      </div>
                     `
    contenedorProductos.appendChild(div);

    const boton = document.getElementById(`boton${producto.id}`);
    boton.addEventListener("click", () => {
      validarProductoRepetido(producto.id);
    });
  });
};

//--->Funcion para vaciar carrito  si se aprieta btn VACIAR CARRITO<---//
const carritoVacio = () => {
  const VaciarCarrito = document.getElementById("mybtn");
  VaciarCarrito.addEventListener("click", () => {
      carritoCompra.splice(0, 9)
      const totalCantidad = document.getElementById("totalCantidad");
      const totalCompra = document.getElementById("totalCompra");
      carritoProducto.innerHTML = `0`;
      carritoPrecio.inntertext = `0`;
          Swal.fire({
          icon: "success",
          title: "Carrito vacio correctamente!",
          text: "Su carrito se encuentra sin productos",
      });
      borrarStorage("carrito");
      formulario.reset()
      actualizarTotalesCarrito.innerText = 0;
      productos.innerText = `0`;
      obtenerCarritoStorage.innerText = `0`
  });
}
export { mostrarProductos };