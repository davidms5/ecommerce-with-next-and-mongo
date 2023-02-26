import ErrorHandler from '../utils/errorHandler.js';

export const manejoErrores = (err, req, res, next) =>{

  err.statusCode = statusCode || 500;

  // manejo de errorrs de ambiente de desarrollo
  if(process.env.NODE_ENV === "development"){
    res.status(err.statusCode).json({
      success: false,
      error: err,
      errMessage: err.message, //este creo que está mal
      stack: err.stack
    })
  }

  //production enviroment errors handlers
  if(process.env.NODE_ENV === 'production'){
    let error = {...err}

    error.message = err.message

    res.status(error.statusCode).json({
      success: false,
      error: error.message || "error interno del server"
    })
  }
 // err.message = err.message || 'error interno del servidor';

//  res.status(err.statusCode).json({
//    success: false,
//    error: err.stack
//  })


}
