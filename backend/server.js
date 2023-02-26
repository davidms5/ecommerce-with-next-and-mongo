import app from './app.js';
import dotenv from 'dotenv';
//aqui se import la conexion con la base de datos
import conexionDataBase from './config/database.js'
//set config file
dotenv.config({path: 'backend/config/config.env'})
const puerto = process.env.PORT
conexionDataBase();

const server = app.listen(puerto, () =>{
  console.log(`server iniciado en el puerto ${puerto} en modo ${process.env.NODE_ENV}`);
})

//handle unhandled promises rejections, analizando lo que pone abajo se entiende que hace

process.on("unhandledRejection", err =>{
  console.log(`error ${err.message}`);
  console.log("cerrando el server debido a 'unhandled promise rejection' ");
  server.close(() =>{
    process.exit(1)
  })
})