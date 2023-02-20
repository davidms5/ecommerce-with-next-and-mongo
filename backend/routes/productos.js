import express from 'express';
import {getProductos, newProducto} from '../controllers/productoControllers.js'

const router = express.Router();

router.route('/productos').get(getProductos);

router.route('/productos/new').post(newProducto);

export default router;

