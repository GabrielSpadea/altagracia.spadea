const arrayProductos = [];
const producto1 = new Producto(1, 'manta', 2500);
const producto2 = new Producto(2, 'nidito', 4500);
const producto3 = new Producto(3, 'cambiador', 3000);
const producto4 = new Producto(4, 'cambiador de paseo', 5000);

arrayProductos.push(producto1, producto2, producto3, producto4);

//funcion para odenar precio
const ordenarPrecio = () => {
    arrayProductos.sort((a, b) => a.precio - b.precio);
    mostrarListaOrdenada();
};

const mostrarListaOrdenada = () => {
    let array = [];
    arrayProductos.forEach(producto => array.push(producto.nombre+' $'+producto.precio));
    alert('Lista de precios:'+'\n'+array.join('\n'));

};
ordenarPrecio();

function comprarProductos(){
    let productoNombre = '';
    let productoCantidad = 0;
    let total = 0;
    let continuarComprando = false;

    
    do {
        productoNombre = prompt('Que producto queres manta, nidito, cambiador?');
        productoCantidad = parseInt(prompt('cuantos queres comprar?'));

        const producto = arrayProductos.find(producto => producto.nombre === productoNombre);
        if (producto) {
            total += producto.precio * productoCantidad;
        } else('el producto no se encuentra en el catalogo');

        continuarComprando = confirm('Queres agregar mas productos?');
    } 
    while (continuarComprando)
    aplicarDescuento(total);
}  
// funcion descuento
function aplicarDescuento(totalCompra) {
    if (totalCompra >=5000) {
        totalCompra = totalCompra * 0.80;
        alert('tenes un 20% de descuento en tu compra');
    }
    calcularEnvio(totalCompra)
}

// funcion envio
function calcularEnvio(totalCompra) {
    let envioADomicilio = confirm('Queres envio a domicilio');

    if (envioADomicilio && totalCompra >= 5000) {
        alert('el envio será gratis. El total de tu compra es: '+totalCompra);
    } else if (envioADomicilio && totalCompra > 5000 && totalCompra !== 0) {
        totalCompra += 500;
        alert('el envio es de $500. el total de la compra es: '+totalCompra);
    } 
};

function comprar(){
    const quieroOrdenar =confirm('queres ordenar por precio?');
    if (quieroOrdenar) {
        ordenarPrecio
    }

    comprarProductos(); 

};

comprar();





/* inicio variables
function comprarProductos(){
    let producto = '';
    let precio = 0;
    let cantidad = 0;
    let totalCompra = 0;
    let cantidadTotal = 0;
    let continuarComprando = false;

 // bucle   
    do {
        producto = prompt('Que producto queres comprar?');
        cantidad = parseInt(prompt('cuantos queres comprar?'));

        let cantidadValidada = validarCantidad(cantidad);
    
        switch (producto) {
            case 'manta':
                precio = 2500;
                break;
            case 'nidito':
                precio = 4500;
                break;
            case 'cambiador':
                precio = 3000;
                break;
            case 'cambiador de paseo':
                precio = 5000;
                break
            default:
                alert('un dato es incorrecto');
                precio = 0;
                cantidad = 0;
                break;
        }
        totalCompra += precio * cantidadValidada;
        cantidadTotal += cantidad;
        continuarComprando = confirm('Queres agregar mas productos?');
    } 
    while (continuarComprando)
    return totalCompra;
}  
   
// condicional
    function validarCantidad(cantidad) {
        while (Number.isNaN(cantidad) || cantidad === 0) {
            if (cantidad !== 0) {
                alert('Debe agregar un numero')
            } else {
                alert('Ingrese un numero distinto a cero')
            }
            cantidad = parseInt(prompt('Cuantos desea comprar'));
        }
         return cantidad;
    }
// funcion envio
    function calcularEnvio(totalCompra) {
        let envioADomicilio = confirm('Queres envio a domicilio');
    
        if (envioADomicilio && totalCompra >= 5000) {
            alert('el envio será gratis. El total de tu compra es: '+totalCompra);
    
        }
        return totalCompra;
    }
calcularEnvio(comprarProductos());
*/