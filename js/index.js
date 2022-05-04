'use strict';
import {Producto} from "./Producto.js";

const documentReady = () => {
    const productos = [
        new Producto('Laptop', 8000, 'MSI', 'Tecnología', 10),
        new Producto('Laptop', 5000, 'Gigabyte', 'Tecnología', 10),
        new Producto('Laptop', 6000, 'Asus', 'Tecnología', 10)
    ];
    //get (productos[0].nombre) y set (= 'Impresora')
    console.log(productos[0].nombre = 'Impresora');


    console.log(productos);
}

document.addEventListener('DOMContentLoaded', documentReady);