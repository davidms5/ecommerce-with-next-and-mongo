import ErrorHandler from '../utils/errorHandler.js';

export let manejoErrores = (err, req, res, next) =>{

  err.statusCode = statusCode || 500;
  err.message = err.message || 'error interno del servidor';

  res.status(err.statusCode).json({
    success: false,
    error: err.stack
  })


}
