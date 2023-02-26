//error handler class
//
export default class ErrorHandler extends Error {
  constructor(mensaje, statusCode){
    super(mensaje);
    
    this.statusCode = statusCode;

    Error.captureStackTrace(this, this.constructor)

  }
}
