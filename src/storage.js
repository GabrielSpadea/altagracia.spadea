// const guardar y obtener
const guardarCarritoStorage = (carritoDeCompras) => {
    localStorage.setItem("carrito", JSON.stringify(carritoDeCompras));
};

const obtenerCarritoStorage = () => {
    const carritoStorage = JSON.parse(localStorage.getItem("carrito"));
    return carritoStorage;
}
//--->Funcion para limpar storage<---//
const borrarCarritoStorage = (carritoDeCompras) => {
    localStorage.removeItem(clave)
}

export { guardarCarritoStorage, obtenerCarritoStorage, borrarCarritoStorage };