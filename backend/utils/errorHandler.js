//error handler class
//
export class ErrorHandler extends Error {
  constructor(mensaje, statusCode){
    super(mensaje);
    
    this.statusCode = statusCode;

    Error.captureStackTrace(this, this.constructor)

  }
}
