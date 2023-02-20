import express from 'express';
import {getProductos} from '../controllers/productoControllers.js'

const router = express.Router();

router.route('/productos').get(getProductos);

export default router;

