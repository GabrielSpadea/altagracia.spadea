// fetch
const lista = document.querySelector('#listado')

 fetch('/data.json')
     .then((response) => response.json())
     .then((data) => {
         data.forEach(producto => {
             const li = document.createElement('li')
             li.innerHTML = `
                 <h4>${producto.nombre}</h4>
                 <p>${producto.precio}</p>
             `
             lista.appendChild(li)
         })
     })
     
     async function consultarBd() {
        const resultado = await fetch("/js/productos.json");
        let datos = await resultado.json();
        dataProductos = datos;}

    function pagoTarjeta() {
            console.log("se realizara el pago con tarjeta Visa");}

    function borrarCarrito() {
                limpiarCarrito();
                articulosCarrito = [];
                guardarStorage();
            }
    
    