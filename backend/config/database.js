import mongoose from 'mongoose';

const conexionDataBase = () =>{
  mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
  }).then(con =>{
    console.log(`mongodb conectado en el host: ${con.connection.host}`)
  }).catch((error) =>{
    console.log(error)
  })
}

export default conexionDataBase
