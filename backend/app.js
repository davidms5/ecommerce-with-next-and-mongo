import express from 'express';
//imports routes
import productos from './routes/productos.js';
//conectando la base de datos
//
import {conexionDataBase} from './config/database.js';
//conexionDataBase();

const app = express();
app.use(express.json())

app.use('/api/productos', productos)
export default app;
