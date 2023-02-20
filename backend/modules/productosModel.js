import mongoose from 'mongoose';

const productosEsquema = new mongoose.Schema({
  nombre:{
    type: String,
    required:[true, "por favor introduzca un nombre"],
    trim: true,
    maxLength: 100,
  },
  precio: {
    type: Number.
    required: [true, "por favor ingrese precio del producto"],
    maxLength: 5,
    default: 0.0
  },
  descripcion: {
    type: String,
    required: [true, 'por favor ingrese descripcion del product']
  },
  rating: {
    type: Number,
    default: 0
  },
  imagenes: [
    {
      public_id:{
        type: String,
        required: true
      },
      url: {
        type: String,
        required: true
      },
    }
  ],
  categoria: {
    type: String,
    required: [true, 'por favor inserte una categoria']
    enum: {
        values: [
          'electronicos',
          'camaras',
          'laptop',
          'accesorios',
          'audifonos',
          'comida',
          'libros',
          'ropa/zapatos',
          'belleza/salud',
          'deportes',
          'exteriores',
          'hogar',
        ],
      message: 'por favor seleccione una categoria'
    }
  },
  seller: {
    type: String,
    required: [true, 'por favor seleccione product seller']
  },
  stock: {
    type: Number,
    required: [true, 'ingresar stock'],
    maxLength: [5, 'cantidad del producto no puede exceder mas de 5 caracteres'],
    default: 0
  },
  numOfReviews: {
    type: Number,
    default: 0
  },
  reviews: [
    {
      nombre: {
        type: String,
        required: true
      },
      rating: {
        type: Number,
        required: true
      }
    }
  ]
})

const baseProductos = mongoose.model('productos', productosEsquema);

export {baseProductos};
