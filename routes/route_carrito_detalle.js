const carritoDetalleController = require('../controllers/controller_carrito_detalle');

module.exports = (app) => {
        app.get('/api/carritos_detalles', carritoDetalleController.list);
        app.get('/api/carrito_detalle/:nombre', carritoDetalleController.find);
        app.post('/api/carrito_detalle/', carritoDetalleController.create);
        app.put('/api/carrito_detale/:id', carritoDetalleController.update);
        app.delete('/api/carrito_detalle/:id', carritoDetalleController.delete);
};