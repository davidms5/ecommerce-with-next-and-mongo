import Productos from '../modules/productosModel'

const newProducto = async (req, res, next) =>{

  const producto = await Productos.create(req.body);

  res.status(201).json({
    success: true,
    producto
  })
}

const getProductos = (req, res, next) =>{
  res.status(200).json({
    success: true,
    message: 'esta ruta muestra todos los productos'
  })
}

module.exports = {getProductos, newProducto};
