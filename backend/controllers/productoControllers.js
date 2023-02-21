import Productos from '../modules/productosModel.js'

export const newProducto = async (req, res, next) =>{

  const producto = await Productos.create(req.body);

  res.status(201).json({
    success: true,
    producto
  })
}

export const getProductos = async(req, res, next) =>{

  const allProducts = await Productos.find();

  res.status(200).json({
    success: true,
    count: allProducts.length,
    allProducts
  })
}

//module.exports = {getProductos, newProducto};
