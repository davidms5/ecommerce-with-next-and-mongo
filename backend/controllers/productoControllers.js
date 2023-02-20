const getProductos = (req, res, next) =>{
  res.status(200).json({
    success: true,
    message: 'esta ruta muestra todos los productos'
  })
}

export {getProductos};
