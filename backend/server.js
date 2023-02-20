import app from './app.js';
import dotenv from 'dotenv';
//aqui se import la conexion con la base de datos
import {conexionDataBase} from './config/database.js'
//set config file
dotenv.config({path: 'backend/config/config.env'})
const puerto = process.env.PORT
conexionDataBase();

app.listen(puerto, () =>{
  console.log(`server iniciado en el puerto ${puerto} en modo ${process.env.NODE_ENV}`);
})

