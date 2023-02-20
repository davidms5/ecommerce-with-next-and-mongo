//esto es solamente un archivo de para insertar datos de prueba en la base de datos

import Producto from '../modules/productosModel.js';
import dotenv from 'dotenv';
import conexionDataBase from '../config/database.js';

import datosProductos from '../data/productos.json' assert {type: "json"};

dotenv.config({ path: 'backend/config/config.env'});

conexionDataBase();

const seedProductos = async () =>{
    try {

        await Producto.deleteMany();
        console.log("productos borrados");

        await Producto.insertMany(datosProductos);
        console.log("productos agregados");
        process.exit();

    } catch(error){
        console.log(error.message);
        process.exit();
    }
}

seedProductos();