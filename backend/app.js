import express from 'express';
//imports routes
import productos from './routes/productos.js';
//conectando la base de datos


const app = express();
app.use(express.json())

app.use('/api', productos)
export default app;
