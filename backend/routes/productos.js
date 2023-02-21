import express from 'express';
import {getProductos, newProducto, getSingleProducto, updateProducto, deleteProducto} from '../controllers/productoControllers.js'

const router = express.Router();

router.route('/productos').get(getProductos);

router.route('/productos/:id').get(getSingleProducto);

router.route('/admin/productos/new').post(newProducto);

router.route('/admin/productos/:id').put(updateProducto).delete(deleteProducto);

//router.route('/admin/productos/:id').delete(deleteProducto);

export default router;

