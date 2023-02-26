import Productos from '../modules/productosModel.js';
import ErrorHandler from '../utils/errorHandler.js';

//lo de arriba esta bueno, ya que maneja los casos de error en donde falten datos a la hora de crear un nuevo producto

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

//get single product: el params.id == api/productos/1 por ejemplo
export const getSingleProducto = async(req, res, next) =>{
  const producto = await Productos.findById(req.params.id);

  if(!producto){
    //analizar la linea de abajo
    return next(new ErrorHandler('producto no encontrado', 404))
  }

  res.status(200).json({
    success: true,
    producto
  })
}
//module.exports = {getProductos, newProducto};

//update producto
//
export const updateProducto =async(req, res, next) =>{

  let producto = await Productos.findById(req.params.id);

  if(!producto){
    return next(new ErrorHandler('producto no encontrado', 404))
  }

  producto = await Productos.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  })

  res.status(200).json({
    success: true,
    producto
  })

}

export const deleteProducto = async(req, res, next) =>{

  let producto = await Productos.findById(req.params.id);

  if(!producto){
    return next(new ErrorHandler('producto no encontrado', 404))
  }
  
  await producto.remove();

  res.status(200).json({
    success: true,
    message: 'producto borrado'
  });

}
