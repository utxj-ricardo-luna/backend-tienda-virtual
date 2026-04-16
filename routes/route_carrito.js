const carritoController = require('../controllers/controller_carrito');

module.exports = (app) => {
        app.get('/api/carritos', carritoController.list);
        app.get('/api/carrito/:nombre', carritoController.find);
        app.post('/api/carrito/', carritoController.create);
        app.put('/api/carrito/:id', carritoController.update);
        app.delete('/api/carrito/:id', carritoController.delete);
};